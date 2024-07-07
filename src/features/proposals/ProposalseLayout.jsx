import BackPageBtn from "../../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../../ui/AppLauout/HeaderOfComponent";
import ProposalsTable from "./ProposalsTable";

const ProposalseLayout = () => {
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
export default ProposalseLayout;
