import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {

  const [counter, setCounter] = useState<number>(initialValue);

  const increaseBy = (value: number) => {
    setCounter(counter + value);
  }

  return {
    increaseBy,
    counter,
  };
}