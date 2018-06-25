import axios from 'axios';
import * as actions from '../constants/people';

export const getPeople = () => {
  const request = axios.get('/users').then(result => result.data);
  return {
    type: actions.GET_PEOPLE,
    payload: request,
  };
};

export const deletePerson = (id) => {
  // eslint-disable-next-line
  const request = axios.delete(`/users/${id}`).then(result => result.data);
  return {
    type: actions.DELETE_PERSON,
    payload: id,
  };
};

export const editPerson = id => ({
  type: actions.EDIT_PERSON,
  payload: id,
});

export const updatePerson = (id, person) => {
  // eslint-disable-next-line
  const request = axios.put(`/users/${id}`, person);
  return {
    type: actions.UPDATE_PERSON,
    payload: {
      id,
      person,
    },
  };
};

export const cancelUpdatePerson = id => ({
  type: actions.CANCEL_UPDATE,
  payload: id,
});
export const addPerson = (person) => {
  // eslint-disable-next-line
  const request = axios.post('/users', person).then(result => result.data);
  return {
    type: actions.ADD_PERSON,
    payload: person,
  };
};
