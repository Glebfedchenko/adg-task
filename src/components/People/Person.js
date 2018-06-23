import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { deletePerson, editPerson } from "../../redux/actions/people";

class Person extends Component {
  delete = id => {
    this.props.deletePerson(id);
  };
  edit = id => {
    this.props.editPerson(id);
  };
  render() {
    const { id, first_name, last_name, dob, location } = this.props.person;
    return (
      <tr className="text-center">
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{moment(dob).format("MM/DD/YYYY")}</td>
        <td>{location}</td>
        <td>
          <button className="btn btn-warning" onClick={() => this.edit(id)}>
            Edit
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => this.delete(id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
Person.propTypes = {
  deletePerson: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired
};
export default connect(
  null,
  dispatch => ({
    deletePerson: id => dispatch(deletePerson(id)),
    editPerson: id => dispatch(editPerson(id))
  })
)(Person);
