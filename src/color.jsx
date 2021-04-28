import { FaTrash } from "react-icons/fa";
import StarRating from "./starRating.js";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <>
      <h3>{title}</h3>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating colorKey={id} rating={rating} onUpdate={onRate} />
    </>
  );
}
