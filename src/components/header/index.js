import React from "react";
import styled from "styled-components/macro";

import logo from "../../logo.png";

const Header = styled.header`
  background-color: #445188;
  padding: 30px 0 70px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
`;

const Logo = styled.img`
  width: 200px;
`;

export default function HeaderComponent() {
  return (
    <Header>
      <Content>
        <Logo src={logo} alt="github jobs logo" />
        <button>toggle</button>
      </Content>
    </Header>
  );
}
