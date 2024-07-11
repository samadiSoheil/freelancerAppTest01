import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTheme } from "../../context/ThemeProvider";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
const SideBar = ({ children }) => {
  const refElemChildren = useRef();
  const { isOpenSidebar, setISopenSidebar, isDark, changeThemeFun } = useTheme();

  // * close sidebar menu on outside click
  useEffect(() => {
    const handlerClick = (e) => {
      if (
        refElemChildren.current &&
        !refElemChildren.current.contains(e.target) &&
        e.target.id === "sidebarBackdrop"
      ) {
        setISopenSidebar(false);
      }
    };
    document.addEventListener("click", handlerClick);

    return () => document.removeEventListener("CLick", handlerClick);
  }, []);

  return (
    <>
      <div
        id="sidebarBackdrop"
        className={`h-screen lg:w-[calc(100%-(100%-250px))] fixed lg:flex  dark:bg-white/20 bg-secondary-900/20  z-50 top-0 right-0 bottom-0 left-0 lg:visible lg:opacity-100 lg:!right-0  transition-all duration-300 ease-in  ${
          isOpenSidebar
            ? " backdrop-blur-sm lg:backdrop-blur-0 visible opacity-100"
            : " backdrop-blur-0 right-[-3000px] invisible opacity-0"
        }`}
      >
        <div
          ref={refElemChildren}
          className={`w-[250px] h-screen flex flex-col items-start justify-between lg:border-l-2 border-secondary-100 dark:border-secondary-700 bg-white dark:bg-secondary-800 transition-all duration-300 ease-in ${
            isOpenSidebar ? "" : ""
          }`}
        >
          <div className="w-full">
            <div className="w-full h-[80px] flex justify-between border-b-2  border-secondary-100 dark:border-secondary-700 text-secondary-800 dark:text-secondary-400">
              <div className="w-full flex justify-between items-center mb-10s p-4">
                <h2 className="font-Vazir-Bold text-lg"> منو داشبورد</h2>
                <button
                  className="flex lg:hidden"
                  onClick={() => setISopenSidebar(false)}
                >
                  <IoIosCloseCircleOutline className="size-6" />
                </button>
              </div>
            </div>

            <ul className="w-full flex flex-col gap-y-2 px-4 mt-10 text-secondary-800 dark:text-secondary-400">
              {children}
            </ul>
          </div>

          <div className="block lg:hidden w-full p-4 text-secondary-800 dark:text-secondary-400 ">
            <div className="w-full flex gap-4 justify-center bg-secondary-100 dark:bg-secondary-700 px-4 py-2 rounded-lg">
              <button
                onClick={() => changeThemeFun(true)}
                className={`flex-grow flex items-center justify-center  p-1 rounded-lg ${
                  isDark
                    ? "bg-secondary-500"
                    : "bg-secondary-100 dark:bg-secondary-700 border-2 border-secondary-100 dark:border-secondary-500 "
                }`}
              >
                <HiOutlineMoon className="size-6" />
              </button>
              <button
                onClick={() => changeThemeFun(false)}
                className={`flex-grow flex items-center justify-center p-1 rounded-lg ${
                  !isDark
                    ? "bg-white "
                    : "bg-secondary-100 dark:bg-secondary-700 border-2 border-secondary-100 dark:border-secondary-500 "
                }`}
              >
                <HiOutlineSun className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
