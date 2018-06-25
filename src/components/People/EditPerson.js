import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cancelUpdatePerson, updatePerson } from '../../redux/actions/people';

class EditPerson extends Component {
  handleEdit = (e) => {
    e.preventDefault();// eslint-disable-next-line
    const first_name = this.getName.value;// eslint-disable-next-line
    const last_name = this.getSurname.value;
    const dob = this.getDate.value;
    const location = this.getLocation.value;
    const person = {
      first_name,
      last_name,
      dob,
      location,
    };// eslint-disable-next-line
    this.props.updatePerson(this.props.person.id, person);
  };

  render() {
    const {
      person,
    } = this.props;
    return (
      <tr className="text-center">
        <td>
          <input
            defaultValue={person.first_name}
            ref={(input) => { this.getName = input; }}
          />
        </td>
        <td>
          <input
            defaultValue={person.last_name}
            ref={(input) => { this.getSurname = input; }}
          />
        </td>
        <td>
          <input defaultValue={person.dob} ref={(input) => { this.getDate = input; }} />
        </td>
        <td>
          <input
            defaultValue={person.location}
            ref={(input) => { this.getLocation = input; }}
          />
        </td>
        <td>
          <button
            type="submit"
            onClick={this.handleEdit}
            className="btn btn-success"
          >
            Update
          </button>
        </td>
        <td>
          <button
            type="submit" // eslint-disable-next-line
            onClick={() => this.props.cancelUpdatePerson(person.id)}
            className="btn btn-danger"
          >
            Close
          </button>
        </td>
      </tr>
    );
  }
}

EditPerson.propTypes = { // eslint-disable-next-line
  person: PropTypes.object.isRequired,
  cancelUpdatePerson: PropTypes.func.isRequired,
  updatePerson: PropTypes.func.isRequired,
};
export default connect(
  null,
  dispatch => ({
    updatePerson: (id, person) => dispatch(updatePerson(id, person)),
    cancelUpdatePerson: id => dispatch(cancelUpdatePerson(id)),
  }),
)(EditPerson);
