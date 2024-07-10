import { useAllProjects } from "../../hook/useAllProjects";
import Loading from "../../ui/Loading";
import Table from "../../ui/table/Table";
import ProjectRow from "./ProjectRow";
import { useOwnerProject } from "./useOwnerProject";

const ProjectsTable = ({ isAdmin = false }) => {
  const { isPending: isLoading, projects: projectsForOwner } = useOwnerProject();
  const { projects, isPending } = useAllProjects();
  if (isLoading || isPending) return <Loading />;
  if (!projectsForOwner?.length || !projects.length) return <p>هیچی نیست...</p>;
  let arrayToMap = isAdmin ? projects : projectsForOwner;
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
          <th>درخواست ها</th>
        </Table.Hearder>
        <Table.Body>
          {arrayToMap?.map((item, index) => {
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
