import { createContext, useContext, useState } from "react";
import data from "./color-data.json";

const colorContext = createContext(data);
export const useColors = () => useContext(colorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(data);

  const addColor = (color, title) => {
    let updatedColors = [
      ...colors,
      {
        color,
        title,
        rating: 0,
      },
    ];
    setColors(updatedColors);
  };

  const onRemove = (id) => {
    let updatedColors = colors.filter((c) => c.id !== id);

    setColors(updatedColors);
  };

  const onRate = (id, rating) => {
    let updatedColors = colors.map((c) => {
      console.log(c);
      if (c.id === id) c.rating = rating;
      return c;
    });
    setColors(updatedColors);
  };

  return (
    <colorContext.Provider value={{ colors, addColor, onRemove, onRate }}>
      {children}
    </colorContext.Provider>
  );
}
