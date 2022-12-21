import React, { useEffect, useState } from "react";
import { TableWithAddForm } from "@iyadmosa/react-library/build";
import { useDispatch, useSelector } from "react-redux";
import { WithdrawForm } from "./WithdrawForm";
import { addNewWithdraw, listAllWithdraws } from "../../actions/WithdrawAction";

export const Withdraws = () => {
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

  const data = useSelector((state) => state.withdraw.withdraws);
  const dispatch = useDispatch();
  const emptyValue = {
    depositBy: "",
    amount: 0,
  };
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    dispatch(listAllWithdraws());
  }, []);
  return (
    <TableWithAddForm
      tableTitle={"Withdraws"}
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
