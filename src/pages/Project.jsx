import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/project/ProposalTable";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";

const Project = () => {
  const { project, isPending } = useProject();
  if (isPending) return <Loading />;
  if (!project) return <p>nothing here...</p>;
  return (
    <div className="w-full">
      <ProjectHeader project={project} />
      <ProposalTable project={project} />
    </div>
  );
};

export default Project;
