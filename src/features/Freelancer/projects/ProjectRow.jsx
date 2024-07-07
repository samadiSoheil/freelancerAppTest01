import { useState } from "react";
import Modal from "../../../ui/modal/Modal";
import CreateProposalForm from "./CreateProposalForm";

const ProjectRow = ({ item, index }) => {
  const [isOpennModal, setIsOpenModal] = useState(false);
  return (
    <>
      <td>{index + 1}</td>
      <td className="">
        <div className="projects__table-title">{item.title}</div>
      </td>
      <td>{item.budget.toLocaleString("fa")}</td>
      <td>{new Date(item.deadline).toLocaleDateString("fa-ir")}</td>
      <td>
        <span
          className={`badge 
            ${
              item.status === "OPEN"
                ? "badge--green"
                : item.status === "CLOSED"
                ? "badge--red"
                : "badge"
            }`}
        >
          {item.status === "OPEN"
            ? "باز"
            : item.status === "CLOSED"
            ? "بسته"
            : "در انتظار تایید"}
        </span>
      </td>
      <td className="flex justify-center items-center">
        <button onClick={() => setIsOpenModal(true)} className="badge">
          ارسال درخواست
        </button>
      </td>
      <Modal
        isOpen={isOpennModal}
        onClose={setIsOpenModal}
        title={`درخواست همکاری برای  ${item.title}`}
        typeOfModal="sendProposals"
      >
        <CreateProposalForm projectId={item._id} onClose={setIsOpenModal} />
      </Modal>
    </>
  );
};

export default ProjectRow;
