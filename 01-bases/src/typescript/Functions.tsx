export const Functions = () => {

  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <div>
      <h3 className="font-bold">Funciones</h3>
      <span>5 + 10 = {addTwoNumbers(5, 10)}</span>
    </div>
  );
};
