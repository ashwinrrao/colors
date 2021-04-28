import { useState } from "react";
import AddColorForm from "./add-color";
import "./App.css";
import data from "./color-data.json";
import ColorList from "./colorList.js";
import { v4 as uuid } from "uuid";

function App() {
  var [colors, setColors] = useState(data);

  const onRemove = (id) => {
    let filtered = colors.filter((c) => c.id !== id);
    setColors(filtered);
  };

  const onRate = (colorKey, rating) => {
    let updatedRatings = colors.map((c) =>
      c.id !== colorKey ? c : { ...c, rating }
    );
    setColors(updatedRatings);
  };

  const addColor = (title, color) => {
    let c = {};
    c.id = uuid();
    c.title = title;
    c.color = color;
    c.rating = 0;
    console.log({ title, color, c });
    setColors([...colors, c]);
  };

  return (
    <>
      <ColorList colors={colors} onRate={onRate} onRemove={onRemove} />

      <AddColorForm addColor={addColor} />
    </>
  );
}

export default App;
