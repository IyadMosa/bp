import React from "react";
import { Container, TablesWrapper, TitleWrapper } from "./Main.style";
import { Deposits } from "../deposit/Deposits";
import { Withdraws } from "../withdraw/Withdraws";

export const Main = () => {
  return (
    <Container className={"modal"}>
      <TitleWrapper>Main Page</TitleWrapper>
      <TablesWrapper>
        <Deposits />
        <Withdraws />
      </TablesWrapper>
    </Container>
  );
};
