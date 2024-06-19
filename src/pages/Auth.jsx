import CheckOTPForm from "../features/auth/CheckOTPForm";
import SendOTPForm from "../features/auth/SendOTPForm";

const Auth = () => {
  return (
    <>
      <div className="container w-full xl:max-w-xl h-screen flex flex-col justify-center items-center ba">
        {/* <SendOTPForm /> */}
        <CheckOTPForm />
      </div>
    </>
  );
};

export default Auth;
