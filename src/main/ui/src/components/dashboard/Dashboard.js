import React, { useEffect, useState } from "react";
import { DashboardScreen } from "@iyadmosa/react-library";
import { useDispatch, useSelector } from "react-redux";
import { listPointsAllComponents } from "../../actions/DashbaordAction";

export const Dashboard = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsAllComponents(from, to));
  }, [from, to]);
  const all = useSelector((state) => state.dashboard.all);
  const {
    total,
    withdraw_major,
    withdraw_minor,
    deposit_person,
    deposit_date,
  } = all;
  const charts = [
    [
      {
        title: "Deposit and Withdraw",
        type: "Column",
        points: total,
      },
      {
        title: "Withdraw",
        type: "Pie",
        points: withdraw_major,
      },
    ],
    [
      {
        title: "Deposit Per Person",
        type: "Column",
        points: deposit_person,
      },
    ],
    [
      {
        title: "Deposit per month",
        type: "Date",
        points: deposit_date,
        yLabel: "Total (NIS)",
      },
    ],
    [
      {
        title: "Withdraw Per reason",
        type: "Column",
        points: withdraw_minor,
      },
    ],
  ];
  return (
    <DashboardScreen
      title={"Dashboard"}
      charts={charts}
      setFrom={setFrom}
      setTo={setTo}
      onInit={() => dispatch(listPointsAllComponents(from, to))}
    />
  );
};
