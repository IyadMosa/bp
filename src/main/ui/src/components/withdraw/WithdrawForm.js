import React, { useMemo } from "react";
import { Container, InnerContainer } from "./Withdraw.style";
import {
  DatePickerCustom,
  Dropdown,
  TextFieldRange,
} from "@iyadmosa/react-library";

export const WithdrawForm = ({
  disabled = false,
  value,
  onChange = () => 0,
  persons = [],
  reasons = [],
}) => {
  const { amount, person, reason } = value;
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
          onChange={(nv) => onChange({ ...value, person: nv.value })}
          width={300}
        />
        <Dropdown
          title={"Reason"}
          value={{ value: reason, label: reason }}
          options={reasonsOptions}
          onChange={(nv) => onChange({ ...value, reason: nv.value })}
          width={300}
        />
      </InnerContainer>
      <TextFieldRange
        title={"Amount"}
        value={amount}
        onChange={(nv) => onChange({ ...value, amount: nv })}
        disabled={disabled}
        width={250}
      />
      <DatePickerCustom
        onChange={(nv) => onChange({ ...value, date: nv })}
        width={100}
      />
    </Container>
  );
};
