import { HiOutlineSun } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "../../../context/ThemeProvider";

const DarkModeToggle = () => {
  const { isDark, changeThemeFun } = useTheme();
  const changeThemeHandler = () => {
    changeThemeFun();
  };
  return (
    <button onClick={changeThemeHandler}>
      {isDark ? (
        <HiOutlineMoon className="size-6" />
      ) : (
        <HiOutlineSun className="size-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;
