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
            person.id === action.payload
              ? { ...person, editing: !person.editing }
              : person
        )
      };
    case actions.UPDATE_PERSON:
      return {
        ...state,
        people: state.people.map(
          person =>
            person.id === action.payload
              ? {
                  ...person,
                  first_name: action.payload.data.first_name,
                  last_name: action.payload.data.last_name,
                  dob: action.payload.data.dob,
                  location: action.payload.data.location,
                  editing: !person.editing
                }
              : person
        )
      };
    default:
      return state;
  }
};
