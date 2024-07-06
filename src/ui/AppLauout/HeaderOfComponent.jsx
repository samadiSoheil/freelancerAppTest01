const HeaderOfComponent = ({ title, children }) => {
  return (
    <>
      <div className="flex justify-between items-center my-8">
        <h1 className="font-Vazir-Bold text-2xl text-secondary-800 dark:text-secondary-100 border-r-8  border-r-primary-800 pr-2 leading-[48px]">
          {title}
        </h1>
        {children}
      </div>
    </>
  );
};

export default HeaderOfComponent;
