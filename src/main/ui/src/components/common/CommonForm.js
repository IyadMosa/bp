import React, { useEffect, useMemo } from "react";
import { Container, InnerContainer } from "./Style";
import {
  DatePickerCustom,
  Dropdown,
  TextFieldRange,
} from "@iyadmosa/react-library";
import { listPersons } from "../../actions/PersonAction";
import { useDispatch, useSelector } from "react-redux";

export const CommonForm = ({ disabled = false, value, onChange = () => 0 }) => {
  const { amount, person, date } = value;
  const setValue = (key, nv) => {
    onChange({
      ...value,
      [key]: nv,
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPersons());
  }, []);
  const persons = useSelector((state) => state.person.persons).map((obj) => {
    return obj.name;
  });

  const personsOptions = useMemo(
    () => [...persons.map((name) => ({ value: name, label: name }))],
    [persons]
  );

  return (
    <Container>
      <InnerContainer>
        <Dropdown
          title={"Person"}
          value={{ value: person, label: person }}
          options={personsOptions}
          onChange={(nv) => setValue("person", nv.value)}
          width={300}
          disabled={disabled}
        />
        <TextFieldRange
          title={"Amount"}
          value={amount}
          onChange={(nv) => setValue("amount", nv)}
          disabled={disabled}
          width={250}
        />
      </InnerContainer>
      <InnerContainer>
        <DatePickerCustom
          onChange={(nv) => setValue("date", nv)}
          width={100}
          disabled={disabled}
          date={date}
        />
      </InnerContainer>
    </Container>
  );
};
