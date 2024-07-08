import { useSearchParams } from "react-router-dom";
import Loading from "../Loading";
import SelectField from "./SelectField";

const FilterDropDown = ({ optioins, filterField, isLoading }) => {
  const [searchParams, setSerarchParams] = useSearchParams();
  const category = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSerarchParams(searchParams);
  };

  if (isLoading) return <Loading height="19" width="50" />;
  return <SelectField onChangeFun={handleChange} options={optioins} value={category} />;
};
export default FilterDropDown;
