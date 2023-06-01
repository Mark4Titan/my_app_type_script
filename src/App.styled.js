import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template:
    minmax(2px, 0.3fr) 1fr minmax(2px, 1fr)
    / minmax(2px, 1fr) minmax(310px, 1fr) minmax(2px, 1fr);
  @media (max-width: 700px) {
    grid-template: 1fr / 1fr;
  }
`;
