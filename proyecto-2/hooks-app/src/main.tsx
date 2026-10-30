import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TrafficLight } from "./1-useState/TrafficLight";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrafficLight></TrafficLight>
  </StrictMode>,
);
