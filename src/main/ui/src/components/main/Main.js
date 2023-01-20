import React from "react";
import { ChartRow, Container } from "./Main.style";
import { WithdrawChart } from "../withdraw/WithdrawChart";
import { DepositDateChart, DepositPersonChart } from "../deposit/DepositCharts";
import { DepositWithdrawChart } from "./Charts";

export const Main = () => {
  return (
    <Container>
      <ChartRow>
        <DepositWithdrawChart />
        <WithdrawChart />
      </ChartRow>
      <ChartRow>
        <DepositPersonChart />
      </ChartRow>
      <ChartRow>
        <DepositDateChart />
      </ChartRow>
    </Container>
  );
};
