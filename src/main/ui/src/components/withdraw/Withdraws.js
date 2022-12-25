import React, { useEffect, useState } from "react";
import { TableScreen } from "@iyadmosa/react-library/build";
import { useDispatch, useSelector } from "react-redux";
import { WithdrawForm } from "./WithdrawForm";
import { addNewWithdraw, listAllWithdraws } from "../../actions/WithdrawAction";
import { listPersons } from "../../actions/PersonAction";
import { listReasons } from "../../actions/ReasonAction";

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

  useEffect(() => {
    dispatch(listPersons());
  }, []);
  const data = useSelector((state) => state.withdraw.withdraws);
  const persons = useSelector((state) => state.person.persons).map((obj) => {
    return obj.name;
  });
  const reasons = useSelector((state) => state.reason.reasons).map((obj) => {
    return obj.name;
  });

  const dispatch = useDispatch();
  const emptyValue = {
    isAddToDeposit: false,
    withdraw: {
      person: "",
      amount: 0,
      reason: "",
      date: "",
    },
  };
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    dispatch(listAllWithdraws());
    dispatch(listPersons());
    dispatch(listReasons());
  }, []);
  return (
    <TableScreen
      title={"Withdraws"}
      minWidth={800}
      data={data}
      columns={depositsColumns}
      addForm={
        <WithdrawForm
          value={value}
          onChange={setValue}
          persons={persons}
          reasons={reasons}
        />
      }
      onAddSubmit={() => {
        dispatch(addNewWithdraw(value));
        setValue(emptyValue);
        dispatch(listAllWithdraws());
      }}
      modelTitle={"addn new withdraw"}
    />
  );
};
