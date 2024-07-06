import { MdDashboard, MdHome } from "react-icons/md";
import AppLayout from "../../ui/AppLauout/AppLayout";
import CustomNavLink from "../../ui/AppLauout/CustomNavLink";
import SideBar from "../../ui/AppLauout/SideBar";

const FreelancerLayout = () => {
  return (
    <>
      <AppLayout>
        <SideBar>
          <CustomNavLink
            link="dashboard"
            iconComponent={<MdHome className="size-5" />}
            title="خانه فریلنسر"
          />
          <CustomNavLink
            link="proposals"
            iconComponent={<MdDashboard className="size-5" />}
            title="درخواست های فریلنسر"
          />
        </SideBar>
      </AppLayout>
    </>
  );
};

export default FreelancerLayout;
