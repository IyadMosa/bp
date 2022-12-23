import React, { useMemo } from "react";
import { Container } from "./Withdraw.style";
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
  const { amount, person, reason, date } = value;
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
      <Dropdown
        title={"Person"}
        value={person}
        options={personsOptions}
        onChange={(nv) => onChange({ ...value, person: nv.value })}
      />
      <Dropdown
        title={"Reason"}
        value={reason}
        options={reasonsOptions}
        onChange={(nv) => onChange({ ...value, reason: nv.value })}
      />
      <TextFieldRange
        title={"Amount"}
        value={amount}
        onChange={(nv) => onChange({ ...value, amount: nv })}
        disabled={disabled}
      />
      <DatePickerCustom
        date={"24-12-2022"}
        onChange={(nv) => onChange({ ...value, date: nv })}
      />
    </Container>
  );
};
