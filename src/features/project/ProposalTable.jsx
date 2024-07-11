import EptyIllustration from "../../ui/EptyIllustration";
import Table from "../../ui/table/Table";
import ProposalsRow from "./ProposalsRow";

const ProposalTable = ({ project }) => {
  const { proposals } = project;
  if (!proposals.length) return <EptyIllustration />;
  return (
    <>
      <Table>
        <Table.Hearder>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Hearder>
        <Table.Body>
          {proposals?.map((item, index) => {
            return (
              <Table.Row key={item._id}>
                <ProposalsRow item={item} index={index} projectTitle={project.title} />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default ProposalTable;
