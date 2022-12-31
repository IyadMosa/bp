import React from "react";
import { CommonForm } from "../common/CommonForm";

export const DepositForm = ({
  disabled = false,
  value,
  onChange = () => 0,
}) => {
  const { deposit } = value;
  const setDeposit = (nv) => {
    onChange({
      ...value,
      deposit: nv,
    });
  };
  return (
    <CommonForm value={deposit} onChange={setDeposit} disabled={disabled} />
  );
};
