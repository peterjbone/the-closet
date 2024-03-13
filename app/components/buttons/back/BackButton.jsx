import { useRouter } from "next/navigation";
import { BiSolidLeftArrowCircle } from "react-icons/bi";

export const BackButton = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <button
      onClick={handleGoBack}
      className="bg-black text-white font-bold p-4 rounded"
    >
      BACK
    </button>
  );
};

export const BackArrowButton = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <BiSolidLeftArrowCircle
      size={45}
      onClick={handleGoBack}
      className="cursor-pointer"
    />
  );
};
