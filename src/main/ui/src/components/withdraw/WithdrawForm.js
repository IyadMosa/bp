import React from "react";
import { Container } from "./Withdraw.style";
import { TextField, TextFieldRange } from "@iyadmosa/react-library";

export const WithdrawForm = ({
  disabled = false,
  value,
  onChange = () => 0,
}) => {
  return (
    <Container>
      <TextField
        title={"Withdraw By"}
        value={value.by}
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
