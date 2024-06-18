import { useState } from "react";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  return (
    <>
      <div className="w-full">
        <form className="space-y-5">
          <div>
            <label htmlFor="phoneNumber">شماره موبایل</label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phoneNumber"
              autoFocus="true"
              type="text"
              className="textFiled__input"
            />
          </div>
          <button className="w-full btn btn--secondary">ارسال کد تایید</button>
        </form>
      </div>
    </>
  );
};

export default SendOTPForm;
