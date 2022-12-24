import React, { useMemo } from "react";
import { Container } from "./Person.style";
import { TextField } from "@iyadmosa/react-library";

export const PersonForm = ({ disabled = false, value, onChange = () => 0 }) => {
  const { name, phone } = value;

  return (
    <Container>
      <TextField
        title={"Name"}
        value={name}
        onChange={(nv) => onChange({ ...value, name: nv })}
      />
      <TextField
        title={"Phone"}
        value={phone}
        onChange={(nv) => onChange({ ...value, phone: nv })}
      />
    </Container>
  );
};
