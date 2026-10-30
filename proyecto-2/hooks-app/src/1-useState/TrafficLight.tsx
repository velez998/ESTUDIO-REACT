import { useState } from "react";

export const TrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  // light contiene el color
  //setLight actualiza el nuevo color en light
  // TrafficLightColor son los parametros del useState, es decir solo permite los colores definidos en Traffic...

  const colors = {
    // colores disponibles con sus configuraciones
    red: "bg-red-500 animate-pulse",
    yellow: "bg-yellow-500 animate-pulse",
    green: "bg-green-500 animate-pulse",
  };

  type TrafficLightColor = "red" | "yellow" | "green";
  // parametros que se le pasa al useState, solo recibe estos colores
  // si se usara una interface seria unicamente para definir el tipo de dato que recibe red, yellow etc, es decir tipo sting
  // type es para que reciba especificamente los valores definidos en este caso string que valen red, yellow, green

  // y se usarian asi
  {
    /* 
    export type TrafficLightColor = "red" | "yellow" | "green";

    export interface TrafficLightColors {
    red: string;
    yellow: string;
    green: string;
    }
    
    */
  }

  const handleColorChance = (color: TrafficLightColor) => {
    // color es el parametro que recibe, despues de los : es el tipo de dato o valor que recibe el parametro color
    setLight(color);
  };

  return (
    <div className="semaforo-pagina">
      <div className="semaforo-contenido">
        <div
          className={`w-32 h-32 rounded-full ${light === "red" ? colors.red : "bg-gray-500"}`}
        ></div>

        <div
          className={`w-32 h-32 rounded-full ${light === "yellow" ? colors.yellow : "bg-gray-500"}`}
        ></div>

        <div
          className={`w-32 h-32 rounded-full ${light === "green" ? colors.green : "bg-gray-500"}`}
        ></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="botones">
          <button
            className="boton boton-rojo"
            onClick={() => handleColorChance("red")}
            // el click llama a la funcion handleColorChance que se definio arriba y le da el valor de red
            // lo mismo pasa con los diferentes botones que llaman a setLight y les asigna sus colores
          >
            Rojo
          </button>

          <button
            className="boton boton-amarillo"
            onClick={() => handleColorChance("yellow")}
          >
            Amarillo
          </button>

          <button
            className="boton boton-verde"
            onClick={() => handleColorChance("green")}
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
