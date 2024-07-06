import { HiMiniArrowsPointingOut, HiSquare3Stack3D } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi2";
import Stat from "../owner/Stat";

const Stats = ({ proposals }) => {
  const numOfProjects = proposals.length;
  const numOfOpenProjects = proposals.filter((p) => p.status == 2).length;
  const numOfProposals = proposals
    .filter((p) => p.status == 2)
    .reduce((acc, item) => acc + item.price, 0);
  console.log(numOfProjects, numOfOpenProjects, numOfProposals);
  return (
    <>
      <div className="w-full flex flex-col gap-y-8 sm:flex-row sm:justify-between sm:flex-wrap sm:gap-8">
        <Stat
          icon={<HiMiniArrowsPointingOut className="size-20 " />}
          title="درخواست ها"
          valueOfStat={numOfProjects}
          cardClass="primary"
        />
        <Stat
          icon={<HiSquare3Stack3D className="size-20 " />}
          title="پذیرفته ها"
          valueOfStat={numOfOpenProjects}
          cardClass="yellow"
        />
        <Stat
          icon={<HiOutlineCreditCard className="size-20 " />}
          title="در آمد شما"
          valueOfStat={numOfProposals}
          cardClass="green"
        />
      </div>
    </>
  );
};

export default Stats;
