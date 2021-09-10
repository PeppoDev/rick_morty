import React from "react";
import { Container, TitleContainer } from "./styles";
import List from "../List";

const Layout: React.FC = () => {
  return (
    <Container>
      <TitleContainer>Rick and Morty Characters API</TitleContainer>
      <List />
    </Container>
  );
};

export default Layout;
