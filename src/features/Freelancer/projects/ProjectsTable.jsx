import { useAllProjects } from "../../../hook/useAllProjects";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/table/Table";
import ProjectRow from "./ProjectRow";

const ProjectsTable = () => {
  const { projects, isPending } = useAllProjects();
  if (isPending) return <Loading />;
  return (
    <>
      <Table>
        <Table.Hearder>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>

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
