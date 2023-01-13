import React, { useEffect, useState } from "react";
import { TableScreen } from "@iyadmosa/react-library";
import { DepositForm } from "../deposit/DepositForm";
import { useDispatch, useSelector } from "react-redux";
import { addNewDeposit, listAllDeposits } from "../../actions/DepositAction";

export const Deposits = () => {
  const depositsColumns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Deposit By",
      accessor: "person",
    },
    {
      Header: "Date",
      accessor: "date",
      sortMethod: (a, b) => {
        let date1 = a.split("/").reverse().join("");
        let date2 = b.split("/").reverse().join("");
        return date1.localeCompare(date2);
      },
    },
  ];

  const deposits = useSelector((state) => state.deposit.deposits);
  const dispatch = useDispatch();
  const emptyDeposit = {
    deposit: {
      person: "",
      amount: 0,
      date: new Date(),
    },
  };
  const [depositValue, setDepositValue] = useState(emptyDeposit);
  useEffect(() => {
    dispatch(listAllDeposits());
  }, []);
  return (
    <TableScreen
      title={"Deposits"}
      data={deposits}
      columns={depositsColumns}
      addForm={<DepositForm value={depositValue} onChange={setDepositValue} />}
      onAddSubmit={() => {
        dispatch(addNewDeposit(depositValue));
        setDepositValue(emptyDeposit);
      }}
      modelTitle={"addn new deposit"}
      onInit={() => dispatch(listAllDeposits())}
    />
  );
};
