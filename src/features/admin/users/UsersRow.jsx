import { useState } from "react";
import Modal from "../../../ui/modal/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

const UsersRow = ({ item, index }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <td>{index + 1}</td>
      <td>
        <div className="min-w-[100px]">{item.name || "--"}</div>
      </td>
      <td>
        <div className="projects__table-title">{item.email || "--"}</div>
      </td>
      <td>{item.phoneNumber || "--"}</td>
      <td>{item.role || "--"}</td>
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
        <div className="flex items-center justify-center">
          <button onClick={() => setIsOpenModal(true)} className=" badge">
            تغییر وضعیت
          </button>
          <Modal
            isOpen={isOpenModal}
            onClose={setIsOpenModal}
            title={`تغییر وضعیت کاربر ${item.name}`}
            typeOfModal="changeUserStatus"
          >
            <ChangeUserStatus
              onClose={setIsOpenModal}
              projectTitle={item.name}
              userId={item._id}
            />
          </Modal>
        </div>
      </td>
    </>
  );
};

export default UsersRow;
