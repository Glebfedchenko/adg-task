import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { deletePerson, editPerson } from '../../redux/actions/people';

class Person extends Component {
  delete = (id) => {
    // eslint-disable-next-line
    this.props.deletePerson(id);
  };

  edit = (id) => {
    // eslint-disable-next-line
    this.props.editPerson(id);
  };

  render() {
    const { person } = this.props;
    return (
      <tr className="text-center">
        <td>
          {person.first_name}
        </td>
        <td>
          {person.last_name}
        </td>
        <td>
          {moment(person.dob).format('MM/DD/YYYY')}
        </td>
        <td>
          {person.location}
        </td>
        <td>
          <button type="submit" className="btn btn-warning" onClick={() => this.edit(person.id)}>
            Edit
          </button>
        </td>
        <td>
          <button type="submit" className="btn btn-danger" onClick={() => this.delete(person.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
Person.propTypes = {
  deletePerson: PropTypes.func.isRequired,
  editPerson: PropTypes.func.isRequired, // eslint-disable-next-line
  person: PropTypes.object.isRequired,
};
export default connect(
  null,
  dispatch => ({
    deletePerson: id => dispatch(deletePerson(id)),
    editPerson: id => dispatch(editPerson(id)),
  }),
)(Person);
