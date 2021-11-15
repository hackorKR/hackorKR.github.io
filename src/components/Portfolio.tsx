import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../shared/styles";
import useWindowScroll from "../hooks/useWindowScroll";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const Container = styled.div`
  width: 100%;
`;

const FixBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.primary};
  transition: height 0.3s ease-in-out;
  height: 1rem;

  &.scrolled {
    height: 3.5rem;
  }
`;

const FixBarTitle = styled.h3`
  font-size: 2.5rem;
  max-width: 50rem;
  margin: 0 auto;
  color: ${colors.fontPrimary};

  &.effect {
    animation-name: titleAnimation;
    animation-timing-function: ease-in-out;
    animation-duration: 0.3s;
  }

  &.uneffect {
    animation-name: titleAnimation;
    animation-timing-function: ease-in-out;
    animation-duration: 0.3s;
  }

  @keyframes titleAnimation {
    from {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    to {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
  }
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
  font-size: 2.5rem;
`;

const Row = styled.div`
  display: flex;
`;

const Project = styled.div`
  margin-bottom: 4rem;
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

const RowSpan = styled.span`
  display: block;
`;

const RowP = styled.p``;

const RowRight = styled.div`
  flex-grow: 1;
`;

const Portfolio = () => {
  const experienceRef = useRef<HTMLHeadingElement>(null);
  const sideProjectRef = useRef<HTMLHeadingElement>(null);
  const fixBarTitleRef = useRef<HTMLHeadingElement>(null);

  const animatedItem = useScrollFadeIn();

  const { scrollY } = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [fixBarTitle, setFixBarTitle] = useState("");

  useEffect(() => {
    document.title = "조대현 | Frontend Developer";
  }, []);

  useEffect(() => {
    const title = fixBarTitleRef.current;
    const experience = experienceRef.current;
    const sideProject = sideProjectRef.current;

    if (!title || !experience || !sideProject) {
      return;
    }
    if (scrollY > experience.offsetTop && scrollY < sideProject.offsetTop) {
      title.classList.add("effect");
      setFixBarTitle(experience.innerText);
      setIsScrolled(true);
    } else if (scrollY > sideProject.offsetTop) {
      title.classList.remove("effect");
      title.classList.add("uneffect");
      setFixBarTitle(sideProject.innerText);
      setIsScrolled(true);
    } else {
      title.classList.remove("effect");
      title.classList.remove("uneffect");
      setFixBarTitle("");
      setIsScrolled(false);
    }
  }, [scrollY]);

  return (
    <Container>
      <FixBar className={isScrolled ? "scrolled" : ""}>
        <FixBarTitle ref={fixBarTitleRef}>{fixBarTitle}</FixBarTitle>
      </FixBar>
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
          본질을 파악해 최선의 결과를 내기 위한 노력을 합니다.
        </HeaderDescription>
      </Header>
      <Section>
        <SectionTitle ref={experienceRef}>
          Experience<HighlightSpan>.</HighlightSpan>
        </SectionTitle>
        <Row>
          <RowLeft>
            <RowTitle>
              탱커펀드<HighlightSpan>.</HighlightSpan>
            </RowTitle>
            <RowSpan>Frontend Developer</RowSpan>
            <RowSpan>2020.12 ~ 현재</RowSpan>
          </RowLeft>
          <RowRight>
            <Project>
              <RowTitle>
                닥집(Doczip) 프론트 개발<HighlightSpan>.</HighlightSpan>
              </RowTitle>
              <RowSpan>https://doczip.kr/</RowSpan>
              <RowSpan>2021.4 ~ 현재</RowSpan>
              <RowSubTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>
                닥집(Doczip) 프로젝트 시작부터 참여하여 환경셋팅과 기술스택
                선정에 기여하였으며 지속적인 개발 및 유지보수를 하고 있습니다.
              </RowP>
              <RowSubTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowSubTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
            </Project>
            <Project>
              <RowTitle>
                미라클펀딩 외주 개발<HighlightSpan>.</HighlightSpan>
              </RowTitle>
              <RowSpan>https://doczip.kr/</RowSpan>
              <RowSpan>2021.4 ~ 현재</RowSpan>
              <RowSubTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>
                닥집(Doczip) 프로젝트 시작부터 참여하여 환경셋팅과 기술스택
                선정에 기여하였으며 지속적인 개발 및 유지보수를 하고 있습니다.
              </RowP>
              <RowSubTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowSubTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
            </Project>
            <Project>
              <RowTitle>
                부동산 규제지역 API 개발<HighlightSpan>.</HighlightSpan>
              </RowTitle>
              <RowSpan>https://doczip.kr/</RowSpan>
              <RowSpan>2021.4 ~ 현재</RowSpan>
              <RowSubTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>
                닥집(Doczip) 프로젝트 시작부터 참여하여 환경셋팅과 기술스택
                선정에 기여하였으며 지속적인 개발 및 유지보수를 하고 있습니다.
              </RowP>
              <RowSubTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowSubTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
            </Project>
          </RowRight>
        </Row>
      </Section>
      <Section>
        <SectionTitle ref={sideProjectRef}>
          Side Project<HighlightSpan>.</HighlightSpan>
        </SectionTitle>
        <Row>
          <RowLeft>
            <RowTitle>
              탱커펀드<HighlightSpan>.</HighlightSpan>
            </RowTitle>
            <RowSpan>Frontend Developer</RowSpan>
            <RowSpan>2020.12 ~ 현재</RowSpan>
          </RowLeft>
          <RowRight>
            <Project>
              <RowTitle>
                닥집(Doczip) 프론트 개발<HighlightSpan>.</HighlightSpan>
              </RowTitle>
              <RowSpan>https://doczip.kr/</RowSpan>
              <RowSpan>2021.4 ~ 현재</RowSpan>
              <RowSubTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>
                닥집(Doczip) 프로젝트 시작부터 참여하여 환경셋팅과 기술스택
                선정에 기여하였으며 지속적인 개발 및 유지보수를 하고 있습니다.
              </RowP>
              <RowSubTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowSubTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
            </Project>
            <Project>
              <RowTitle>
                미라클펀딩 외주 개발<HighlightSpan>.</HighlightSpan>
              </RowTitle>
              <RowSpan>https://doczip.kr/</RowSpan>
              <RowSpan>2021.4 ~ 현재</RowSpan>
              <RowSubTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>
                닥집(Doczip) 프로젝트 시작부터 참여하여 환경셋팅과 기술스택
                선정에 기여하였으며 지속적인 개발 및 유지보수를 하고 있습니다.
              </RowP>
              <RowSubTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowSubTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
            </Project>
            <Project>
              <RowTitle>
                부동산 규제지역 API 개발<HighlightSpan>.</HighlightSpan>
              </RowTitle>
              <RowSpan>https://doczip.kr/</RowSpan>
              <RowSpan>2021.4 ~ 현재</RowSpan>
              <RowSubTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>
                닥집(Doczip) 프로젝트 시작부터 참여하여 환경셋팅과 기술스택
                선정에 기여하였으며 지속적인 개발 및 유지보수를 하고 있습니다.
              </RowP>
              <RowSubTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowSubTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
              <RowP>앱</RowP>
            </Project>
          </RowRight>
        </Row>
      </Section>
    </Container>
  );
};

export default Portfolio;
