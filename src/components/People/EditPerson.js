import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { cancelUpdatePerson, updatePerson } from "../../redux/actions/people";

class EditPerson extends Component {
  handleEdit = e => {
    e.preventDefault();
    const first_name = this.getName.value;
    const last_name = this.getSurname.value;
    const dob = this.getDate.value;
    const location = this.getLocation.value;
    const person = {
      first_name,
      last_name,
      dob,
      location
    };
    this.props.updatePerson(this.props.person.id, person);
  };

  render() {
    const { first_name, last_name, location, dob, id } = this.props.person;
    return (
      <tr className="text-center">
        <td>
          <input
            defaultValue={first_name}
            ref={input => (this.getName = input)}
          />
        </td>
        <td>
          <input
            defaultValue={last_name}
            ref={input => (this.getSurname = input)}
          />
        </td>
        <td>
          <input defaultValue={dob} ref={input => (this.getDate = input)} />
        </td>
        <td>
          <input
            defaultValue={location}
            ref={input => (this.getLocation = input)}
          />
        </td>
        <td>
          <button onClick={this.handleEdit} className="btn btn-success">
            Update
          </button>
        </td>
        <td>
          <button
            onClick={() => this.props.cancelUpdatePerson(id)}
            className="btn btn-danger"
          >
            Close
          </button>
        </td>
      </tr>
    );
  }
}

EditPerson.propTypes = {
  person: PropTypes.object.isRequired,
  cancelUpdatePerson: PropTypes.func.isRequired,
  updatePerson: PropTypes.func.isRequired
};
export default connect(
  null,
  dispatch => ({
    updatePerson: (id, person) => dispatch(updatePerson(id, person)),
    cancelUpdatePerson: id => dispatch(cancelUpdatePerson(id))
  })
)(EditPerson);
