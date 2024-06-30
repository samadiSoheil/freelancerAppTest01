function TextField({
  id,
  elementType = "text",
  lableText,
  isFoucus = false,
  ElementClass = "textFiled__input",
  register,
  errorValidation,
  required,
  errors,
}) {
  if (!register) return;
  return (
    <div className="space-y-3 ">
      <label className="flex gap-2" htmlFor={id}>
        {lableText} {required && <p className="text-red-600">*</p>}
      </label>
      <input
        {...register(id, errorValidation)}
        id={id}
        autoFocus={isFoucus}
        type={elementType}
        className={ElementClass}
        autoComplete="off"
      />
      {errors && errors[id] && (
        <p className="text-sm px-4 text-red-500">{errors[id].message}</p>
      )}
    </div>
  );
}

export default TextField;
