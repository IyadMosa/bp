import { combineReducers } from "redux";
import depositReducer from "./DepositReducer";
import withdrawReducer from "./WithdrawReducer";
import personReducer from "./PersonReducer";
import reasonReducer from "./ReasonReducer";
import dashboardReducer from "./DashboardReducer";
import configurationReducer from "./ConfigurationReducer";

export default combineReducers({
  deposit: depositReducer,
  withdraw: withdrawReducer,
  person: personReducer,
  reason: reasonReducer,
  dashboard: dashboardReducer,
  configuration: configurationReducer,
});
