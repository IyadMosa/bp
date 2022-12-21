import { GET_ALL_DEPOSIT } from "../actions/types";

const initialState = {
  deposits: [],
};

export default function depositReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DEPOSIT:
      return {
        ...state,
        deposits: action.payload,
      };

    default:
      return state;
  }
}
