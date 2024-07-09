import Loading from "../../../ui/Loading";
import Table from "../../../ui/table/Table";
import { useAllUsers } from "../useAllUsers";
import UsersRow from "./UsersRow";

const UsersTable = () => {
  const { isPending, users } = useAllUsers();
  if (isPending) return <Loading />;
  if (!users.length) return <p>درخواستی وجود ندارد...</p>;
  return (
    <>
      <Table>
        <Table.Hearder>
          <th>#</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>شماره موبایل</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Hearder>
        <Table.Body>
          {users?.map((item, index) => {
            return (
              <Table.Row key={item._id}>
                <UsersRow item={item} index={index} />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};
export default UsersTable;
