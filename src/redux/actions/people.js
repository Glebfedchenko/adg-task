import axios from "axios";
import * as actions from "../constants/people";

export const getPeople = () => {
  const request = axios.get("/users").then(result => result.data);
  return {
    type: actions.GET_PEOPLE,
    payload: request
  };
};

export const deletePerson = id => {
  const request = axios.delete(`/users/${id}`).then(result => result.data);
  return {
    type: actions.DELETE_PERSON,
    payload: id
  };
};

export const editPerson = id => {
  return {
    type: actions.EDIT_PERSON,
    payload: id
  };
};
export const updatePerson = (id, data) => {
  const request = axios.put(`/users/${id}`).then(result => result.data);
  return {
    type: actions.UPDATE_PERSON,
    payload: { id, data }
  };
};

export const addPerson = person => {
  const request = axios.post("/users", person).then(result => result.data);
  return {
    type: actions.ADD_PERSON,
    payload: person
  };
};
