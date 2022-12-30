import React from "react";
import { Container } from "./Withdraw.style";
import { CheckboxLabeled } from "@iyadmosa/react-library";
import { CommonForm } from "../common/CommonForm";

export const WithdrawForm = ({
  disabled = false,
  value,
  onChange = () => 0,
  persons = [],
  reasons = [],
}) => {
  const { addToDeposit } = value;
  const setValue = (key, nv) => {
    onChange({
      ...value,
      [key]: nv,
    });
  };

  return (
    <Container>
      <CheckboxLabeled
        checked={addToDeposit}
        onChange={() => setValue("addToDeposit", !addToDeposit)}
        label={"Add as Deposit"}
        disabled={disabled}
      />

      <CommonForm
        value={value}
        onChange={onChange}
        persons={persons}
        reasons={reasons}
        disabled={disabled}
      />
    </Container>
  );
};
