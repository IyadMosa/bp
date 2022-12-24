import React, { useEffect, useState } from "react";
import { TableScreen } from "@iyadmosa/react-library/build";
import { useDispatch, useSelector } from "react-redux";
import { addNewWithdraw, listAllWithdraws } from "../../actions/WithdrawAction";
import { ReasonForm } from "./ReasonForm";

export const Reasons = () => {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
  ];

  const data = useSelector((state) => state.withdraw.withdraws);
  const dispatch = useDispatch();
  const emptyValue = {
    name: "",
  };
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    dispatch(listAllWithdraws());
  }, []);
  return (
    <TableScreen
      title={"Reasons"}
      minWidth={800}
      data={data}
      columns={columns}
      addForm={<ReasonForm value={value} onChange={setValue} />}
      onAddSubmit={() => {
        dispatch(addNewWithdraw(value));
        setValue(emptyValue);
        dispatch(listAllWithdraws());
      }}
      modelTitle={"addn new reason"}
    />
  );
};
