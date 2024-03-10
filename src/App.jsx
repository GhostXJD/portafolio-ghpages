import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RedesLinks from "./components/RedesLinks";
import SobreMi from "./components/SobreMi";
import Experiencia from "./components/Experiencia";
import Conocimientos from "./components/Conocimientos";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SobreMi />
      <Experiencia />
      <Conocimientos />

      <RedesLinks />
    </div>
  )
}

export default App
