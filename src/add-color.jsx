import { useState } from "react";

// function useInput(intialValue) {
//   let [value, setValue] = useState(intialValue);
//   return [
//     { value, onChange: (e) => setValue(e.target.value) },
//     () => setValue(intialValue),
//   ];
// }

export default function AddColorForm({ addColor = (f) => f }) {
  var [title, setTitle] = useState("");
  var [color, setColor] = useState("#000000");

  var onSubmit = (e) => {
    e.preventDefault();
    addColor(title, color);
    setTitle("");
    setColor("#000000");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="color title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="color"
          name="color-picker"
          placeholder="color"
          onChange={(e) => setColor(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </>
  );
}
