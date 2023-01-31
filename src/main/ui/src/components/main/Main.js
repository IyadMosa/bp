import React, { useEffect, useState } from "react";
import { ChartRow, Container, DateRangeRow } from "./Main.style";
import {
  ColumnChart,
  DateLineChart,
  DatePickerCustom,
  PieChart,
} from "@iyadmosa/react-library";
import { useDispatch, useSelector } from "react-redux";
import { listPointsAllComponents } from "../../actions/DashbaordAction";

export const Main = () => {
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
  const deposit_date_updated = deposit_date?.map((deposit) => {
    return { date: deposit.label, value: deposit.value };
  });
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
        <ColumnChart points={deposit_person} title={"Deposit Per Person"} />
      </ChartRow>
      <ChartRow>
        <DateLineChart
          points={deposit_date_updated}
          title={"Deposit per month"}
          yLabel={"Total (NIS)"}
        />
      </ChartRow>
      <ChartRow>
        <ColumnChart points={withdraw_minor} title={"Withdraw Per reason"} />;
      </ChartRow>
    </Container>
  );
};
