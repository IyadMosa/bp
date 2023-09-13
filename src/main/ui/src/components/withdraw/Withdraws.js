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
      sortMethod: (a, b) => {
        let date1 = a.split("/").reverse().join("");
        let date2 = b.split("/").reverse().join("");
        return date1.localeCompare(date2);
      },
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
      date: "",
    },
  };
  const [value, setValue] = useState(emptyValue);
  const disabledSubmit =
    !value.withdraw.amount ||
    !value.withdraw.person ||
    !value.withdraw.reason ||
    !value.withdraw.date;
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
      disabledSubmit={disabledSubmit}
      pageSize={100}
    />
  );
};
