import { Currency, bills } from "../../Constants/Constants";
import { Color } from "../../Thems/ThemePattern";
import { ButtonClear, ItemInput, ItemLi, ItemSpan, ListUl } from "./List.styled";


type ListProps = {
  currencyVal: Currency;
  them: Color;
  inputValidator: (newCurrency: string, newCurr: string) => void;
  handleClear: (newCurrency: number) => void;
};

const List: React.FC<ListProps> = ({
  currencyVal,
  them,
  inputValidator,
  handleClear,
}) => {
  
  return (
    <ListUl>
      {bills.map((el) => (
        <ItemLi key={el}>
          <ItemSpan them={them}>
            {el} {currencyVal.cur}
          </ItemSpan>
          <ItemSpan them={them}>x</ItemSpan>
          <ItemInput
            them={them}
            id={`input_${el}`}
            type='number'
            placeholder='0'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              inputValidator(e.target.value, String(el))
            }
          />
          <ButtonClear
            them={them}
            name='button'
            onClick={() => handleClear(el)}>
            {currencyVal.clear}
          </ButtonClear>
        </ItemLi>
      ))}
    </ListUl>
  );
};

export default List