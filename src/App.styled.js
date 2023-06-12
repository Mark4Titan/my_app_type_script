import styled from "styled-components";

export const Section = styled.section`
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template:
    90px 1fr minmax(2px, 1fr)
    / minmax(2px, 0.3fr) minmax(310px, 1fr) minmax(2px, 0.3fr);
  @media (max-width: 700px) {
    grid-template: 80px 1fr / 1fr;
  }
`;
export const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/3;

  @media (max-width: 700px) {
    grid-column: 1/2;
    min-width: 250px;
  }
`;
