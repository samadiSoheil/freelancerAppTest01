import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

const AuthContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState(1);

  //

  const {
    isPending,
    data: sendOtpMessage,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const getOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await mutateAsync({ phoneNumber });
      toast.success(result.message);
      setState(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  //

  switch (state) {
    case 1:
      return (
        <SendOTPForm
          isPending={isPending}
          getOtpHandler={getOtpHandler}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
        />
      );
    case 2:
      return (
        <CheckOTPForm
          sendOtpMessage={sendOtpMessage}
          isPending={isPending}
          getOtpHandler={getOtpHandler}
          phoneNumber={phoneNumber}
          stateNumber={setState}
        />
      );
    default:
      return new Error("something is wrong...");
  }
};

export default AuthContainer;
