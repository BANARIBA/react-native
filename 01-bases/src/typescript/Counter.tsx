import { useCounter } from "../hooks"

export const Counter = (): JSX.Element => {
  const {counter, increaseBy} = useCounter(10);

  return (
    <>
      <h3 className="text-2xl">Counter <small className="font-bold">{counter}</small></h3>
      <div>
        <button className="p-2 bg-blue-500 rounded-xl w-10 mx-2 hover:bg-blue-600" onClick={() => increaseBy(1)}>+1</button>
        <button className="p-2 bg-blue-500 rounded-xl w-10 mx-2 hover:bg-blue-600" onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
