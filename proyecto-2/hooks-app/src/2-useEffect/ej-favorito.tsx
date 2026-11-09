import { useState, useEffect } from "react";

export function favorito() {
  const [favorito, setFavorito] = useState(false);

  const cambioEstado = () => {
    setFavorito(!favorito); // Revierte el resultado anterior (false pasa a true)*/
  };

  return (
    <div>
      <h1>Favorito</h1>
      <button onClick={cambioEstado}> Cambiar Favorito </button>
      <h2> {favorito ? "❤️ Me gusta" : "🤍 Me gusta"} </h2>
    </div>
  );
}

//------------------
// EJERCICIO 2
//------------------

export function Contraseña() {
  const [contraseña, setContraseña] = useState(false);

  const cambioContraseña = () => {
    setContraseña(!contraseña); //(!contraseña) Revierte el resultado anterior (false pasa a true)*/
  };

  return (
    <div>
      <input type={contraseña ? "text" : "password"}></input>
      <button onClick={cambioContraseña}>
        {contraseña ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}

//------------------
// EJERCICIO 3
//------------------

export function ContadorEfecto() {
  const [count, setCount] = useState(0);

  const incremento = () => {
    setCount(count + 1);
  };

  const decremento = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("El contador cambió:", count);
  }, [count]);

  return (
    <div>
      <h1> Contador </h1>
      <h2>el valor es: {count}</h2>
      <p>{count === 0 ? "el valor es 0" : "el valor es positivo"}</p>
      <button onClick={incremento}>+</button>
      <button onClick={decremento}>-</button>
    </div>
  );
}
