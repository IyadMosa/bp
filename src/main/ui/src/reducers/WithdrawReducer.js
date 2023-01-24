import {
  GET_ALL_WITHDRAWS,
  GET_ALL_WITHDRAWS_POINTS_BY_REASON,
  GET_ALL_WITHDRAWS_POINTS_BY_REASON_MAJOR,
  GET_DEPOSIT_POINT,
  GET_WITHDRAW_POINT,
} from "../actions/types";

const initialState = {
  withdraws: [],
  points: [],
  majorPoints: [],
  withdrawPoint: {},
};

export default function withdrawReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_WITHDRAWS:
      return {
        ...state,
        withdraws: action.payload,
      };

    case GET_ALL_WITHDRAWS_POINTS_BY_REASON:
      return {
        ...state,
        points: action.payload,
      };
    case GET_ALL_WITHDRAWS_POINTS_BY_REASON_MAJOR:
      return {
        ...state,
        majorPoints: action.payload,
      };
    case GET_WITHDRAW_POINT:
      return {
        ...state,
        withdrawPoint: action.payload,
      };
    default:
      return state;
  }
}
