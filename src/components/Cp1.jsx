import React from "react";
import {
  useThemeContext,
  useThemeUpdateContext,
} from "../context/ThemeContext";

const Cp1 = () => {
  const darkTheme = useThemeContext();
  const toggleTheme = useThemeUpdateContext();

  return (
    <div>
      <button
        style={{
          width: "120px",
          height: "50px",
          color: "black",
          backgroundColor: "light-green",
        }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <br />
      <br />
      <div
        style={{
          color: "red",
          width: "300px",
          height: "200px",
          backgroundColor: darkTheme ? "black" : "white",
          padding: "40px 20px",
        }}
      >
        <h3 style={{ margin: "100px 100px" }}>Container</h3>
      </div>
    </div>
  );
};

export default Cp1;
