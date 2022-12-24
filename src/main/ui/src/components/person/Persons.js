import React, { useEffect, useState } from "react";
import { TableScreen } from "@iyadmosa/react-library/build";
import { useDispatch, useSelector } from "react-redux";
import { PersonForm } from "../person/PersonForm";
import { addNewWithdraw, listAllWithdraws } from "../../actions/WithdrawAction";

export const Persons = () => {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
  ];

  const data = useSelector((state) => state.withdraw.withdraws);
  const dispatch = useDispatch();
  const emptyValue = {
    name: "",
    phone: "",
  };
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    dispatch(listAllWithdraws());
  }, []);
  return (
    <TableScreen
      title={"Persons"}
      minWidth={800}
      data={data}
      columns={columns}
      addForm={<PersonForm value={value} onChange={setValue} />}
      onAddSubmit={() => {
        dispatch(addNewWithdraw(value));
        setValue(emptyValue);
        dispatch(listAllWithdraws());
      }}
      modelTitle={"addn new person"}
    />
  );
};
