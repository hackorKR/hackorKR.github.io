import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.header``;

const HeaderTitle = styled.h1``;

const HeaderDescription = styled.p``;

const Portfolio = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>조대현(Danny)</HeaderTitle>
        <HeaderDescription>프론트엔드 개발자</HeaderDescription>
      </Header>
    </Container>
  );
};

export default Portfolio;
