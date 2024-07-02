import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import RHFSelectInput from "../../ui/RHFSelectInput";
import useProposalStatus from "./useProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

const projectStatus = [
  {
    label: "رد شد",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شد",
    value: 2,
  },
];

const ChangeProposalStatus = ({ projectTitle, proposalId, onClose }) => {
  const params = useParams();
  console.log(params);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { changingProposalStatusFun, isChangeStatus } = useProposalStatus();
  const queryClient = useQueryClient();
  const submitHandler = (data) => {
    console.log(data, proposalId);
    changingProposalStatusFun(
      { id: proposalId, data: data },
      {
        onSuccess: () => {
          onClose(false);
          queryClient.invalidateQueries({
            queryKey: ["project", params.id],
          });
        },
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-8 mt-4 text-right">
        <RHFSelectInput
          required
          errors={errors}
          id="status"
          label={`وضعیت پروژه ی  ${projectTitle}`}
          options={projectStatus}
          rejester={register}
        />
        {isChangeStatus ? <Loading /> : <Button>تایید</Button>}
      </form>
    </>
  );
};

export default ChangeProposalStatus;
