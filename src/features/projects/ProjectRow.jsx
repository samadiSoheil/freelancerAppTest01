import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Modal from "../../ui/modal/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/modal/ConfirmDelete";

const ProjectRow = ({ item, index }) => {
  const [isOpenDeleteMidal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditMidal, setIsOpenEditeModal] = useState(false);

  return (
    <>
      <td>{index + 1}</td>
      <td className="">
        <div className="projects__table-title">{item.title}</div>
      </td>
      <td>
        <div className="projects__table-title">{item.category || "--"}</div>
      </td>
      <td>{item.budget.toLocaleString("fa")}</td>
      <td>{new Date(item.deadline).toLocaleDateString("fa-ir")}</td>
      <td>
        <div className="flex max-w-[300px] flex-wrap gap-2">
          {item.tags.map((item) => {
            return (
              <span key={item} className="badge">
                {item}
              </span>
            );
          })}
        </div>
      </td>
      <td>{item.freelancer ? item.freelancer : "---"}</td>
      <td>
        {item.status == "OPEN" ? (
          <span className="badge badge--green">باز</span>
        ) : (
          <span className="badge badge--red">بسته</span>
        )}
      </td>
      <td>
        <div className="flex justify-center gap-4">
          {/* delete modal */}
          <>
            <button
              onClick={() => setIsOpenDeleteModal(true)}
              className="badge hover:bg-secondary-300"
            >
              <FaRegTrashAlt className="size-4 text-red-500" />
            </button>
            <Modal
              isOpen={isOpenDeleteMidal}
              onClose={setIsOpenDeleteModal}
              title={` حذف پروژه ی ${item.title}`}
              typeOfModal="DELETE"
            >
              <ConfirmDelete
                title={` آیا از حذف پروژه ی ${item.title} مطمِن هستید؟`}
                onClose={setIsOpenDeleteModal}
              />
            </Modal>
          </>

          {/* edit modal */}
          <>
            <button
              onClick={() => setIsOpenEditeModal(true)}
              className="badge hover:bg-secondary-300"
            >
              <MdEdit className="size-4 text-primary-900" />
            </button>
            <Modal
              isOpen={isOpenEditMidal}
              onClose={setIsOpenEditeModal}
              title={` ویرایش پروژه ی ${item.title}`}
              typeOfModal="Edit"
            >
              <h1>this is a edit Modal</h1>
            </Modal>
          </>
        </div>
      </td>
    </>
  );
};

export default ProjectRow;