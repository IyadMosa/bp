import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPointsByReason,
  listPointsByReasonMajor,
} from "../../actions/WithdrawAction";
import { ColumnChart, PieChart } from "@iyadmosa/react-library";

export const DetailedWithdrawChart = ({ disabled = false }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByReason());
  }, []);
  const points = useSelector((state) => state.withdraw.points);

  return <ColumnChart points={points} title={"Withdraw Per reason"} />;
};

export const WithdrawChart = ({ disabled = false }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsByReasonMajor());
  }, []);
  const points = useSelector((state) => state.withdraw.majorPoints);
  return <PieChart points={points} title={"Withdraw"} />;
};
