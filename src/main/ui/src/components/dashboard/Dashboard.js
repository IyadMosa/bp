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
    withdraw_minor2,
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
        title: "Withdraw Per reason minor",
        type: "Column",
        points: withdraw_minor,
      },
    ],
    [
      {
        title: "Withdraw Per reason details (Construction)",
        type: "table",
        table_columns: [
          {
            Header: "Reason",
            accessor: "label",
            style: {
              textAlign: "center",
            },
          },
          {
            Header: "Value",
            accessor: "value",
            style: {
              textAlign: "center",
            },
          },
        ],
        table_data: withdraw_minor2,
      },
    ],
    [
      {
        title: "Withdraw Per reason details (Building Permit)",
        type: "table",
        table_columns: [
          {
            Header: "Reason",
            accessor: "label",
            style: {
              textAlign: "center",
            },
          },
          {
            Header: "Value",
            accessor: "value",
            style: {
              textAlign: "center",
            },
          },
        ],
        table_data: withdraw_minor2,
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
      refresh={false}
    />
  );
};
