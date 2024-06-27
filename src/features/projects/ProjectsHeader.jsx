import { useState } from "react";
import Modal from "../../ui/modal/Modal";

const ProjectsHeader = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center my-8">
        <h1 className="font-Vazir-Bold text-2xl text-secondary-800 border-r-8 border-r-primary-800 pr-2 leading-[48px]">
          پروژه های شما
        </h1>
        <button
          onClick={() => setIsOpenModal(true)}
          className="btn btn--primery flex gap-2"
        >
          <span>+</span>
          <span>اصافه کردن پروژه جدید</span>
        </button>
        <Modal
          isOpen={isOpenModal}
          onClose={setIsOpenModal}
          title="اضافه کردن پروژه جدید"
          typeOfModal="AddProject"
        ></Modal>
      </div>
    </>
  );
};

export default ProjectsHeader;
