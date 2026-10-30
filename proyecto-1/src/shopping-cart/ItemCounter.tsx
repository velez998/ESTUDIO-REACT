import { useState } from "react";

import "./ItemCounter.css";

interface Props {
  name: string;
  quantity?: number | undefined;
}

/* rafc  -- esto sirve para crear un componente basico automaticamente*/
const ItemCounter = ({ name, quantity = 1 }: Props) => {
  /* Hooks */
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubstract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <>
      {name}
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

export default ItemCounter;
