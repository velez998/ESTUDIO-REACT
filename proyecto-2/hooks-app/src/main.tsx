import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { TrafficLight } from "./1-useState/TrafficLight";
// import { TrafficLightEffect } from "./2-useEffect/TrafficLightEffect";
// import { TrafficLightEffectHook } from "./2-useEffect/TrafficLightEffectHook";
// import { PokemonPage } from "./3-examples/PokemonPage";
import { TasksApp } from "./5-useReducer/TaskApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TasksApp />
  </StrictMode>,
);
