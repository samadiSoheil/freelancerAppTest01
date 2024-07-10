import BackPageBtn from "../../../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../../../ui/AppLauout/HeaderOfComponent";
import UsersTable from "./UsersTable";

const UseersLayout = () => {
  return (
    <>
      <HeaderOfComponent title="لیست کاربران">
        <BackPageBtn />
      </HeaderOfComponent>
      <UsersTable />
    </>
  );
};
export default UseersLayout;
