const SelectField = ({ onChangeFun, value, options }) => {
  return (
    <select
      onChange={onChangeFun}
      value={value}
      className="textFiled__input w-40 py-2 border-gray-500"
    >
      {options?.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectField;
