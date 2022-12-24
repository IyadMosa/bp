import { GET_ALL_REASONS } from "../actions/types";

const initialState = {
  reasons: [],
};

export default function reasonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REASONS:
      return {
        ...state,
        reasons: action.payload,
      };

    default:
      return state;
  }
}
