import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import Loading from "../../../ui/Loading";
import TextField from "../../../ui/TextFIeld";
import useCreateProposal from "./useCreateProposal";

const CreateProposalForm = ({ projectId, onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { isSendingProposal, sendProposalFn } = useCreateProposal();

  const submitHandler = async (data) => {
    console.log(data);
    sendProposalFn(
      { ...data, projectId },
      {
        onSuccess: () => onClose(false),
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-8 mt-4 text-right">
      <TextField
        id="description"
        isFoucus={true}
        lableText="توضیحات"
        register={register}
        errorValidation={{
          required: "توضیحات ضروری است.",
        }}
        errors={errors}
      />
      <TextField
        id="price"
        lableText="قیمت"
        register={register}
        errorValidation={{
          required: "قیمت ضروری است.",
        }}
        errors={errors}
        elementType="number"
      />
      <TextField
        id="duration"
        isFoucus={true}
        lableText="مدت زمان"
        register={register}
        errorValidation={{
          required: "مدت زمان ضروری است.",
        }}
        errors={errors}
        elementType="number"
      />

      {isSendingProposal ? <Loading /> : <Button>ارسال</Button>}
    </form>
  );
};

export default CreateProposalForm;
