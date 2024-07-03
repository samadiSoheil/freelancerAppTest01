import { FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import Modal from "../../ui/modal/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/modal/ConfirmDelete";
import { useDeleteProject } from "./useDeleteProject";
import AddProjectForm from "./AddProjectForm";
import StatusProject from "./StatusProject";
import { Link } from "react-router-dom";

const ProjectRow = ({ item, index }) => {
  const [isOpenDeleteMidal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditMidal, setIsOpenEditeModal] = useState(false);
  const { deleteProject } = useDeleteProject();

  return (
    <>
      <td>{index + 1}</td>
      <td className="">
        <div className="projects__table-title">{item.title}</div>
      </td>
      <td>
        <div className="min-w-[100px]">{item.category?.title || "--"}</div>
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
      <td className="flex justify-center">{<StatusProject project={item} />}</td>
      <td>
        <div className="flex justify-center gap-4">
          {/* delete modal */}
          <>
            <button
              onClick={() => setIsOpenDeleteModal(true)}
              className="badge hover:bg-secondary-300"
            >
              <FaRegTrashAlt className="size-4 text-red-500 dark:text-red-400" />
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
                deleteFunk={() =>
                  deleteProject(item._id, {
                    onSuccess: () => setIsOpenDeleteModal(false),
                  })
                }
              />
            </Modal>
          </>

          {/* edit modal */}
          <>
            <button
              onClick={() => setIsOpenEditeModal(true)}
              className="badge hover:bg-secondary-300"
            >
              <MdEdit className="size-4 text-primary-900 dark:text-primary-500" />
            </button>
            <Modal
              isOpen={isOpenEditMidal}
              onClose={setIsOpenEditeModal}
              title={` ویرایش پروژه ی ${item.title}`}
              typeOfModal="Edit"
            >
              <AddProjectForm projectData={item} setIsOpenModal={setIsOpenEditeModal} />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={item._id} className="flex justify-center items-center gap-2">
          <FaEye className="size-5 text-primary-800 dark:text-primary-700" />
          <span>مشاهده</span>
        </Link>
      </td>
    </>
  );
};

export default ProjectRow;
