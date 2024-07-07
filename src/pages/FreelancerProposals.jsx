import BackPageBtn from "../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../ui/AppLauout/HeaderOfComponent";
import ProposalsTable from "../features/proposals/ProposalsTable";

const FreelancerProposals = () => {
  return (
    <>
      <div className="container">
        <HeaderOfComponent title="درخواست های شما">
          <BackPageBtn />
        </HeaderOfComponent>
        <ProposalsTable />
      </div>
    </>
  );
};

export default FreelancerProposals;
