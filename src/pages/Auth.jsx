import AuthContainer from "../features/auth/AuthContainer";

const Auth = () => {
  return (
    <>
      <div className="container w-full xl:max-w-xl h-screen flex flex-col justify-center items-center ba">
        <AuthContainer />
      </div>
    </>
  );
};

export default Auth;
