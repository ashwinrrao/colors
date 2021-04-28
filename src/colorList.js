import Color from "./color";

export default function ColorList({
  colors,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <>
      {colors.map((color, i) => (
        <Color key={color.id} {...color} onRemove={onRemove} onRate={onRate} />
      ))}
    </>
  );
}
