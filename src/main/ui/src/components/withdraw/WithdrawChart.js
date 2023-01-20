import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPointsByReason } from "../../actions/WithdrawAction";
import { ColumnChart } from "@iyadmosa/react-library";

export const WithdrawChart = ({ disabled = false }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByReason());
  }, []);
  const points = useSelector((state) => state.withdraw.points);

  return (
    <ColumnChart
      width="100%"
      height="600px"
      points={points}
      title={"Withdraw Per reason"}
    />
  );
};
