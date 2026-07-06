import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "x",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");
  const lastOperation = useRef<Operator | undefined>(undefined);

  const clean = () => {
    setFormula("0");
    setNumber("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    return setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;
    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }
    setNumber("0");
  };

  const buildNumber = (stringNumber: string) => {
    // Todo: Verificar si ya exite el . decimal
    if (number.includes(".") && stringNumber === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (stringNumber === ".") {
        return setNumber(number + stringNumber);
      }

      // Todo: evaluar si el usuario escribe 0 pero no hay punto
      if (stringNumber === "0" && number.includes(".")) {
        return setNumber(number + stringNumber);
      }

      // Todo: evaluar si es diferente de 0 no hay punto y es el primer numero
      if (stringNumber !== "0" && !number.includes(".")) {
        return setNumber(stringNumber);
      }

      // Todo: evitar el 000000.00
      if (stringNumber === "0" && !number.includes(".")) return;
    }

    return setNumber(number + stringNumber);
  };

  const setLastNumber = () => {
    // Calcular resultado
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(" ");
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.substract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error(`Operation ${operation} not implemented yet!`);
    }
  };

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateSubResult,
  };
};
