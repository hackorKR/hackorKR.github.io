import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../shared/styles";
import useWindowScroll from "../hooks/useWindowScroll";

const Container = styled.div`
  margin: 0 auto;
  max-width: 50rem;

  @media screen and (max-width: 60rem) {
    max-width: 40rem;
    padding: 0 2rem;
  }
`;

const FixBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.primary};
  transition: height 0.3s ease-in-out;
  height: 10px;

  &.scrolled {
    height: 3.5rem;
  }

  @media screen and (max-width: 960px) {
    &.scrolled {
      height: 2.5rem;
    }
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

  @media screen and (max-width: 60rem) {
    max-width: 40rem;
    padding: 0 2rem;
    font-size: 2rem;
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
  margin: 2rem 0;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`;

const HighlightSpan = styled.span`
  color: ${colors.primary};
  font-size: 1.2em;
`;

const HeaderDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 500;

  @media screen and (max-width: 60rem) {
    font-size: 1.15rem;
    margin: 0 0 1rem 0;
  }
`;

const Section = styled.section``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;

  @media screen and (max-width: 60rem) {
    font-size: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;

  &.column {
    flex-direction: column;
  }

  @media screen and (max-width: 60rem) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  margin-bottom: 4rem;
`;

const RowLeft = styled.div`
  flex-basis: 18rem;
  flex-shrink: 0;
  margin-right: 1rem;

  @media screen and (max-width: 60rem) {
    flex-basis: auto;
    margin: 1rem 0 0 0;
  }
`;

const RowTitle = styled.h3`
  font-size: 2rem;
  margin: 0 0 1rem 0;

  @media screen and (max-width: 60rem) {
    font-size: 1.8rem;
  }
`;

const RowSubTitle = styled.h4`
  font-size: 1.8rem;
  margin: 0.5rem 0;

  @media screen and (max-width: 60rem) {
    font-size: 1.5rem;
    margin: 0.75rem 0;
  }
`;

const RowDescriptionTitle = styled.h5`
  font-size: 1.5rem;
  margin: 0.5rem 0;

  @media screen and (max-width: 60rem) {
    font-size: 1.3rem;
  }
`;

const RowAnchor = styled.a`
  display: block;
  color: black;
`;

const RowSpan = styled.span`
  display: block;

  &.time {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 60rem) {
    &.time {
      margin-bottom: 1.5rem;
    }
  }
`;

const RowP = styled.p`
  margin: 0;
`;

const RowRight = styled.div`
  flex-grow: 1;
`;

const RowUl = styled.ul`
  padding: 0.2rem 0 0.2rem 1.5rem;
  margin: 0;
`;

const Other = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
`;

const Portfolio = () => {
  const experienceRef = useRef<HTMLHeadingElement>(null);
  const otherExperiencesRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLHeadingElement>(null);
  const fixBarTitleRef = useRef<HTMLHeadingElement>(null);

  const { scrollY } = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [fixBarTitle, setFixBarTitle] = useState("");

  useEffect(() => {
    const title = fixBarTitleRef.current;
    const experience = experienceRef.current;
    const otherExperiences = otherExperiencesRef.current;
    const skills = skillsRef.current;

    if (!title || !experience || !otherExperiences || !skills) {
      return;
    }
    if (
      scrollY >= experience.offsetTop &&
      scrollY < otherExperiences.offsetTop
    ) {
      if (!title.classList.contains("effect")) {
        title.classList.add("effect");
      }
      setFixBarTitle(experience.innerText);
      setIsScrolled(true);
    } else if (
      scrollY >= otherExperiences.offsetTop &&
      scrollY < skills.offsetTop
    ) {
      if (!title.classList.contains("effect")) {
        title.classList.add("effect");
      }
      setFixBarTitle(otherExperiences.innerText);
      setIsScrolled(true);
    } else if (scrollY >= skills.offsetTop) {
      if (!title.classList.contains("effect")) {
        title.classList.add("effect");
      }
      setFixBarTitle(skills.innerText);
      setIsScrolled(true);
    } else {
      title.classList.remove("effect");
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
          1년차 웹 프론트엔드 개발자이며 사용자 경험을 향상시켜 비즈니스 성장에
          기여하는 것을 좋아합니다. 단순히 문제의 결과만 해결하는 것이 아닌
          근원을 찾아 해결하기 위해 노력합니다. 솔직하고 간결하게 자신의 의견을
          말할 수 있는 환경을 선호합니다.
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
            <RowSpan className="tiem">2020.12 ~ 현재</RowSpan>
          </RowLeft>
          <RowRight>
            <Project>
              <RowSubTitle>
                닥집(Doczip) 프론트 개발<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <a href="https://doczip.kr/" target="_blank">
                홈페이지 바로가기
              </a>
              <RowSpan className="time">2021.4 ~ 현재</RowSpan>
              <RowDescriptionTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowDescriptionTitle>
              <RowP>
                닥집(Doczip)이라는 PropTech(부동산 테크) 관련 프로젝트의
                시작부터 참여하여 환경셋팅과 기술스택 선정에 기여하였으며
                지속적인 개발 및 유지보수를 하고 있습니다.
              </RowP>
              <RowDescriptionTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowDescriptionTitle>
              <RowUl>
                <li>전반적인 UI 컴포넌트 구현 및 개선</li>
                <li>
                  주소 입력 시 표준계약서, 중개대상물 확인설명서 자동완성 기능
                  구현
                </li>
                <li>
                  로그인, CRUD, 리스트 페이지네이션 등 사이트의 기본적인 기능
                  구현
                </li>
                <li>결제 모듈 부착</li>
              </RowUl>
              <RowDescriptionTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowDescriptionTitle>
              <RowP>
                Typescript, React Hook, Styled-components, Redux, Redux-saga,
                Docker
              </RowP>
            </Project>
            <Project>
              <RowSubTitle>
                미라클펀딩 관리자 페이지 개발
                <HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <a href="https://miraclefunding.co.kr/" target="_blank">
                홈페이지 바로가기
              </a>
              <RowSpan className="time">2021.7 ~ 2021.10</RowSpan>
              <RowDescriptionTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowDescriptionTitle>
              <RowP>
                P2P 서비스에서 관리자 페이지에 기능을 추가하고 개선하는 작업을
                하였습니다.
              </RowP>
              <RowDescriptionTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowDescriptionTitle>
              <RowUl>
                <li>투자금 대시보드 구현</li>
                <li>유저 목록 및 관리 기능 구현</li>
                <li>관리자 거래내역 구현</li>
                <li>관리자 활동 기록 구현</li>
              </RowUl>
              <RowDescriptionTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowDescriptionTitle>
              <RowP>Javascript, React, Less, Docker</RowP>
            </Project>
            <Project>
              <RowSubTitle>
                부동산 규제지역 API 개발<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowSpan className="time">2020.12 ~ 2021.4</RowSpan>
              <RowSubTitle>
                Description<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>
                사내 서비스에서 내부적으로 사용하기 위해 부동산 규제지역 API를
                제작하였습니다. 또한 관리자 페이지를 만들어서 규제지역 설정을
                쉽게 할 수 있게 만들었습니다.
              </RowP>
              <RowSubTitle>
                What did I do<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowUl>
                <li>
                  법정동 지역의 규제지역 여부(투기지역, 투기과열지구,
                  조정대상지역)를 제공하는 REST API를 구현
                </li>
                <li>
                  관리자가 규제지역을 쉽게 업데이트할 수 있도록 프론트 UI를 구현
                </li>
              </RowUl>
              <RowP>관리자 페이지 구현</RowP>
              <RowSubTitle>
                Tech Stack<HighlightSpan>.</HighlightSpan>
              </RowSubTitle>
              <RowP>
                Python, Flask, Poetry, Alembic, Docker, Typescript, React,
                Styled-components
              </RowP>
            </Project>
          </RowRight>
        </Row>
      </Section>
      <Section>
        <SectionTitle ref={otherExperiencesRef}>
          Other Experiences<HighlightSpan>.</HighlightSpan>
        </SectionTitle>
        <Other>
          <RowTitle>
            비즈니스 카드 관리 앱<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowSpan>
            <a
              href="https://github.com/hackorKR/React-card-maker"
              target="_blank"
            >
              레포 바로가기
            </a>
          </RowSpan>
          <RowSpan className="time">2020. 11. - 2020. 11.</RowSpan>
          <RowUl>
            <li>구글, 깃헙 로그인 기능 구현</li>
            <li>실시간 반응형 웹, 백엔드(firebase) 연결</li>
            <li>이미지 Cloudinary로 업로드 구현</li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            유튜브 클론코딩<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowSpan>
            <a
              href="https://hackorkr.github.io/React-youtube-refactoring/"
              target="_blank"
            >
              홈페이지 바로가기
            </a>
          </RowSpan>
          <RowSpan className="time">2020. 10. - 2020. 11.</RowSpan>
          <RowUl>
            <li>Youtube API를 활용해서 인기 차트 카테고리화</li>
            <li>반응형 웹으로 구현</li>
            <li>SPA로 제작</li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            카카오 아레나 대회<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowSpan>
            <a
              href="https://github.com/HaeJung1016/arena_melon"
              target="_blank"
            >
              레포 바로가기
            </a>
          </RowSpan>
          <RowSpan className="time">2020. 05. - 2020. 07.</RowSpan>
          <RowUl>
            <li>Word2Vec알고리즘을 활용해 곡과 태그를 예측하는 코드 작성</li>
            <li>
              FastText알고리즘을 활용해 한국어 자연어처리를 하 여 곡과 태그를
              예측하는 코드 작성
            </li>
            <li>Pandas로 데이터 분석과 구조화</li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            고려대학교 세종캠퍼스<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowSpan>전자 및 정보공학과</RowSpan>
          <RowSpan className="time">2017. 03. - 휴학중</RowSpan>
          <RowUl>
            <li>1학년 때 C언어 기초프로그래밍 수업을 들었습니다.</li>
            <li>2학년 때 Java객체지향 프로그래밍 수업을 들었습니다.</li>
          </RowUl>
        </Other>
      </Section>
      <Section>
        <SectionTitle ref={skillsRef}>
          Skills<HighlightSpan>.</HighlightSpan>
        </SectionTitle>
        <Other>
          <RowTitle>
            Overall<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowUl>
            <li>사용자가 알아보기 쉬운 디자인을 하려 노력합니다.</li>
            <li>
              항상 문제의 원인을 파악하고 왜 이런 문제가 생겼는지 이해하려고
              노력합니다.
            </li>
            <li>
              기술적으로만 문제를 해결하려 하지 않고 유연한 사고를 가지며
              비즈니스 가치에 기여할 수 있는 방향으로 사고합니다.
            </li>
            <li>
              비즈니스 방향성을 따른 뒤, 사용자 경험을 최우선으로 생각하여
              사용자의 피드백을 확인할 수 있는 채널을 확보하고 문제가 생기면
              바로 해결하려 노력합니다.
            </li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            Communication<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowUl>
            <li>솔직하지만 상대방의 기분이 나쁘지 않도록 부드럽게 말합니다.</li>
            <li>문제의 핵심만 말하기 위해 노력합니다.</li>
            <li>
              팀원들과 친밀감을 갖는 것이 의사소통에 큰 도움이 된다 생각하기에
              항상 팀원들에게 친밀한 관계를 유지하기 위한 노력을 합니다.
            </li>
            <li>
              자신이 맡은 일을 끝마치려 최선을 다합니다. 오래 막힐 경우 기한이
              끝나기 전에 팀원들에게 도움을 요청합니다.
            </li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            HTML / CSS<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowUl>
            <li>시맨틱 마크업을 준수합니다.</li>
            <li>다양한 플랫폼 및 브라우저를 지원할 수 있습니다.</li>
            <li>Styled-components와 PostCSS를 사용할 수 있습니다.</li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            JavaScript<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowUl>
            <li>ES6 Javascript 이후의 자바스크립트 문법에 익숙합니다.</li>
            <li>타입스크립트를 사용할 수 있습니다.</li>
            <li>
              함수형 프로그래밍을 선호하며 대부분의 코드를 함수형 프로그래밍으로
              작성합니다.
            </li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            React<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowUl>
            <li>
              React hooks를 능숙하게 사용하고, 거의 모든 컴포넌트를 함수로
              만듭니다. hook을 이용해 공통 비즈니스 로직을 적절히 모듈화해
              사용할 수 있습니다.
            </li>
            <li>PureComponent와 React.memo를 상황에 잘 맞게 사용합니다.</li>
            <li>
              컴포넌트 라이프 사이클을 알고 있으며 관련 메소드를 상황에 따라
              적절히 사용합니다.
            </li>
            <li>Redux, Redux-saga를 이용해 상태 관리를 할 수 있습니다.</li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            Tooling<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowUl>
            <li>
              Git를 사용할 줄 알며 Gitgub Actions를 활용하여 기능 단위 테스트 및
              lint 체크를 할 수 있습니다.
            </li>
            <li>
              Jira를 활용하여 체계적인 이슈 관리 및 개발 진척도 등을 상시
              확인하고 보고할 수 있습니다.
            </li>
            <li>
              프로젝트의 요구사항에 알맞는 프론트엔드 환경을 세팅할 수 있습니다.
            </li>
          </RowUl>
        </Other>
        <Other>
          <RowTitle>
            DevOps<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowUl>
            <li>
              Docker 이미지를 이용해 개발환경 공유 및 서버 배포를 할 수
              있습니다.
            </li>
            <li>AWS EC2 사용 경험이 있어 개발과 동시에 운영도 가능합니다.</li>
          </RowUl>
        </Other>
      </Section>
      <Section>
        <Other>
          <RowTitle>
            Contact<HighlightSpan>.</HighlightSpan>
          </RowTitle>
          <RowUl>
            <li>
              <a href="mailto:hackorkr@gmail.com">이메일</a>
            </li>
            <li>
              <a href="https://github.com/hackorKR/" target="_blank">
                깃허브
              </a>
            </li>
            <li>
              <a href="https://github.com/hackorKR/" target="_blank">
                원티드
              </a>
            </li>
          </RowUl>
        </Other>
      </Section>
    </Container>
  );
};

export default Portfolio;
