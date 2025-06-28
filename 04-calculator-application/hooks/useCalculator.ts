import { useEffect, useRef, useState } from "react";

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {

  const [formula, setFormula] = useState('0');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  const buildNumber = (numberString: string) => {
    // Verificar si ya existe mas de un punto decimal es decir, tienes 0.1 y quieres poner otro punto no lo permita
    if (number.includes('.') && numberString === '.') return;

    // Si hay en el numero acumulado in 0 o -0
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Evaluar si la persona teclea otro numero y no hay punto, ej: si escribes un cero pero en el numero armado hay un 0. lo anexa -> 0.0, 0.01
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero y no hay punto decimal y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Evitar el 0000000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
    }

    // Por defecto acumula el valor de los numeros que tecleas
    setNumber(number + numberString);
  }

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('0');
    lastOperation.current = undefined;
  }

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-'+number);
  }

  const deleteLastNumber = () => {
    if (number.length > 1 && !number.includes('-')) return setNumber(number.substring(0, number.length - 1));
    if (number.length > 2 && number.includes('-')) return setNumber(number.substring(0, number.length - 1));
    if (!number.includes('-') && number.length <= 1) return setNumber('0');
    if (number.includes('-') && number.length <= 2) return setNumber('0');
  }

  const setLastNumber = () => {
    calculateResult(); // quitar si no funciona
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber('0');
  }

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  }

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  }


  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  }

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  }

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());
    lastOperation.current = undefined;
    setPrevNumber('0');
  }

  const calculateSubResult = () => {
    const [firstValue, operator, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;
    switch (operator) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error(`Operation ${operator} not implemented yet!`);
    }
  }

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(subResult.toString());
  }, [formula]); // cuando cambie el numero se disparara el useEffect para calcular el resultado

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
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
    deleteLastNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  };
}