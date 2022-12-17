import React, { useState } from "react";
import {
  ButtonsWrapper,
  Container,
  HeaderWrapper,
  TablesWrapper,
  TitleWrapper,
} from "./Main.style";
import { Button, Table, Modal } from "@iyadmosa/react-library/dist/cjs";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@mui/material";

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

  const data = [
    {
      id: "1",
      firstName: "iyada",
    },
  ];
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  return (
    <Container>
      <TitleWrapper>Main Page</TitleWrapper>
      <TablesWrapper>
        <Table
          tableTitle={"Deposit"}
          minWidth={800}
          data={data}
          columns={columns}
          addComponent={
            <IconButton onClick={() => setDepositModalOpen(true)}>
              <AddCircleIcon />
            </IconButton>
          }
        />

        <Table
          tableTitle={"Withdraw"}
          minWidth={800}
          data={data}
          columns={columns}
          addComponent={
            <IconButton onClick={() => setWithdrawModalOpen(true)}>
              <AddCircleIcon />
            </IconButton>
          }
        />
      </TablesWrapper>
      {isDepositModalOpen && (
        <Modal
          onClose={() => setDepositModalOpen(false)}
          title={"Add new deposit"}
        >
          <div></div>
        </Modal>
      )}
      {isWithdrawModalOpen && (
        <Modal
          onClose={() => setWithdrawModalOpen(false)}
          title={"Add new withdraw"}
        >
          <div></div>
        </Modal>
      )}
    </Container>
  );
};
