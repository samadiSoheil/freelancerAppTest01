import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import useLogoutUser from "../../../features/auth/useLogoutUser";
import Loading from "../../Loading";

const Logout = () => {
  const { isLogouting, logoutFun } = useLogoutUser();
  const logoutHandler = () => {
    logoutFun();
  };
  return isLogouting ? (
    <Loading />
  ) : (
    <button onClick={logoutHandler}>
      <HiOutlineArrowLeftStartOnRectangle className="size-6 text-red-500" />
    </button>
  );
};

export default Logout;
