import { DASHBOARD_GET_ALL } from "../actions/types";

const initialState = {
  all: {},
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_GET_ALL:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
}
