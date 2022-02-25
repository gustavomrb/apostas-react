import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JogosNBA from "./JogosNBA";
import JogoNBA from "./JogoNBA";
import JogosFutebol from "./JogosFutebol";
import JogoFutebol from "./JogoFutebol";
import JogosTenis from "./JogosTenis";
import JogoTenis from "./JogoTenis";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/jogos" element={<JogosNBA />} />
          <Route path="/jogo" element={<JogoNBA />} />
          <Route path="/futebol/jogos" element={<JogosFutebol />} />
          <Route path="/futebol/jogo/:idJogo" element={<JogoFutebol />} />
          <Route path="/tenis/jogos" element={<JogosTenis />} />
          <Route path="/tenis/jogo/:idJogo" element={<JogoTenis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
