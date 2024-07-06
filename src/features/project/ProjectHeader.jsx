import HeaderOfComponent from "../../ui/AppLauout/HeaderOfComponent";
import BackPageBtn from "../../ui/AppLauout/BackPageBtn";

const ProjectHeader = ({ project }) => {
  return (
    <>
      <HeaderOfComponent title={` لسیت درخواست های پروژه ی ${project.title}`}>
        <BackPageBtn />
      </HeaderOfComponent>
    </>
  );
};

export default ProjectHeader;
