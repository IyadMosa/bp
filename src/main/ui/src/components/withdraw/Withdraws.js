import React, { useEffect, useState } from "react";
import { TableScreen } from "@iyadmosa/react-library/build";
import { useDispatch, useSelector } from "react-redux";
import { WithdrawForm } from "./WithdrawForm";
import { addNewWithdraw, listAllWithdraws } from "../../actions/WithdrawAction";

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
      Header: "Deposit By",
      accessor: "depositBy",
    },
    {
      Header: "Date",
      accessor: "date",
    },
  ];

  const data = useSelector((state) => state.withdraw.withdraws);
  const dispatch = useDispatch();
  const emptyValue = {
    by: "",
    amount: 1,
  };
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    dispatch(listAllWithdraws());
  }, []);
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
        dispatch(listAllWithdraws());
      }}
      modelTitle={"addn new withdraw"}
    />
  );
};
