import React from "react";

import logo from "../../logo.png";
import { Header, Content, Logo } from "./styles";

export default function HeaderComponent({ children }) {
  return (
    <Header>
      <Content>
        <Logo src={logo} alt="github jobs logo" />
        {children}
      </Content>
    </Header>
  );
}
