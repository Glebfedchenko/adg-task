import * as actions from "../constants/people";
const initialState = {
  people: []
};

export const people = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PEOPLE:
      return {
        ...state,
        people: action.payload
      };
    case actions.DELETE_PERSON:
      const idToDelete = action.payload;
      return {
        ...state,
        people: state.people.filter(person => person.id !== idToDelete)
      };
    case actions.ADD_PERSON:
      return {
        ...state,
        people: state.people.concat(action.payload)
      };
    case actions.EDIT_PERSON:
      return {
        ...state,
        people: state.people.map(
          person =>
            person.id === action.payload ? { ...person, editing: true } : person
        )
      };
    case actions.UPDATE_PERSON:
      return {
        ...state,
        people: state.people.map(
          person =>
            person.id === action.payload.id
              ? {
                  ...person,
                  first_name: action.payload.person.first_name,
                  last_name: action.payload.person.last_name,
                  dob: action.payload.person.dob,
                  location: action.payload.person.location,
                  editing: false
                }
              : person
        )
      };
    case actions.CANCEL_UPDATE:
      return {
        ...state,
        people: state.people.map(
          person =>
            person.id === action.payload
              ? { ...person, editing: false }
              : person
        )
      };
    default:
      return state;
  }
};
