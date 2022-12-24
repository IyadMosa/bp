import React, { useEffect, useState } from "react";
import { TableScreen } from "@iyadmosa/react-library/build";
import { useDispatch, useSelector } from "react-redux";
import { addReason, listReasons } from "../../actions/ReasonAction";
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

  const data = useSelector((state) => state.reason.reasons);
  const dispatch = useDispatch();
  const emptyValue = {
    name: "",
  };
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    dispatch(listReasons());
  }, []);
  return (
    <TableScreen
      title={"Reasons"}
      minWidth={800}
      data={data}
      columns={columns}
      addForm={<ReasonForm value={value} onChange={setValue} />}
      onAddSubmit={() => {
        dispatch(addReason(value));
        setValue(emptyValue);
        dispatch(listReasons());
      }}
      modelTitle={"addn new reason"}
    />
  );
};
