import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>

      <input ref={inputRef} type="text" autoFocus />

      <button onClick={handleClick}>Set focus</button>
    </div>
  );
};

export default FocusScreen;
