import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import RHFSelectInput from "../../ui/RHFSelectInput";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategory from "../../hook/useCategory";
import usePostProject from "./usePostProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";
const AddProjectForm = ({ setIsOpenModal, projectData = {} }) => {
  const {
    _id: editId,
    budget,
    category,
    description,
    deadline,
    title,
    tags: editedTags,
  } = projectData;
  const isEditMode = Boolean(editId);

  let editValues = {};
  if (isEditMode) {
    editValues = {
      budget,
      category: category._id,
      description,
      title,
    };
  }

  const [tags, setTags] = useState(editedTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { category: listOfCategory } = useCategory();
  const { createProjectFn, isCreatingProjrct } = usePostProject();
  const { editeProjectFun, isEditing } = useEditProject();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });

  const submitHandler = (data) => {
    const newObj = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags: tags,
    };
    if (isEditMode) {
      editeProjectFun(
        { id: editId, newProject: newObj },
        {
          onSuccess: () => setIsOpenModal(false),
        }
      );
    } else {
      createProjectFn(newObj, {
        onSuccess: () => setIsOpenModal(false),
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-8 mt-4 text-right">
        <TextField
          isFoucus={true}
          lableText="نام پروژ"
          id="title"
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
          id="description"
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
          id="budget"
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
          options={listOfCategory}
        />
        <div className=" space-y-3">
          <label className="text-secondary-800 dark:text-secondary-400">برچسب ها</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>

        <DatePickerField date={date} setDate={setDate} label="تاریخ پایان پروژه" />
        {isCreatingProjrct ? <Loading /> : <Button>ارسال</Button>}
      </form>
    </>
  );
};

export default AddProjectForm;
