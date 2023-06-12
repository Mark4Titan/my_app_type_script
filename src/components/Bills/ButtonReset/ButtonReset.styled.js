import styled from "styled-components";


export const ButtonBoxReset = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  display: grid;
`;

export const ButtonReset = styled.button`
  font-size: 20px;
  color: ${(P) => P.them.color};
  background-color: ${(P) => P.them.backgroundColor};
  border-radius: 5px;
  border: solid 1px ${(P) => P.them.borderSolid};
`;