interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Adress;
}

interface Adress {
  country: string;
  houseNo: number;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 30,
    firstName: "John",
    lastName: "Doe",
    address: {
      country: "Canada",
      houseNo: 615,
      street: "Main Street",
    },
  };
  return (
    <div>
      <h3 className="font-bold">Objectos Literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  );
};
