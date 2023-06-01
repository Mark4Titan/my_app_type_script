import styled from "styled-components";

export const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/3;
  padding: 20px;
  background-color: ${(P) => P.them.backgroundColor};
  border-radius: 5px;
  color: ${(P) => P.them.color};
  min-width: 400px;
  box-shadow: #030303e0 0px 0px 11px 0px;

  @media (max-width: 700px) {
    grid-column: 1/2;
    grid-row: 1/2;
    min-width: 250px;
  }
`;
