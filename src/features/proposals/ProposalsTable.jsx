import Table from "../../ui/table/Table";

import { useProposals } from "./useProposals";
import ProposalsRow from "./ProposalRow";
import Loading from "../../ui/Loading";
import EptyIllustration from "../../ui/EptyIllustration";

const ProposalsTable = () => {
  const { proposals, isPending } = useProposals();
  if (isPending) return <Loading />;
  if (!proposals.length) return <EptyIllustration />;

  return (
    <>
      <Table>
        <Table.Hearder>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
        </Table.Hearder>
        <Table.Body>
          {proposals?.map((item, index) => {
            return (
              <Table.Row key={item._id}>
                <ProposalsRow item={item} index={index} />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};
export default ProposalsTable;
