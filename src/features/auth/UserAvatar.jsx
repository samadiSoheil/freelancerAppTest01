import { useUser } from "./useUser";

const UserAvatar = () => {
  const {
    data: { user },
  } = useUser();
  console.log(user);

  return (
    <div className="hidden lg:flex justify-center items-center gap-2">
      <img className="size-10 rounded-full" src="/user.jpg" alt={user?.name} />
      <span className="font-Vazir-Medium">{user?.name}</span>
    </div>
  );
};

export default UserAvatar;
