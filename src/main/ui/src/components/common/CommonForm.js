import React, { useMemo } from "react";
import { Container, InnerContainer } from "./Style";
import {
  DatePickerCustom,
  Dropdown,
  TextFieldRange,
} from "@iyadmosa/react-library";

export const CommonForm = ({
  disabled = false,
  value,
  onChange = () => 0,
  persons = [],
  reasons = [],
}) => {
  const { amount, person, reason } = value;
  const setValue = (key, nv) => {
    onChange({
      ...value,
      [key]: nv,
    });
  };
  const personsOptions = useMemo(
    () => [...persons.map((name) => ({ value: name, label: name }))],
    [persons]
  );

  const reasonsOptions = useMemo(
    () => [...reasons.map((name) => ({ value: name, label: name }))],
    [reasons]
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
        <Dropdown
          title={"Reason"}
          value={{ value: reason, label: reason }}
          options={reasonsOptions}
          onChange={(nv) => setValue("reason", nv.value)}
          width={300}
          disabled={disabled}
        />
      </InnerContainer>
      <InnerContainer>
        <TextFieldRange
          title={"Amount"}
          value={amount}
          onChange={(nv) => setValue("amount", nv)}
          disabled={disabled}
          width={250}
        />
        <DatePickerCustom
          onChange={(nv) => setValue("date", nv)}
          width={100}
          disabled={disabled}
        />
      </InnerContainer>
    </Container>
  );
};
