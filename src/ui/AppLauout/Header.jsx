import { useTheme } from "../../context/ThemeProvider";
import UserAvatar from "../../features/auth/UserAvatar";
import { useUser } from "../../features/auth/useUser";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const { setISopenSidebar } = useTheme();
  const { data, isPending } = useUser();
  if (!data) return null;
  return (
    <>
      <div className="w-full h-[80px] lg:pr-[250px] flex bg-white dark:bg-secondary-800 text-secondary-800 border-secondary-100 dark:border-secondary-700 dark:text-secondary-400 border-b-2">
        <div
          className={`container flex justify-between items-center gap-8 ${
            isPending ? "blur-sm" : ""
          } `}
        >
          <button onClick={() => setISopenSidebar(true)} className="flex lg:hidden p-2">
            <RxHamburgerMenu className="size-6 " />
          </button>

          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
