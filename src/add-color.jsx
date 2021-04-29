import { useState } from "react";
import { useColors } from "./color-provider";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  var onSubmit = (e) => {
    e.preventDefault();
    addColor(colorProps.value, titleProps.value);
    resetTitle("");
    resetColor("#000000");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="color title"
          {...titleProps}
        />
        <input
          type="color"
          name="color-picker"
          placeholder="color"
          {...colorProps}
        />
        <button>ADD</button>
      </form>
    </>
  );
}
