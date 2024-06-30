import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import RHFSelectInput from "../../ui/RHFSelectInput";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
const AddProjectForm = () => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    console.log(tags);
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
          options={[]}
        />
        <div className="space-y-3">
          <label>برچسب ها</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>

        <DatePickerField date={date} setDate={setDate} label="تاریخ پایان پروژه" />
        <Button>ارسال</Button>
      </form>
    </>
  );
};

export default AddProjectForm;
