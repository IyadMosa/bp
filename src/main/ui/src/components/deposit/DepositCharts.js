import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  listPointsByDate,
  listPointsByPerson,
} from "../../actions/DepositAction";
import { ColumnChart, DateLineChart } from "@iyadmosa/react-library";

export const DepositPersonChart = ({ from, to }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByPerson(from, to));
  }, []);
  const points = useSelector((state) => state.deposit.personPoints);

  return <ColumnChart points={points} title={"Deposit Per Person"} />;
};

export const DepositDateChart = ({ from, to }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByDate(from, to));
  }, []);
  const points = useSelector((state) => state.deposit.datePoints);
  const points_updated = points?.map((deposit) => {
    return { date: deposit.label, value: deposit.value };
  });
  return (
    <DateLineChart
      points={points_updated}
      title={"Deposit per month"}
      yLabel={"Total (NIS)"}
    />
  );
};
