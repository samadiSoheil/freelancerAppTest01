import { MdDashboard, MdHome } from "react-icons/md";
import AppLayout from "../../ui/AppLauout/AppLayout";
import CustomNavLink from "../../ui/AppLauout/CustomNavLink";
import SideBar from "../../ui/AppLauout/SideBar";

const OwnerLayout = () => {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink
          link="/owner/dashboard"
          iconComponent={<MdHome className="size-5" />}
          title="خانه"
        />
        <CustomNavLink
          link="/owner/projects"
          iconComponent={<MdDashboard className="size-5" />}
          title="پروژه ها"
        />
      </SideBar>
    </AppLayout>
  );
};

export default OwnerLayout;
