import React from "react";
import styled from "styled-components";
import { colors } from "../shared/styles";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
`;

const HeaderTitle = styled.h1`
  font-size: 4em;
  line-height: 1.1;
`;

const HighlightSpan = styled.span`
  color: ${colors.primary};
  text-shadow: -1px 0 ${colors.lightGrey}, 0 1px ${colors.lightGrey},
    1px 0 ${colors.lightGrey}, 0 -1px ${colors.lightGrey};
`;

const HeaderDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

const Section = styled.section``;

const SectionTitle = styled.h2`
  font-size: 3rem;
`;

const Row = styled.div`
  display: flex;
`;

const RowLeft = styled.div`
  flex-basis: 18rem;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const RowTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
`;

const RowSubTitle = styled.h4`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
`;

const RowSpan = styled.span``;

const RowP = styled.p``;

const RowRight = styled.div`
  flex-grow: 1;
`;

const Portfolio = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          반갑습니다,
          <br />
          저는 조대현(Danny)입니다<HighlightSpan>.</HighlightSpan>
        </HeaderTitle>
        <HeaderDescription>
          1년차 웹 프론트엔드 개발자이며 사용자 경험을 향상시켜
          <br />
          비즈니스 성장에 기여하는 것을 좋아합니다. 개발자란 문제를
          <br />
          해결하는 직업이라고 생각합니다. 해결하고자 하는 문제의
          <br />
          본질을 찾아 최선의 결과를 내기 위해 고민합니다.
        </HeaderDescription>
      </Header>
      <Section>
        <SectionTitle>
          Experience<HighlightSpan>.</HighlightSpan>
        </SectionTitle>
        <Row>
          <RowLeft>
            <RowTitle>탱커펀드</RowTitle>
            <RowSpan>Frontend Developer</RowSpan>
            <RowSpan>2020.12 ~ 현재</RowSpan>
          </RowLeft>
          <RowRight>
            <RowTitle>닥집(Doczip) 프론트 개발</RowTitle>
            <RowSpan>2021.4 ~ 현재</RowSpan>
            <RowSubTitle>Description</RowSubTitle>
            <RowP>
              닥집(Doczip) 프로젝트의 시작부터 참여하여 환경셋팅과 기술스택
              선정에 기여하였으며 지속적인 개발 및 유지보수를 담당하였습니다.
            </RowP>
          </RowRight>
        </Row>
      </Section>
    </Container>
  );
};

export default Portfolio;
