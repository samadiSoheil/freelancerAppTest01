import { useState } from "react";
import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  return (
    <>
      <div className="w-full">
        <form className="space-y-5">
          <TextField
            id="phoneNumber"
            lableText="شماره موبایل"
            elemValue={phoneNumber}
            setElemVaulue={setPhoneNumber}
          />
          <Button>ارسال کد تایید</Button>
        </form>
      </div>
    </>
  );
};

export default SendOTPForm;
