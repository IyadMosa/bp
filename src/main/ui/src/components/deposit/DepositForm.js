import React, { useState } from "react";
import { Container } from "./Deposit.style";
import { TextField, TextFieldRange } from "@iyadmosa/react-library";

export const DepositForm = ({ disabled = false, onSubmit = () => 0 }) => {
  const [depositBy, setDepositBy] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <Container>
      <TextField
        title={"Deposit By"}
        value={depositBy}
        onChange={(value) => setDepositBy(value)}
        disabled={disabled}
        isRequired={true}
      />
      <TextFieldRange
        title={"Amount"}
        value={amount}
        onChange={(value) => setAmount(value)}
        disabled={disabled}
      />
    </Container>
  );
};
