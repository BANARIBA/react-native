export const BasicTypes = (): JSX.Element => {
  const name: string = 'Gohan';
  const age: number = 11;
  const isActive: boolean = true;
  const powers: string[] = ['Mazenko', 'Kame hame ha', ''];
  return (
    <>
      <h3>Basic Types</h3>
      Name: {name} - Age: {age} - Is Alive: {isActive ? 'S' : 'N'}
      <p>Tecnics: {powers.join(',')}</p>
    </>
  )
}
