import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackPageBtn = () => {
  const navigateUser = useNavigate();

  return (
    <button
      className="border border-secondary-400 dark:border-secondary-500 size-12 flex justify-center items-center rounded-xl"
      onClick={() => navigateUser(-1)}
    >
      <FaLongArrowAltRight className="size-6 text-secondary-400 dark:text-secondary-00 rotate-180" />
    </button>
  );
};

export default BackPageBtn;
