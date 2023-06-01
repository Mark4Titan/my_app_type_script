import styled from "styled-components";

export const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/3;
  padding: 20px;
  background-color: ${(P) => P.them.backgroundColor};
  border-radius: 5px;
  color: ${(P) => P.them.color};
`;
