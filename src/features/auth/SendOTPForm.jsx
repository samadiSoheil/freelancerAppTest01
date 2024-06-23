import { useState } from "react";
import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";

const SendOTPForm = ({ setPhoneNumber, phoneNumber, isPending, getOtpHandler }) => {
  return (
    <>
      <div className="w-full">
        <form onSubmit={getOtpHandler} className="space-y-5">
          <TextField
            id="phoneNumber"
            lableText="شماره موبایل"
            elemValue={phoneNumber}
            setElemVaulue={setPhoneNumber}
            isFoucus={true}
          />
          {isPending ? <Loading /> : <Button>ارسال کد تایید</Button>}
        </form>
      </div>
    </>
  );
};

export default SendOTPForm;
