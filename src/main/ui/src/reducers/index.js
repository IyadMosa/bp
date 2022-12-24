import { combineReducers } from "redux";
import depositReducer from "./DepositReducer";
import withdrawReducer from "./WithdrawReducer";
import personReducer from "./PersonReducer";
import reasonReducer from "./ReasonReducer";

export default combineReducers({
  deposit: depositReducer,
  withdraw: withdrawReducer,
  person: personReducer,
  reason: reasonReducer,
});
