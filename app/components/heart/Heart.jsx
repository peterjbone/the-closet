import { FaHeart } from "react-icons/fa";

export const Heart = ({ black, onClick }) => {
  return (
    <FaHeart
      onClick={onClick}
      className={`text-2xl cursor-pointer ${black ? "" : "text-red-500"}`}
    />
  );
};
