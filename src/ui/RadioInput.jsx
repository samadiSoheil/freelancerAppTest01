const RadioInput = ({ data, register, errors }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className="flex items-center gap-2">
            <input
              className="form-radio cursor-pointe text-primary-900 focus:ring-primary-900"
              type="radio"
              id={item.rule}
              name={item.name}
              value={item.rule}
              {...register(item.name, { required: "مشخص کردن وضعیت شما ضروری است" })}
            />
            <label htmlFor={item.rule} className="cursor-pointer">
              {item.lableInput}
            </label>
          </div>
        );
      })}
      <div className="w-full justify-center text-center">
        {errors && errors?.rule && <p className="text-red-500">{errors?.rule.message}</p>}
      </div>{" "}
    </>
  );
};

export default RadioInput;
