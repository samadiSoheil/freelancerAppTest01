import SendOTPForm from "../features/auth/SendOTPForm";

const Auth = () => {
  return (
    <>
      <div className="container w-full xl:max-w-xl h-screen flex flex-col justify-center items-center ba">
        <SendOTPForm />
      </div>
    </>
  );
};

export default Auth;
