import React, { useMemo } from "react";
import { Container } from "./Reason.style";
import { TextField } from "@iyadmosa/react-library";

export const ReasonForm = ({ disabled = false, value, onChange = () => 0 }) => {
  const { name, phone } = value;

  return (
    <Container>
      <TextField
        title={"Name"}
        value={name}
        onChange={(nv) => onChange({ ...value, name: nv })}
      />
    </Container>
  );
};
