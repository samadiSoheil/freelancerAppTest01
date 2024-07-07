import BackPageBtn from "../../../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../../../ui/AppLauout/HeaderOfComponent";
import ProjectsTable from "./ProjectsTable";

const AllProjectsLayout = () => {
  return (
    <>
      <HeaderOfComponent title="پروژه ها">
        <BackPageBtn />
      </HeaderOfComponent>
      <ProjectsTable />
    </>
  );
};

export default AllProjectsLayout;
