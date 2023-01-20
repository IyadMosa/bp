import {
  GET_ALL_DEPOSIT,
  GET_ALL_DEPOSITS_POINTS_BY_DATE,
  GET_ALL_DEPOSITS_POINTS_BY_PERSON,
  GET_DEPOSIT_POINT,
} from "../actions/types";

const initialState = {
  deposits: [],
  personPoints: [],
  datePoints: [],
  depositPoint: {},
};

export default function depositReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DEPOSIT:
      return {
        ...state,
        deposits: action.payload,
      };
    case GET_ALL_DEPOSITS_POINTS_BY_PERSON:
      return {
        ...state,
        personPoints: action.payload,
      };
    case GET_ALL_DEPOSITS_POINTS_BY_DATE:
      return {
        ...state,
        datePoints: action.payload,
      };
    case GET_DEPOSIT_POINT:
      return {
        ...state,
        depositPoint: action.payload,
      };
    default:
      return state;
  }
}
