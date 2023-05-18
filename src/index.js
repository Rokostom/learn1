import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Startscreen from "./components/startscreen/Startscreen";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Startscreen />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
      <Routes>
        <Route></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
