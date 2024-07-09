import { HiMiniArrowsPointingOut, HiSquare3Stack3D } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import Stat from "../owner/Stat";

const Stats = ({ users, proposals, projects }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-y-8 sm:flex-row sm:justify-between sm:flex-wrap sm:gap-8">
        <Stat
          icon={<HiMiniArrowsPointingOut className="size-20 " />}
          title="درخواست ها"
          valueOfStat={proposals}
          cardClass="primary"
        />
        <Stat
          icon={<HiSquare3Stack3D className="size-20 " />}
          title="پروه ها"
          valueOfStat={projects}
          cardClass="yellow"
        />
        <Stat
          icon={<HiUsers className="size-20 " />}
          title="کاربران"
          valueOfStat={users}
          cardClass="green"
        />
      </div>
    </>
  );
};

export default Stats;
