export const BasicTypes = () => {
  const name: string = "Bryan";
  const age: number = 30;
  const isActive: boolean = true;
  const powers: string[] = ['React', 'React Native'];
  return (
    <div>
      <h3 className="font-bold">Tipos basicos</h3>
      {name}
      <p>Age: {age}</p>
      <p>Is Active: {isActive ? "Yes" : "No"}</p>
      <p>Powers: {powers.join(', ')}</p>
    </div>
  );
};
