import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { counter, increaseBy } = useCounter(0);

  return (
    <div>
      <span className="font-bold">Counter: {counter}</span>
      <div>
        <button
          className="p-2 text-white bg-blue-500 rounded-xl w-10 mx-2 hover:bg-blue-700"
          onClick={() => increaseBy(-1)}
        >
          -1
        </button>
        <button
          className="p-2 text-white bg-blue-500 rounded-xl w-10 mx-2 hover:bg-blue-700"
          onClick={() => increaseBy(1)}
        >
          +1
        </button>
      </div>
    </div>
  );
};
