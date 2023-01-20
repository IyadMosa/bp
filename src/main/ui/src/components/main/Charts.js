import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getDepositPoint } from "../../actions/DepositAction";
import { getWithdrawPoint } from "../../actions/WithdrawAction";

import { ColumnChart } from "@iyadmosa/react-library";

export const DepositWithdrawChart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepositPoint());
    dispatch(getWithdrawPoint());
  }, []);
  const depositPoint = useSelector((state) => state.deposit.depositPoint);
  const withdrawPoint = useSelector((state) => state.withdraw.withdrawPoint);
  const points = [depositPoint, withdrawPoint];
  return (
    <ColumnChart
      width="100%"
      height="400px"
      points={points}
      title={"Deposit and Withdraw"}
    />
  );
};
