import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const OTP_EXPIRE_TIME = 20;

const CheckOTPForm = ({
  phoneNumber,
  stateNumber,
  getOtpHandler,
  isPending: isLoadingSendOtp,
  sendOtpMessage,
}) => {
  const [timer, setTimer] = useState(OTP_EXPIRE_TIME);
  const navigateUser = useNavigate();
  const [otp, setOtp] = useState(null);
  const [isDisabled, setIsDisables] = useState(false);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber: phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        // todo push users to their pages [user,owner,freelancer]
      } else {
        // todo push user to complete profile page
        navigateUser("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const intervalId =
      timer > 0 &&
      setInterval(() => {
        setTimer((prevt) => prevt - 1);
      }, 1000);
    if (!intervalId) {
      setIsDisables(true);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timer]);

  const reSendOtpHandler = (e) => {
    getOtpHandler(e);
    setTimer(OTP_EXPIRE_TIME);
    setIsDisables(false);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between font-Vazir-Bold text-secondary-800 mb-8">
          <button
            className="border border-gray-500 size-10 flex justify-center items-center rounded-xl"
            onClick={() => stateNumber(1)}
          >
            <FaLongArrowAltRight className="size-6 text-gray-500" />
          </button>
          <p>کد تایید را وارد کنید</p>
          {timer ? (
            <div className={timer ? "text-primary-900" : "text-red-400"}>{`00:${timer
              .toString()
              .padStart("2", "0")}`}</div>
          ) : (
            <button onClick={reSendOtpHandler}>ارسال مجدد</button>
          )}
        </div>
        <form className="w-full space-y-8" onSubmit={checkOtpHandler}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="flex flex-row-reverse gap-x-2 justify-between"
            inputStyle={{
              width: "3rem",
              height: "3rem",
              padding: "0.5rem 0.2 rem",
              border: "1px solid #b7c5ff",
              borderRadius: "0.5rem",
            }}
            shouldAutoFocus={true}
          />
          {isPending || isLoadingSendOtp ? (
            <Loading />
          ) : (
            <button
              disabled={isDisabled}
              className="btn btn--primery w-full disabled:cursor-not-allowed disabled:bg-primary-300"
            >
              تایید
            </button>
          )}
        </form>
        <p className="flex justify-center items-center text-center text-secondary-400/70 mt-8">
          {/* کد به شماره {phoneNumber} ارسال شده &nbsp; */}
          {sendOtpMessage?.message}&nbsp;
          <span
            onClick={() => stateNumber(1)}
            className="flex items-center text-primary-600 cursor-pointer"
          >
            ویرایش
            <MdEdit className="size-5" />
          </span>
        </p>
      </div>
    </>
  );
};

export default CheckOTPForm;
