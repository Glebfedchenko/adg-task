import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
const Summary = ({ people }) => {
  const fromKiev = people.filter(
    person => person.location === "Kiev" || person.location === "kiev"
  );

  const dates = people
    .filter(user => user.dob !== null)
    .map(d => moment(d.dob));

  const firstMinDate = moment.min(dates);

  const firstNames = people
    .filter(user => user.first_name !== null)
    .map(fn => fn.first_name);
  const lastNames = people
    .filter(user => user.last_name !== null)
    .map(ln => ln.last_name);
  function longest(arr) {
    var lgth = 0;
    var longest;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
      }
    }
    return longest;
  }
  return (
    <div className="summary">
      <h1>Summary</h1>
      <p>{`There are ${people ? fromKiev.length : null} people from Kiev`}</p>
      <p>{`The sum of ages of three oldes people from table is`}</p>
      <p>{`Longest string of first name + last name pair is ${longest(
        firstNames
      )} and ${longest(lastNames)}`}</p>
    </div>
  );
};
Summary.propTypes = {
  people: PropTypes.array.isRequired
};
export default connect(state => ({ people: state.people.people }))(Summary);
