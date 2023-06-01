import styled from "styled-components";

export const ListUl = styled.ul`
  display: grid;
  grid-gap: 10px;
`;

export const ItemLi = styled.li`
  font-size: 20px;
  display: grid;
  align-items: center;
  grid-gap: 5px;
  grid-template: 40px / 80px 10px minmax(70px, 1fr) minmax(auto, 0.3fr);
`;

export const ItemSpan = styled.span`
  display: grid;
  justify-items: center;
`;

export const ItemInput = styled.input`
  height: 100%;
  font-size: 20px;
  padding: 0 10px;
  border-radius: 5px;
  border: solid 1px ${(P) => P.them.borderSolid};
  background-color: ${(P) => P.them.backgroundColor};
  outline: none;
  color: ${(P) => P.them.color};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    height: 40px;
    width: 40px;
  }
  ::placeholder {
    color: ${(P) => P.them.color};
  }
`;

export const ButtonClear = styled.button`
  height: 100%;
  color: ${(P) => P.them.color};
  font-size: 17px;
  background-color: ${(P) => P.them.backgroundColor};
  border-radius: 5px;
  border: solid 1px ${(P) => P.them.borderSolid};
`;