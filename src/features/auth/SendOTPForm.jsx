import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";

const SendOTPForm = ({ register, isPending, getOtpHandler, errors }) => {
  return (
    <>
      <div className="w-full  dark:bg-secondary-800">
        <form onSubmit={getOtpHandler} className="space-y-5">
          <TextField
            id="phoneNumber"
            lableText="شماره موبایل"
            isFoucus={true}
            register={register}
            required
            errors={errors}
            errorValidation={{
              required: "این فیلد اجباری است.",
              minLength: {
                value: 11,
                message: "شماره حداقل باید 11 کاراکتر باشد",
              },
              maxLength: {
                value: 11,
                message: "شماره حداکثر باید 11 کاراکتر باشد",
              },
            }}
          />
          {isPending ? <Loading /> : <Button>ارسال کد تایید</Button>}
        </form>
      </div>
    </>
  );
};

export default SendOTPForm;
