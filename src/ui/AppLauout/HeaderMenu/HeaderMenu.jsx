import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import Logout from "./Logout";
import DarkModeToggle from "./DarkModeToggle";

const HeaderMenu = () => {
  return (
    <>
      <ul className="flex gap-2">
        <li className="nav__item">
          <Link>
            <HiOutlineUser className="size-6" />
          </Link>
        </li>
        <li className="nav__item">
          <DarkModeToggle />
        </li>
        <li className="nav__item">
          <Logout />
        </li>
      </ul>
    </>
  );
};

export default HeaderMenu;
