import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdHome } from "react-icons/md";

const SideBar = () => {
  const c =
    "flex items-center gap-2 w-full hover:bg-secondary-200 p-3 rounded-lg transition-all duration-300";
  return (
    <>
      <div className="grid justify-stretch items-stretch col-span-1 row-span-2 p-2 bg-secondary-100 dark:bg-secondary-800">
        <ul className="flex flex-col gap-y-2 text-secondary-800 dark:text-secondary-400">
          <li className="link__item">
            <CustomNavLink
              link="/owner/dashboard"
              iconComponent={<MdHome className="size-5" />}
              title="خانه"
            />
          </li>
          <li className="link__item">
            <CustomNavLink
              link="/owner/projects"
              iconComponent={<MdDashboard className="size-5" />}
              title="پروژه ها"
            />
          </li>
          <li className="link__item">
            <CustomNavLink
              link="/owner/w"
              iconComponent={<MdDashboard className="size-5" />}
              title="تستی"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

const CustomNavLink = ({ link, title, iconComponent }) => {
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) => {
          return isActive ? "link active" : "link";
        }}
      >
        {iconComponent}
        <span>{title}</span>
      </NavLink>
    </>
  );
};

export default SideBar;
