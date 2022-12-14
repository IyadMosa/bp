import { GET_ALL_PERSONS } from "../actions/types";

const initialState = {
  persons: [],
};

export default function personReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PERSONS:
      return {
        ...state,
        persons: action.payload,
      };

    default:
      return state;
  }
}
