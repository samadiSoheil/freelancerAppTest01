import { useState } from "react";
import Modal from "../../../ui/modal/Modal";
import AddProjectForm from "../../projects/AddProjectForm";
import HeaderOfComponent from "../../../ui/AppLauout/HeaderOfComponent";
import Filter from "../../../ui/FilterComponents/Filter";
import FilterDropDown from "../../../ui/FilterComponents/FilterDropDown";
import useCategory from "../../../hook/useCategory";
import BackPageBtn from "../../../ui/AppLauout/BackPageBtn";
import ProjectsTable from "../../projects/ProjectsTable";

const ProjectLayout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isLoading, transformedCategory } = useCategory();

  return (
    <>
      <div className=" overflow-auto">
        <div className="min-w-[1060px]">
          <HeaderOfComponent title="پروژه ها">
            <div className="flex justify-end items-center gap-8">
              <Filter
                label="وضعیت"
                filterField="status"
                optioins={[
                  { value: "ALL", label: "همه" },
                  { value: "OPEN", label: "باز" },
                  { value: "CLOSED", label: "بسته" },
                ]}
              />
              <FilterDropDown
                filterField="category"
                optioins={[{ value: "ALL", label: "همه" }, ...transformedCategory]}
                isLoading={isLoading}
              />
              <FilterDropDown
                filterField="sort"
                optioins={[
                  { value: "ALL", label: "پیش فرض" },
                  { value: "latest", label: "جدیدترین" },
                  { value: "earliest", label: "قدیمی ترین" },
                ]}
                isLoading={isLoading}
              />
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
              <BackPageBtn />
            </div>
          </HeaderOfComponent>
        </div>
      </div>

      <ProjectsTable isAdmin={true} />
    </>
  );
};

export default ProjectLayout;
