import { useUser } from "../../features/auth/useUser";

const Header = () => {
  const { data } = useUser();
  console.log(data);
  if (!data) return null;
  return (
    <>
      <div className="grid justify-stretch items-stretch p-2 bg-slate-500">
        <div className=" row-span-2  bg-red-300">
          <span>{data.user.name}</span> &nbsp;&nbsp;
          <span>{data.user.email}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
