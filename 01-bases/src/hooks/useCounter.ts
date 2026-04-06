import { useState } from "react";

export const useCounter = (initValue: number) => {
  const [counter, setCounter] = useState<number>(initValue);

  const increaseBy = (value: number) => {
    setCounter((prevCounterValue) => prevCounterValue + value);
  };
  
  return {
    counter,
    increaseBy,
  };
};
