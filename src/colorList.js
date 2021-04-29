import Color from "./color";
import { useColors } from "./color-provider";

export default function ColorList() {
  const { colors, onRemove, onRate } = useColors();
  return (
    <>
      {colors.map((color, i) => (
        <Color key={color.id} {...color} onRemove={onRemove} onRate={onRate} />
      ))}
    </>
  );
}
