import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const AuthContainer = () => {
  const [state, setState] = useState(1);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  //

  const {
    isPending,
    data: sendOtpMessage,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const getOtpHandler = async ({ phoneNumber }) => {
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
          register={register}
          getOtpHandler={handleSubmit(getOtpHandler)}
          errors={errors}
        />
      );
    case 2:
      return (
        <CheckOTPForm
          sendOtpMessage={sendOtpMessage}
          isPending={isPending}
          getOtpHandler={handleSubmit(getOtpHandler)}
          phoneNumber={watch("phoneNumber")}
          stateNumber={setState}
        />
      );
    default:
      return new Error("something is wrong...");
  }
};

export default AuthContainer;
