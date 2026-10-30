import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HooksApp } from "./Hooks-app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HooksApp></HooksApp>
  </StrictMode>,
);
