// src/App.jsx
import React from "react";
import FobosLanding from "./components/FobosLanding";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <FobosLanding />
    </LanguageProvider>
  );
}

export default App;
