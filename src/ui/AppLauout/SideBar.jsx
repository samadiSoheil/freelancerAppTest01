import { useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTheme } from "../../context/ThemeProvider";
const SideBar = ({ children }) => {
  const c =
    "flex items-center gap-2 w-full hover:bg-secondary-200 p-3 rounded-lg transition-all duration-300";
  const refElemContainer = useRef();
  const refElemChildren = useRef();
  const { isOpenSidebar, setISopenSidebar } = useTheme();

  return (
    <>
      <div
        ref={refElemContainer}
        className={`h-screen lg:w-[calc(100%-(100%-250px))] fixed lg:flex  dark:bg-white/20 bg-secondary-900/20  z-50 top-0 right-0 bottom-0 left-0 lg:visible lg:opacity-100 lg:!right-0  transition-all duration-300 ease-in  ${
          isOpenSidebar
            ? " backdrop-blur-sm lg:backdrop-blur-0 visible opacity-100"
            : " backdrop-blur-0 right-[-3000px] invisible opacity-0"
        }`}
      >
        <div
          ref={refElemChildren}
          className={`w-[250px] h-screen flex flex-col items-start justify-start lg:border-l-2 border-secondary-100 dark:border-secondary-700 bg-white dark:bg-secondary-800 transition-all duration-300 ease-in ${
            isOpenSidebar ? "" : ""
          }`}
        >
          <div className="w-full h-[80px] flex justify-between border-b-2  border-secondary-100 dark:border-secondary-700 text-secondary-800 dark:text-secondary-400">
            <div className="w-full flex justify-between items-center mb-10s p-4">
              <h2 className="font-Vazir-Bold text-lg"> منو داشبورد</h2>
              <button className="flex lg:hidden" onClick={() => setISopenSidebar(false)}>
                <IoIosCloseCircleOutline className="size-6" />
              </button>
            </div>
          </div>

          <ul className="w-full flex flex-col gap-y-2 px-4 mt-10 text-secondary-800 dark:text-secondary-400">
            {children}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
