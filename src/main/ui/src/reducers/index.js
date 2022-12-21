import { combineReducers } from "redux";
import depositReducer from "./DepositReducer";
import withdrawReducer from "./WithdrawReducer";

export default combineReducers({
  deposit: depositReducer,
  withdraw: withdrawReducer,
});
