import React, { useEffect, useMemo, useState } from "react";
import { Container, InnerContainer } from "./Withdraw.style";
import { CheckboxLabeled, Dropdown } from "@iyadmosa/react-library";
import { CommonForm } from "../common/CommonForm";
import { useDispatch, useSelector } from "react-redux";
import { listReasons } from "../../actions/ReasonAction";

export const WithdrawForm = ({
  disabled = false,
  value,
  onChange = () => 0,
}) => {
  const { addToDeposit, withdraw } = value;
  const { reason } = withdraw;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listReasons());
  }, []);
  const reasons = useSelector((state) => state.reason.reasons).map((obj) => {
    return obj.name;
  });

  const reasonsOptions = useMemo(
    () => [...reasons.map((name) => ({ value: name, label: name }))],
    [reasons]
  );
  const setValue = (key, nv) => {
    onChange({
      ...value,
      [key]: nv,
    });
  };

  const setWithdrawReason = (nv) => {
    onChange({
      ...value,
      withdraw: {
        ...withdraw,
        reason: nv,
      },
    });
  };

  const setWithdraw = (nv) => {
    onChange({
      ...value,
      withdraw: nv,
    });
  };
  return (
    <Container>
      <InnerContainer>
        <CheckboxLabeled
          checked={addToDeposit}
          onChange={() => setValue("addToDeposit", !addToDeposit)}
          label={"Add as Deposit"}
          disabled={disabled}
        />
        <Dropdown
          title={"Reason"}
          value={{ value: reason, label: reason }}
          options={reasonsOptions}
          onChange={(nv) => setWithdrawReason(nv.value)}
          width={320}
          disabled={disabled}
        />
      </InnerContainer>
      <CommonForm value={withdraw} onChange={setWithdraw} disabled={disabled} />
    </Container>
  );
};
