import { GET_ALL_WITHDRAWS } from "../actions/types";

const initialState = {
  withdraws: [],
};

export default function withdrawReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_WITHDRAWS:
      return {
        ...state,
        withdraws: action.payload,
      };

    default:
      return state;
  }
}
