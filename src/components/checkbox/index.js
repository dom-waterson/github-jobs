import React from "react";

import { Input, Label, Container } from "./styles";

export default function CheckboxComponent({ disabled, id, label, required }) {
  return (
    <Container>
      <Input
        aria-label={label}
        aria-required={required}
        disabled={disabled}
        id={id}
        type="checkbox"
      />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
}
