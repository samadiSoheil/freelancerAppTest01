import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProjectHeader = ({ project }) => {
  const navigateUser = useNavigate();
  return (
    <>
      <div className="flex justify-between font-Vazir-Bold text-secondary-800 mb-8">
        <h1 className="font-Vazir-Bold text-2xl text-secondary-800 border-r-8 border-r-primary-800 pr-2 leading-[48px]">
          لسیت درخواست های پروژه ی<span>&nbsp;{project.title}</span>
        </h1>
        {/* BACK PAGE BTN */}
        <button
          className="border border-gray-500 size-10 flex justify-center items-center rounded-xl"
          onClick={() => navigateUser(-1)}
        >
          <FaLongArrowAltRight className="size-6 text-gray-500 rotate-180" />
        </button>
      </div>
    </>
  );
};

export default ProjectHeader;
