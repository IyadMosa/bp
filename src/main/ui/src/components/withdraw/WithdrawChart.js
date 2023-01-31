import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPointsByReason,
  listPointsByReasonMajor,
} from "../../actions/WithdrawAction";
import { ColumnChart, PieChart } from "@iyadmosa/react-library";

export const DetailedWithdrawChart = ({ from, to }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByReason(from, to));
  }, []);
  const points = useSelector((state) => state.withdraw.points);

  return <ColumnChart points={points} title={"Withdraw Per reason"} />;
};

export const WithdrawChart = ({ from, to }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByReasonMajor(from, to));
  }, []);
  const points = useSelector((state) => state.withdraw.majorPoints);
  return <PieChart points={points} title={"Withdraw"} />;
};
