import { HiMiniArrowsPointingOut } from "react-icons/hi2";
import { HiMiniArrowsPointingIn } from "react-icons/hi2";
import { HiSquare3Stack3D } from "react-icons/hi2";
import Stat from "./Stat";

const Stats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfOpenProjects = projects.filter((p) => p.status == "OPEN").length;
  const numOfProposals = projects.reduce((acc, item) => acc + item.proposals.length, 0);
  return (
    <>
      <div className="w-full flex flex-col gap-y-8 sm:flex-row sm:justify-between sm:flex-wrap sm:gap-8">
        <Stat
          icon={<HiMiniArrowsPointingOut className="size-20 " />}
          title="کل پروژها"
          valueOfStat={numOfProjects}
          cardClass="primary"
        />
        <Stat
          icon={<HiSquare3Stack3D className="size-20 " />}
          title="پروژه های باز"
          valueOfStat={numOfOpenProjects}
          cardClass="yellow"
        />
        <Stat
          icon={<HiMiniArrowsPointingIn className="size-20 " />}
          title="درخواست همکاری"
          valueOfStat={numOfProposals}
          cardClass="green"
        />
      </div>
    </>
  );
};

export default Stats;
