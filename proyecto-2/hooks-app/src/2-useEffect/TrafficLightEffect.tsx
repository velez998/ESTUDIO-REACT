import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = "red" | "yellow" | "green";

export const TrafficLightEffect = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  // countdown effect
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  // changeLightColorEffect

  useEffect(() => {
    if (countdown > 0) return;

    if (countdown === 0) {
      setCountdown(5);
      if (light === "red") {
        setLight("green");
        return;
      }
      if (light === "yellow") {
        setLight("red");
        return;
      }
      if (light === "green") {
        setLight("yellow");
        return;
      }
    }
  }, [countdown, light]);

  return (
    <div className="semaforo-pagina">
      <div className="semaforo-contenido">
        <h1 className="h1-effect">Semáforo con useEffect</h1>
        <h2 className="h2-effect">Contador: {countdown}</h2>

        <div className="barra-progreso">
          <div
            className="progreso"
            style={{ width: `${(countdown / 5) * 100}%` }}
          ></div>
        </div>

        <div
          className={`w-32 h-32 rounded-full ${light === "red" ? colors.red : "bg-gray-500"}`}
        ></div>

        <div
          className={`w-32 h-32 rounded-full ${light === "yellow" ? colors.yellow : "bg-gray-500"}`}
        ></div>

        <div
          className={`w-32 h-32 rounded-full ${light === "green" ? colors.green : "bg-gray-500"}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLightEffect;
