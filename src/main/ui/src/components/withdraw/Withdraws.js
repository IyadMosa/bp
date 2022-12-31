import React, { useEffect, useMemo, useState } from "react";
import { TableScreen } from "@iyadmosa/react-library/build";
import { useDispatch, useSelector } from "react-redux";
import { WithdrawForm } from "./WithdrawForm";
import { addNewWithdraw, listAllWithdraws } from "../../actions/WithdrawAction";
import { listAllDeposits } from "../../actions/DepositAction";

export const Withdraws = () => {
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
      Header: "Person",
      accessor: "person",
    },
    {
      Header: "Reason",
      accessor: "reason",
    },
    {
      Header: "Date",
      accessor: "date",
    },
  ];

  const data = useSelector((state) => state.withdraw.withdraws);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAllWithdraws());
  }, []);
  const emptyValue = {
    addToDeposit: false,
    withdraw: {
      person: "",
      amount: 0,
      reason: "",
      date: new Date(),
    },
  };
  const [value, setValue] = useState(emptyValue);
  return (
    <TableScreen
      title={"Withdraws"}
      minWidth={800}
      data={data}
      columns={depositsColumns}
      addForm={<WithdrawForm value={value} onChange={setValue} />}
      onAddSubmit={() => {
        dispatch(addNewWithdraw(value));
        setValue(emptyValue);
      }}
      onInit={() => dispatch(listAllWithdraws())}
      modelTitle={"addn new withdraw"}
    />
  );
};
