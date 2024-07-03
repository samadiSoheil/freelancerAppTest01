const RHFSelectInput = ({ id, label, options, required, rejester, errors }) => {
  return (
    <>
      <div className="space-y-3 ">
        <label
          htmlFor={id}
          className="flex gap-2 text-secondary-800 dark:text-secondary-400"
        >
          {label}
          {required && <p className="text-red-500">*</p>}
        </label>
        <select
          {...rejester(id, { required: "دسته بندی را مشخص کنید." })}
          id={id}
          className="textFiled__input"
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        {errors && errors[id] && (
          <p className="text-sm px-4 text-red-500">{errors[id]?.message}</p>
        )}
      </div>
    </>
  );
};

export default RHFSelectInput;
