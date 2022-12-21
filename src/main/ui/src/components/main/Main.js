import React, { useState } from "react";
import { Container, TablesWrapper, TitleWrapper } from "./Main.style";
import { TableWithAddForm } from "@iyadmosa/react-library/build";
import { DepositForm } from "../deposit/DepositForm";

export const Main = () => {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "FirstName",
      accessor: "firstName",
      style: {
        textAlign: "center",
      },
    },
  ];
  const data = [];
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [depositValue, setDepositValue] = useState({
    name: "iyada",
    amount: "0",
  });

  return (
    <Container className={"modal"}>
      <TitleWrapper>Main Page</TitleWrapper>
      <TablesWrapper>
        <TableWithAddForm
          tableTitle={"Deposit"}
          minWidth={800}
          data={data}
          columns={columns}
          addForm={
            <DepositForm
              value={depositValue}
              onChange={(value) => setDepositValue({ ...depositValue, value })}
            />
          }
          modelTitle={"addn new deposit"}
        />

        <TableWithAddForm
          tableTitle={"Withdraw"}
          minWidth={800}
          data={data}
          columns={columns}
          addForm={
            <DepositForm
              value={depositValue}
              onChange={(value) => setDepositValue({ ...depositValue, value })}
            />
          }
          modelTitle={"addn new withdraw"}
        />
      </TablesWrapper>
    </Container>
  );
};
