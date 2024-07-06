import { useState } from "react";
import Modal from "../../ui/modal/Modal";
import AddProjectForm from "./AddProjectForm";
import HeaderOfComponent from "../../ui/AppLauout/HeaderOfComponent";

const ProjectsHeader = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <HeaderOfComponent title=" پروژه های شما">
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
        >
          <AddProjectForm setIsOpenModal={setIsOpenModal} />
        </Modal>
      </HeaderOfComponent>
    </>
  );
};

export default ProjectsHeader;
