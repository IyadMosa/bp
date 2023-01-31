import React, { useEffect, useState } from "react";
import { ChartRow, Container, DateRangeRow } from "./Main.style";
import { DepositDateChart } from "../deposit/DepositCharts";
import {
  ColumnChart,
  DatePickerCustom,
  PieChart,
} from "@iyadmosa/react-library";
import { useDispatch, useSelector } from "react-redux";
import { listPointsAllComponents } from "../../actions/DashbaordAction";

export const Main = () => {
  const [from, setFrom] = useState("01/01/2023");
  const [to, setTo] = useState("28/01/2023");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPointsAllComponents(from, to));
  }, [from, to]);
  const all = useSelector((state) => state.dashboard.all);
  const { total, withdraw_major, withdraw_minor, deposit } = all;
  return (
    <Container>
      <DateRangeRow>
        <DatePickerCustom onChange={setFrom} width={100} date={from} />
        <DatePickerCustom onChange={setTo} width={100} date={to} />
      </DateRangeRow>
      <ChartRow>
        <ColumnChart points={total} title={"Deposit and Withdraw"} />
        <PieChart points={withdraw_major} title={"Withdraw"} />
      </ChartRow>
      <ChartRow>
        <ColumnChart points={deposit} title={"Deposit Per Person"} />
      </ChartRow>
      <ChartRow>
        <DepositDateChart from={from} to={to} />
      </ChartRow>
      <ChartRow>
        <ColumnChart points={withdraw_minor} title={"Withdraw Per reason"} />;
      </ChartRow>
    </Container>
  );
};
