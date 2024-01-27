import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Cp1 from "./cp1";

const App = () => {
  return (
    <ThemeProvider>
      <Cp1 />
    </ThemeProvider>
  );
};

export default App;
