import Portfolio from "./components/Portfolio";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 50rem;
  border: 1px solid black;
`;

function App() {
  return (
    <Container>
      <Portfolio />
    </Container>
  );
}

export default App;
