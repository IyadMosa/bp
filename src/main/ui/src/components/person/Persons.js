import React, { useEffect, useState } from "react";
import { TableScreen } from "@iyadmosa/react-library/build";
import { useDispatch, useSelector } from "react-redux";
import { PersonForm } from "../person/PersonForm";
import { addPerson, listPersons } from "../../actions/PersonAction";

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

  const data = useSelector((state) => state.person.persons);
  const dispatch = useDispatch();
  const emptyValue = {
    name: "",
    phone: "",
  };
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    dispatch(listPersons());
  }, []);
  return (
    <TableScreen
      title={"Persons"}
      minWidth={800}
      data={data}
      columns={columns}
      addForm={<PersonForm value={value} onChange={setValue} />}
      onAddSubmit={() => {
        dispatch(addPerson(value));
        setValue(emptyValue);
        dispatch(listPersons());
      }}
      modelTitle={"addn new person"}
    />
  );
};
