import { useState } from "react";
import Modal from "../../ui/modal/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const ProposalsRow = ({ item, index, projectTitle }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <td>{index + 1}</td>
      <td>
        <div className="min-w-[100px]">{item.user?.name || "--"}</div>
      </td>
      <td>
        <div className="projects__table-title">{item.description}</div>
      </td>
      <td>{item.duration}</td>
      <td>{item.price}</td>
      <td>
        <span
          className={`badge ${
            item.status ? (item.status == 1 ? "badge" : "badge--green") : "badge--red"
          }`}
        >
          {item.status ? (item.status == 1 ? "در انتظار تایید" : "تایید شده") : "رد شده"}
        </span>
      </td>
      <td>
        <button onClick={() => setIsOpenModal(true)} className="badge">
          تعیین وضعیت درخواست
        </button>
        <Modal
          isOpen={isOpenModal}
          onClose={setIsOpenModal}
          title={`تعیین وضعیت درخواست ${item.user?.name}`}
          typeOfModal="حقختثزف-سفشفثس"
        >
          <ChangeProposalStatus
            onClose={setIsOpenModal}
            projectTitle={projectTitle}
            proposalId={item._id}
          />
        </Modal>
      </td>
    </>
  );
};

export default ProposalsRow;
