interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const LiteralObjects = (): JSX.Element => {
  const person: Person = {
    age: 11,
    firstName: 'Gohan',
    lastName: 'Perez',
    address: {
      country: 'Kamehouse',
      houseNo: '1'
    }
  }
  return (
    <>
      <h3>Literal Objects</h3>
      <pre>
        { JSON.stringify(person, null, 2) }
      </pre>
    </>
  )
}
