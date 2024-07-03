const SideBar = ({ children }) => {
  const c =
    "flex items-center gap-2 w-full hover:bg-secondary-200 p-3 rounded-lg transition-all duration-300";
  return (
    <>
      <div className="grid justify-stretch items-stretch col-span-1 row-span-2 p-2 bg-secondary-100 dark:bg-secondary-800">
        <ul className="flex flex-col gap-y-2 text-secondary-800 dark:text-secondary-400">
          {children}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
