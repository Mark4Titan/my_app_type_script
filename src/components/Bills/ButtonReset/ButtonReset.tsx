import { Currency } from "../../Constants/Constants";
import { Color } from "../../Thems/ThemePattern";
import { ButtonBoxReset, ButtonReset } from "./ButtonReset.styled";

type ListProps = {
  currencyVal: Currency;
  them: Color;
  handleReset: () => void;
};

const ButtonResetAll: React.FC<ListProps> = ({
  them,
  currencyVal,
  handleReset,
}) => {
  return (
    <ButtonBoxReset>
      <ButtonReset them={them} name='button' onClick={() => handleReset()}>
        {currencyVal.reset}
      </ButtonReset>
    </ButtonBoxReset>
  );
};
export default ButtonResetAll;
