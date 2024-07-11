import { useOwnerProject } from "../projects/useOwnerProject";
import Loading from "../../ui/Loading";
import HeaderOfComponent from "../../ui/AppLauout/HeaderOfComponent";
import BackPageBtn from "../../ui/AppLauout/BackPageBtn";
import Stats from "./Stats";
import EptyIllustration from "../../ui/EptyIllustration";

const DashboardLayout = () => {
  const { isPending, projects } = useOwnerProject();
  if (isPending) return <Loading />;
  if (!projects.length) return <EptyIllustration />;

  return (
    <>
      <HeaderOfComponent title="داشبورد شما">
        <BackPageBtn />
      </HeaderOfComponent>
      <Stats projects={projects} />
    </>
  );
};

export default DashboardLayout;
