import {
  Main,
} from "./Bills.styled";

import Func from "./Func";
import UsxThems from "../Thems/Thems";
import MiniHead from "./MiniHead/MiniHead";
import List from "./List/List";
import ButtonResetAll from "./ButtonReset/ButtonReset";

const Bills = () => {
  const { nextThem, them } = UsxThems();

  const {
    currencyVal,
    total,
    inputValidator,
    handleReset,
    handleClear,
    currencyСhange,
  } = Func();

  return (
    <Main them={them}>
      <MiniHead
        currencyVal={currencyVal}
        total={total}
        currencyСhange={currencyСhange}
        them={them}
        nextThem={nextThem}
      />
      <List
        currencyVal={currencyVal}
        inputValidator={inputValidator}
        handleClear={handleClear}
        them={them}
      />
      <ButtonResetAll
        handleReset={handleReset}
        them={them}
        currencyVal={currencyVal}
      />
    </Main>
  );
};
export default Bills;
