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
    {
      Header: "Major",
      accessor: "major",
    },
    {
      Header: "Minor",
      accessor: "minor",
    }, {
      Header: "Minor2",
      accessor: "minor2",
    },
  ];

  const data = useSelector((state) => state.reason.reasons);
  const dispatch = useDispatch();
  const emptyValue = {
    major: "",
    minor: "",
    minor2: "",
  };
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    dispatch(listReasons());
  }, []);
  const disabledSubmit = !value.major || !value.minor;

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
      }}
      modelTitle={"addn new reason"}
      onInit={() => dispatch(listReasons())}
      disabledSubmit={disabledSubmit}
    />
  );
};
