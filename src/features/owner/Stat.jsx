const colors = {
  primary: "bg-primary-200 dark:bg-primary-700 text-primary-900 dark:text-primary-300",
  yellow: "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-200",
  green: "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100",
};

const Stat = ({ title, icon, valueOfStat, cardClass }) => {
  return (
    <div className="stat__container">
      <div className="flex flex-col items-center gap-4">
        <div className={`stat__icon-container ${colors[cardClass]}`}>{icon}</div>
        <div>
          <h2 className="stat__title">
            {title}&nbsp;<span>{valueOfStat.toLocaleString("fa-ir")}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Stat;
