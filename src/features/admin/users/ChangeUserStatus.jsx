import { useForm } from "react-hook-form";
import { useChangeUserStatus } from "./useChangeUserStatus";
import RHFSelectInput from "../../../ui/RHFSelectInput";
import Loading from "../../../ui/Loading";
import Button from "../../../ui/Button";

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

const ChangeUserStatus = ({ projectTitle, onClose, userId }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { changeUserStatusFu, isChangeUserStatus } = useChangeUserStatus();

  const submitHandler = (data) => {
    console.log(data, userId);
    changeUserStatusFu(
      { id: userId, data },
      {
        onSuccess: () => {
          onClose(false);
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
          label={`تغییر وضعیت   ${projectTitle}`}
          options={projectStatus}
          rejester={register}
        />
        {isChangeUserStatus ? <Loading /> : <Button>تایید</Button>}
      </form>
    </>
  );
};

export default ChangeUserStatus;
