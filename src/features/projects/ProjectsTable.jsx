import Loading from "../../ui/Loading";
import { useOwnerProject } from "./useOwnerProject";

const ProjectsTable = () => {
  const { isPending: isLoading, projects } = useOwnerProject();
  console.log(projects);

  if (isLoading) return <Loading />;
  if (!projects?.length) return <p>هیچی نیست...</p>;
  return (
    <>
      <h1>this is Projects</h1>
    </>
  );
};

export default ProjectsTable;
