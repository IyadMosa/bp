import React, { useEffect, useState } from "react";
import { TableWithAddForm } from "@iyadmosa/react-library/build";
import { DepositForm } from "../deposit/DepositForm";
import { useDispatch, useSelector } from "react-redux";
import { addNewDeposit, listAllDeposits } from "../../actions/DepositAction";

export const Deposits = () => {
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
    <TableWithAddForm
      tableTitle={"Deposit"}
      minWidth={800}
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
