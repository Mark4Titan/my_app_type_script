import styled from "styled-components";

export const BoxMenu = styled.div`
  grid-column: 2/3;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  
  @media (max-width: 700px) {
    grid-column: 1/2;
  }
`;
export const MenuButtonDiv = styled.div`
  display: grid;

  // grid-template: 1fr / 1fr 1fr 1fr;
  grid-template-columns: repeat(${(P) => P.varlen}, auto);
  grid-gap: 10px;
`;
export const Button = styled.button`
  padding: 10px;
  height: 40px;
  border: solid 1px ${(P) => (P.activButton ? "white" : "dimgrey")};
  border-radius: 5px;
  cursor: pointer;

  background-color: dimgrey;
  color: white;
  box-shadow: ${(P) =>
    P.activButton
      ? "rgba(3, 3, 3, 0.88) 0px 0px 11px 0px"
      : "rgba(3, 3, 3, 0.88) 0px 0px 3px 0px"};

  &:hover {
    box-shadow: rgba(3, 3, 3, 0.88) 0px 0px 11px 0px;
  }
  &:active {
    box-shadow: none;
  }
`;
