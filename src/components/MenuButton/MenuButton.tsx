import { useState } from "react";
import { BoxMenu, Button, MenuButtonDiv } from "./MenuButton.styled";

interface VariantAp {
  title: string;
  page: string;
}

const variantAps: VariantAp[] = [
  { title: "Bills", page: "Bills" },
  { title: "Exchange Rate", page: "ExchangeRate" },
];

const MenuButton = () => {
  const [showPortal, setShowPortal] = useState<String>("Bills");

  const handleButtonClick = (variant: String) => {
    setShowPortal(variant);
  };

  return {
    showPortal,
    Component: (
      <BoxMenu>
        <MenuButtonDiv varlen={variantAps.length}>
          {variantAps.map((variantAps) => (
            <Button
              key={variantAps.page}
              activButton={variantAps.page === showPortal}
              onClick={() => handleButtonClick(variantAps.page)}>
              {variantAps.title}
            </Button>
          ))}
        </MenuButtonDiv>
      </BoxMenu>
    ),
  };
};
export default MenuButton;
