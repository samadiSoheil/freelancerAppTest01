import ProposalTable from "../features/project/ProposalTable";
import useProject from "../features/project/useProject";
import BackPageBtn from "../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../ui/AppLauout/HeaderOfComponent";
import Loading from "../ui/Loading";

const Project = () => {
  const { project, isPending } = useProject();
  if (isPending) return <Loading />;
  return (
    <div className="w-full">
      <HeaderOfComponent title={` لسیت درخواست های پروژه ی ${project?.title}`}>
        <BackPageBtn />
      </HeaderOfComponent>
      <ProposalTable project={project} />
    </div>
  );
};

export default Project;
