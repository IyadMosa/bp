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
      accessor: "depositBy",
    },
    {
      Header: "Date",
      accessor: "date",
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
    <TableScreen
      title={"Deposits"}
      data={deposits}
      columns={depositsColumns}
      addForm={<DepositForm value={depositValue} onChange={setDepositValue} />}
      onAddSubmit={() => {
        dispatch(addNewDeposit(depositValue));
        setDepositValue(emptyDeposit);
        dispatch(listAllDeposits());
      }}
      modelTitle={"addn new deposit"}
    />
  );
};
