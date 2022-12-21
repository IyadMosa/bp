import { combineReducers } from "redux";
import depositReducer from "./DepositReducer";

export default combineReducers({
  deposit: depositReducer,
});
