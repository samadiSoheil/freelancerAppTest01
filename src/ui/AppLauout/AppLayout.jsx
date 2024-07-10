import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen">
        {/* SIDEBAR MENUE */}
        {children}
        <div>
          <Header />
          {/* MAIN CONTENT */}
          <div className="w-full lg:pr-[250px] dark:bg-secondary-800">
            <div className="w-full">
              <div className="container">{<Outlet />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
