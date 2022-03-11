import React, { useState } from "react";
import "./App.css";
import Colors from "./components/colors";
import ColorBlock from "./components/ColorBlock";
import ColorForm from "./components/ColorForm";

function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  let colorMap = colors.map((color, i) => {
    return <ColorBlock color={color} key={i} />;
  });

  return (
    <div className="App">
      <Colors colors={colors} />
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
