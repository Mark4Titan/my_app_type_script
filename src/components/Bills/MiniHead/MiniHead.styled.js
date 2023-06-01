import styled from "styled-components";


export const MiniHeader = styled.h2`
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  font-size: 20px;
  grid-gap: 5px;
  grid-template: 1fr/30px 1fr auto 60px 1fr 30px;
`;
export const MiniHeaderTitle = styled.div`
  grid-column: 3/4;
`;

export const SelectTitle = styled.select`
  outline: none;
  border-radius: 5px;
  color: ${(P) => P.them.color};
  border: solid 1px ${(P) => P.them.borderSolid};
  background-color: ${(P) => P.them.backgroundColor};
`;
export const ButtonThem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  ${(P) => P.poz};
  font-size: 20px;
  color: ${(P) => P.them.color};
  background-color: ${(P) => P.them.backgroundColor};
  border-radius: 5px;
  border: solid 1px ${(P) => P.them.borderSolid};
`;