import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Person from './Person';
import EditPerson from './EditPerson';
import { getPeople } from '../../redux/actions/people';

class People extends Component {
  componentDidMount() { // eslint-disable-next-line
    this.props.getPeople();
  }

  render() {
    const { people } = this.props;
    return (
      <Fragment>
        <table className="table table-dark" style={{ marginTop: '10px' }}>
          <thead>
            <tr
              className="text-center"
              style={{
                backgroundColor: 'yellow',
                color: '#000',
                border: 'none',
              }}
            >
              <th scope="col">
                Name
              </th>
              <th scope="col">
                Surname
              </th>
              <th scope="col">
                Date
              </th>
              <th scope="col">
                Location
              </th>
              <th scope="col">
                Edit
              </th>
              <th scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {people
              ? people.map(person => (
                <Fragment key={person.id}>
                  {person.editing ? (
                    <EditPerson person={person} />
                  ) : (
                    <Person person={person} />
                  )}
                </Fragment>
              ))
              : null}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
People.propTypes = {
  // eslint-disable-next-line
  people: PropTypes.array.isRequired,
  getPeople: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    people: state.people.people,
  }),
  dispatch => ({ getPeople: () => dispatch(getPeople()) }),
)(People);
