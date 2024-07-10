import BackPageBtn from "../../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../../ui/AppLauout/HeaderOfComponent";
import ProposalsTable from "./ProposalsTable";

const ProposalseLayout = () => {
  return (
    <>
      <HeaderOfComponent title="درخواست های شما">
        <BackPageBtn />
      </HeaderOfComponent>
      <ProposalsTable />
    </>
  );
};
export default ProposalseLayout;
