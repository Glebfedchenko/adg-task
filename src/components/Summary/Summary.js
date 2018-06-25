import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { go } from './helpers';

const Summary = ({ people }) => {
  const fromKiev = people.filter(
    person => person.location === 'Kiev' || person.location === 'kiev',
  );

  const dates = people
    .filter(person => person.dob !== null)
    .map(person => person.dob)
    .sort((a, b) => {
      // eslint-disable-next-line
      a = a
        .split('-')
        .reverse()
        .join('');
      // eslint-disable-next-line
      b = b
        .split('')
        .reverse()
        .join('');
      // eslint-disable-next-line
      return a > b ? 1 : a < b ? -1 : 0;
    })
    .slice(0, 3);
  const sumOfDates = go(dates);

  const firstNames = people
    .filter(person => person.first_name !== null)
    .map(fn => fn.first_name);
  const lastNames = people
    .filter(person => person.last_name !== null)
    .map(person => person.last_name);
  function longest(arr) {
    let lgth = 0;
    // eslint-disable-next-line
    let longest;
    // eslint-disable-next-line
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > lgth) {
        lgth = arr[i].length;
        longest = arr[i];
      }
    }
    return longest;
  }
  return (
    <div className="summary">
      <h1>
        Summary
      </h1>
      <p>
        {`There are ${people ? fromKiev.length : null} people from Kiev`}
      </p>
      <p>
        {`The sum of ages of three oldest people from table : ${sumOfDates}`}
      </p>
      <p>
        {`Longest string of first name + last name pair is ${longest(
          firstNames,
        )} and ${longest(lastNames)}`}
      </p>
    </div>
  );
};

Summary.propTypes = {
  // eslint-disable-next-line
  people: PropTypes.array.isRequired,
};
export default connect(state => ({ people: state.people.people }))(Summary);
