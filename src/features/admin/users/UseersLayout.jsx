import BackPageBtn from "../../../ui/AppLauout/BackPageBtn";
import HeaderOfComponent from "../../../ui/AppLauout/HeaderOfComponent";
import UsersTable from "./UsersTable";

const UseersLayout = () => {
  return (
    <>
      <div className="container">
        <HeaderOfComponent title="لیست کاربران">
          <BackPageBtn />
        </HeaderOfComponent>
        <UsersTable />
      </div>
    </>
  );
};
export default UseersLayout;
