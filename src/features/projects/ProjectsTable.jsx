import Loading from "../../ui/Loading";
import Table from "../../ui/table/Table";
import ProjectRow from "./ProjectRow";
import { useOwnerProject } from "./useOwnerProject";

const ProjectsTable = () => {
  const { isPending: isLoading, projects } = useOwnerProject();
  console.log(projects);

  if (isLoading) return <Loading />;
  if (!projects?.length) return <p>هیچی نیست...</p>;
  return (
    <>
      <Table>
        <Table.Hearder>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Hearder>
        <Table.Body>
          {projects?.map((item, index) => {
            return (
              <Table.Row key={item._id}>
                <ProjectRow item={item} index={index} />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default ProjectsTable;
