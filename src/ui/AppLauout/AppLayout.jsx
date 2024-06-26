import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const AppLayout = () => {
  return (
    <>
      <div className="grid grid-cols-[150px_minmax(100px,_1fr)] lg:grid-cols-[300px_minmax(500px,_1fr)] grid-rows-[50px_minmax(400px,_1fr)] lg:grid-rows-[80px_minmax(400px,_1fr)] w-full min-h-screen bg-slate-100">
        {/* SIDEBAR MENUE */}
        <SideBar />
        {/* HEADER MENU */}
        <Header />
        {/* MAIN CONTENT */}
        <div className=" grid justify-stretch items-stretch p-5 bg-slate-6000 border-r-2 border-secondary-300">
          <div className="w-full overflow-x-auto bg-red-3000">{<Outlet />}</div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
