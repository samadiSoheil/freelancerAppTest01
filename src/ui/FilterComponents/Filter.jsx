import { useSearchParams } from "react-router-dom";

const Filter = ({ label, optioins, filterField }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || optioins.at(0).value;

  const handleChange = (data) => {
    searchParams.set(filterField, data);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex items-center gap-4 bg-whites text-secondary-800 dark:text-secondary-400">
      <span>{label}</span>
      <div className="flex gap-2 bg-white dark:bg-secondary-600/40 rounded-xl">
        {optioins.map((item) => {
          const isActive = currentFilter === item.value;
          return (
            <button
              disabled={isActive}
              onClick={() => handleChange(item.value)}
              className={`whitespace-nowrap  px-4 py-2 rounded-xl  ${
                isActive
                  ? "text-primary-900 dark:text-secondary-200 bg-primary-200/50 dark:bg-primary-700"
                  : ""
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
