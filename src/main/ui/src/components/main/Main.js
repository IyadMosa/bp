import React, { useEffect, useState } from "react";
import { Container, TablesWrapper, TitleWrapper } from "./Main.style";
import { TableWithAddForm } from "@iyadmosa/react-library/build";
import { DepositForm } from "../deposit/DepositForm";
import { useDispatch, useSelector } from "react-redux";
import { addNewDeposit, listAllDeposits } from "../../actions/DepositAction";

export const Main = () => {
  const depositsColumns = [
    {
      Header: "ID",
      accessor: "id",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "Amount",
      accessor: "amount",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "Deposit By",
      accessor: "depositBy",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "Date",
      accessor: "date",
      style: {
        textAlign: "center",
      },
    },
  ];

  const deposits = useSelector((state) => state.deposit.deposits);
  const dispatch = useDispatch();
  const emptyDeposit = {
    depositBy: "",
    amount: 0,
  };
  const [depositValue, setDepositValue] = useState(emptyDeposit);
  useEffect(() => {
    dispatch(listAllDeposits());
  }, []);
  return (
    <Container className={"modal"}>
      <TitleWrapper>Main Page</TitleWrapper>
      <TablesWrapper>
        <TableWithAddForm
          tableTitle={"Deposit"}
          minWidth={800}
          data={deposits}
          columns={depositsColumns}
          addForm={
            <DepositForm value={depositValue} onChange={setDepositValue} />
          }
          onAddSubmit={() => {
            dispatch(addNewDeposit(depositValue));
            setDepositValue(emptyDeposit);
            dispatch(listAllDeposits());
          }}
          modelTitle={"addn new deposit"}
        />

        {/*<TableWithAddForm*/}
        {/*  tableTitle={"Withdraw"}*/}
        {/*  minWidth={800}*/}
        {/*  data={data}*/}
        {/*  columns={columns}*/}
        {/*  addForm={*/}
        {/*    <DepositForm*/}
        {/*      value={depositValue}*/}
        {/*      onChange={(value) => setDepositValue({ ...depositValue, value })}*/}
        {/*    />*/}
        {/*  }*/}
        {/*  modelTitle={"addn new withdraw"}*/}
        {/*/>*/}
      </TablesWrapper>
    </Container>
  );
};
