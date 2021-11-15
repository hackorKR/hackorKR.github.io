import Portfolio from "./components/Portfolio";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 50rem;
`;

function App() {
  return (
    <Container>
      <Portfolio />
    </Container>
  );
}

export default App;
