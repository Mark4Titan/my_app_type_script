import { Currency, currency } from "../../Constants/Constants";
import { Color } from "../../Thems/ThemePattern";
import { ButtonThem, MiniHeader, MiniHeaderTitle, SelectTitle } from "./MiniHead.styled";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";



type ListProps = {
  currencyVal: Currency;
  total: number;
  currencyСhange: (newCurrency: string) => void;
  them: Color;
  nextThem: (newCurrency: number) => void;
};

const MiniHead: React.FC<ListProps> = ({
  currencyVal,
  total,
  them,
  nextThem,
  currencyСhange,
}) => {
  return (
    <MiniHeader them={them}>
      <ButtonThem
        poz='grid-column: 1/2'
        them={them}
        onClick={() => nextThem(-1)}>
        <TbArrowBarLeft />
      </ButtonThem>
      <MiniHeaderTitle them={them}>
        {currencyVal.total}: {total}
      </MiniHeaderTitle>
      <SelectTitle
        them={them}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          currencyСhange(e.target.value)
        }>
        {Object.keys(currency).map((element: string) => (
          <option key={element} value={[element]}>
            {currency[element].cur}
          </option>
        ))}
      </SelectTitle>
      <ButtonThem
        them={them}
        onClick={() => nextThem(1)}
        poz='grid-column: 6/7'>
        <TbArrowBarRight />
      </ButtonThem>
    </MiniHeader>
  );
};
export default MiniHead;
