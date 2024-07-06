import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackPageBtn = () => {
  const navigateUser = useNavigate();

  return (
    <button
      className="border border-gray-500 size-10 flex justify-center items-center rounded-xl"
      onClick={() => navigateUser(-1)}
    >
      <FaLongArrowAltRight className="size-6 text-gray-500 rotate-180" />
    </button>
  );
};

export default BackPageBtn;
