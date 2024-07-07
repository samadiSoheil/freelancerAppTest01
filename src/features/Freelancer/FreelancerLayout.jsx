import { MdHome } from "react-icons/md";
import AppLayout from "../../ui/AppLauout/AppLayout";
import CustomNavLink from "../../ui/AppLauout/CustomNavLink";
import SideBar from "../../ui/AppLauout/SideBar";
import { HiMiniArrowsPointingOut, HiSquare3Stack3D } from "react-icons/hi2";

const FreelancerLayout = () => {
  return (
    <>
      <AppLayout>
        <SideBar>
          <CustomNavLink
            link="dashboard"
            iconComponent={<MdHome className="size-5" />}
            title="خانه"
          />
          <CustomNavLink
            link="proposals"
            iconComponent={<HiMiniArrowsPointingOut className="size-5" />}
            title="درخواست ها"
          />
          <CustomNavLink
            link="projects"
            iconComponent={<HiSquare3Stack3D className="size-5" />}
            title="پروژه ها"
          />
        </SideBar>
      </AppLayout>
    </>
  );
};

export default FreelancerLayout;
