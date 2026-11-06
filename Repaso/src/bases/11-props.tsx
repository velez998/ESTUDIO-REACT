import { useState } from "react";

interface ItemCounterP {
  name: string;
  quantity?: number;
}

const ItemsCounter = ({ name, quantity = 1 }: ItemCounterP) => {
  const [count, setCounter] = useState(quantity);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    if (count === 1) return;
    setCounter(count - 1);
  };
  return (
    <>
      <h1>Item comprado: {name}</h1>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default ItemsCounter;
