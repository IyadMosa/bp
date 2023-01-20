import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  listPointsByDate,
  listPointsByPerson,
} from "../../actions/DepositAction";
import { ColumnChart, DateLineChart } from "@iyadmosa/react-library";

export const DepositPersonChart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByPerson());
  }, []);
  const points = useSelector((state) => state.deposit.personPoints);

  return (
    <ColumnChart
      width="100%"
      height="400px"
      points={points}
      title={"Deposit Per Person"}
    />
  );
};

export const DepositDateChart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByDate());
  }, []);
  const points = useSelector((state) => state.deposit.datePoints);
  return (
    <DateLineChart
      points={points}
      title={"Deposit per month"}
      yLabel={"Total (NIS)"}
    />
  );
};
