import UserAvatar from "../../features/auth/UserAvatar";
import { useUser } from "../../features/auth/useUser";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
  const { data, isPending } = useUser();
  console.log(data);
  if (!data) return null;
  return (
    <>
      <div className="grid justify-stretch items-stretch p-2 bg-slate-5000 overflow-hidden border-r-2  border-b-2 border-secondary-300 dark:border-secondary-700 text-secondary-800 dark:text-secondary-400 backdrop-blur-sm">
        <div
          className={`container flex justify-end items-center gap-8 bg-slate-4000 ${
            isPending ? "blur-sm" : ""
          } `}
        >
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
