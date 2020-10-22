import React from "react";

import { Container, Label, Input } from "./styles";

export default function InputComponent({
  disabled,
  id,
  label,
  placeholder,
  required,
  onChange,
  value,
}) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input
        aria-label={label}
        aria-required={required}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}
