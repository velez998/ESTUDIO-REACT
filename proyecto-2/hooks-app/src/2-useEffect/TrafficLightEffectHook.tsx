import useTrafficLight from "../hooks/useTrafficLight";

export const TrafficLightEffectHook = () => {
  const { light, colors, countdown } = useTrafficLight();

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

export default TrafficLightEffectHook;
