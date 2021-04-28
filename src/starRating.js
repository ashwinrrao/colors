import { FaStar } from "react-icons/fa";

export default function StarRating({
  colorKey,
  totalStars = 5,
  rating,
  onUpdate = (f) => f,
}) {
  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <FaStar
          key={i}
          color={i < rating ? "red" : "grey"}
          onClick={() => onUpdate(colorKey, i + 1)}
        />
      ))}
      <p>
        {rating} of {totalStars}
      </p>
    </>
  );
}
