import BackPageBtn from "../../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../../ui/AppLauout/HeaderOfComponent";
import Loading from "../../ui/Loading";
import { useProposals } from "../proposals/useProposals";
import Stats from "./Stats";

const DashboardLayout = () => {
  const { proposals, isPending } = useProposals();
  if (!proposals) return;
  if (isPending) return <Loading />;
  console.log(proposals);
  return (
    <>
      <HeaderOfComponent title="داشبورد شما">
        <BackPageBtn />
      </HeaderOfComponent>
      <Stats proposals={proposals} />
    </>
  );
};

export default DashboardLayout;
