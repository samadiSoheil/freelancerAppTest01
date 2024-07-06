import { useOwnerProject } from "../projects/useOwnerProject";
import Loading from "../../ui/Loading";
import HeaderOfComponent from "../../ui/AppLauout/HeaderOfComponent";
import BackPageBtn from "../../ui/AppLauout/BackPageBtn";
import Stats from "./Stats";

const DashboardLayout = () => {
  const { isPending, projects } = useOwnerProject();
  if (isPending) return <Loading />;
  if (!projects.length) return <p>شما پروژه ای ندارید...</p>;

  return (
    <div className="container">
      <HeaderOfComponent title="داشبورد شما">
        <BackPageBtn />
      </HeaderOfComponent>
      <Stats projects={projects} />
    </div>
  );
};

export default DashboardLayout;
