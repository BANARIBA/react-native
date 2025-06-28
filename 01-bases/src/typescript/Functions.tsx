const addTwoNumbers = (numberOne: number, numberTwo: number): number => {
  return numberOne + numberTwo;
}

export const Functions = (): JSX.Element => {
  return (
    <>
      <h3>Functions</h3>
      <span>2 + 8 = {addTwoNumbers(2, 8)}</span>
    </>
  )
}
