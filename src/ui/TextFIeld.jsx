function TextField({
  id,
  elementType = "text",
  lableText,
  isFoucus = false,
  ElementClass = "textFiled__input",
  elemValue,
  setElemVaulue,
}) {
  return (
    <div className="space-y-3 ">
      <label htmlFor={id}>{lableText}</label>
      <input
        value={elemValue}
        onChange={(e) => setElemVaulue(e.target.value)}
        id={id}
        autoFocus={isFoucus}
        type={elementType}
        className={ElementClass}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;

{
  /* <label htmlFor="phoneNumber">شماره موبایل</label>
<input
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
  id="phoneNumber"
  autoFocus="true"
  type="text"
  className="textFiled__input"
/> */
}
