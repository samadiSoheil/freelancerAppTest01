import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import RHFSelectInput from "../../ui/RHFSelectInput";
const AddProjectForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-8 mt-4">
        <TextField
          isFoucus={true}
          lableText="نام پروژ"
          id="projectName"
          register={register}
          required
          errors={errors}
          errorValidation={{
            required: "این فیلد اجباری است.",
            minLength: {
              value: 7,
              message: "متن عنوان حداقل باید 7 کاراکتر باشد",
            },
            maxLength: {
              value: 50,
              message: "متن عنوان زیادی طولانی است اطلاعات اضافه را در توضیحات بنویسید.",
            },
          }}
        />
        <TextField
          lableText="توضیحات"
          id="projectDescription"
          register={register}
          required
          errors={errors}
          errorValidation={{
            required: {
              value: true,
              message: "این فیلد اجباری است.",
            },
          }}
        />
        <TextField
          lableText="میزان بودجه"
          id="buget"
          elementType="number"
          register={register}
          required
          errors={errors}
          errorValidation={{
            required: {
              value: true,
              message: "این فیلد اجباری است.",
            },
            minLength: {
              value: 5,
              message: "بودجه شما کافی نیست",
            },
            maxLength: {
              value: 13,
              message: "بودجه شما بیش از اندازه است",
            },
          }}
        />
        <RHFSelectInput
          id="category"
          label="دسته بندی"
          rejester={register}
          required
          errors={errors}
          // options={[
          // { label: "dwwdw", value: "dwwdw" },
          // { label: "scfswf", value: "scfswf" },
          // ]}
          options={[]}
        />

        <Button>ارسال</Button>
      </form>
    </>
  );
};

export default AddProjectForm;
