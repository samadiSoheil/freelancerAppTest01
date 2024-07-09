import { useAllProjects } from "../../hook/useAllProjects";
import BackPageBtn from "../../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../../ui/AppLauout/HeaderOfComponent";
import Loading from "../../ui/Loading";
import { useProposals } from "../proposals/useProposals";
import Stats from "./Stats";
import { useAllUsers } from "./useAllUsers";

const DashboardLayout = () => {
  const { isPending, projects } = useAllProjects();
  const { isPending: isLoadingProposalse, proposals } = useProposals();
  const { isPending: isLoadingAllUsers, users } = useAllUsers();

  if (isPending || isLoadingProposalse || isLoadingAllUsers) return <Loading />;
  if (!projects || !proposals || !users) return;

  return (
    <div className="container">
      <HeaderOfComponent title="داشبورد شما">
        <BackPageBtn />
      </HeaderOfComponent>
      <Stats
        users={users.length}
        proposals={proposals.length}
        projects={projects.length}
      />
    </div>
  );
};

export default DashboardLayout;
