import { Link } from "react-router-dom";
import "./App.css";
import Button from "./ui/Button";
import { useUser } from "./features/auth/useUser";
import Loading from "./ui/Loading";

function App() {
  const { data, isPending } = useUser();
  if (isPending) return <Loading />;
  let userRole = data?.user?.role.toLowerCase();

  return (
    <>
      <div className="container w-full sm:w-[400px] h-screen flex flex-col justify-center items-center gap-4 ">
        <div className="w-full flex flex-col justify-center gap-4 ">
          <Link to="/auth" className="w-ful flex-grow">
            <Button isDisable={userRole}>ثبت نام</Button>
          </Link>
          <Link to={`/${userRole}`} className="w-ful flex-grow">
            <Button isDisable={!userRole}>ورود</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
