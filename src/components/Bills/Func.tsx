import { useEffect, useState } from "react";
import { currency } from "../Constants/Constants";

const Func = () => {
  const [isCurrency, setCurrency] = useState(currency.UAH);
  const [isInput, setIsInput] = useState<{ [key: string]: number }>({});
  const [isTotal, setIsTotal] = useState(0);

  useEffect(() => {
    if (isInput) {
      let total: number = 0;
      Object.keys(isInput).forEach((key) => {
        total += parseInt(key) * isInput[key];
      });
      setIsTotal(total);
    }
  }, [isInput]);

  const inputValidator = (value: string, key: string) => {
    setIsInput((privState: {}) => ({ ...privState, [key]: value }));
  };

  const handleReset = () => {
    setIsInput({});
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
  };

  const handleClear = (el: number) => {
    setIsInput((privState) => ({ ...privState, [el]: 0 }));

    const inputElement = document.getElementById(
      `input_${el}`
    ) as HTMLInputElement;
    inputElement.value = "";
  };

  const currencyСhange = (change: string) => {
    setCurrency(currency[change]);
  };

 
  return {
    currencyVal: isCurrency,
    total: isTotal,
    inputValidator,
    handleReset,
    handleClear,
    currencyСhange,   
  };
};
export default Func;
