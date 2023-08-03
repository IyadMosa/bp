import React from "react";
import { Container } from "./Reason.style";
import { TextField } from "@iyadmosa/react-library";

export const ReasonForm = ({ disabled = false, value, onChange = () => 0 }) => {
  const { major, minor,minor2 } = value;

  return (
    <Container>
      <TextField
        title={"Major"}
        value={major}
        onChange={(nv) => onChange({ ...value, major: nv })}
      />
      <TextField
        title={"Minor"}
        value={minor}
        onChange={(nv) => onChange({ ...value, minor: nv })}
      />
        <TextField
        title={"Minor2"}
        value={minor2}
        onChange={(nv) => onChange({ ...value, minor2: nv })}
      />
    </Container>
  );
};
