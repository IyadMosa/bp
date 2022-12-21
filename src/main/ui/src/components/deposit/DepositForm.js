import React, { useState } from "react";
import { Container } from "./Deposit.style";
import { TextField, TextFieldRange } from "@iyadmosa/react-library";

export const DepositForm = ({
  disabled = false,
  value,
  onChange = () => 0,
}) => {
  return (
    <Container>
      <TextField
        title={"Deposit By"}
        value={value.depositBy}
        onChange={(nv) => onChange({ ...value, depositBy: nv })}
        disabled={disabled}
        isRequired={true}
      />
      <TextFieldRange
        title={"Amount"}
        value={value.amount}
        onChange={(nv) => onChange({ ...value, amount: nv })}
        disabled={disabled}
      />
    </Container>
  );
};
