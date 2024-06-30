import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInput from "../../ui/RadioInput";

const CompleteProfileForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigateUser = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const submitHandler = async ({ rule, userEmailInput, userNameInput }) => {
    try {
      const { user, message } = await mutateAsync({
        name: userNameInput,
        email: userEmailInput,
        role: rule,
      });
      toast.success(message);
      console.log(user);
      if (user.status == 2) {
        if (user.role === "OWNER") return navigateUser("/owner");
        if (user.role === "FREELANCER") return navigateUser("/freelancer");
      } else {
        navigateUser("/");
        toast((t) => {
          return (
            <span>
              پروفایل شما در <b>لیست تایید توسط ادمین</b> قرار گرفت تا تایید پروفایلتان
              شکیبا باشید.
              <button
                className="w-full bg-secondary-800 text-secondary-0 py-3 mt-4"
                onClick={() => toast.dismiss(t.id)}
              >
                متوجه شدم
              </button>
            </span>
          );
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      <div className="w-full">
        <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
          <TextField
            id="userNameInput"
            isFoucus={true}
            lableText="نام و نام خانوادگی"
            register={register}
            errorValidation={{
              required: "این فیلد اجباری است.",
            }}
            errors={errors}
          />
          <TextField
            lableText="ایمیل"
            id="userEmailInput"
            register={register}
            errorValidation={{
              required: "این فیلد اجباری است.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "ایمیل نا معتبر است.",
              },
            }}
            errors={errors}
            elementType="email"
          />
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-3 ">
            <RadioInput
              data={[
                {
                  id: 1,
                  name: "rule",
                  rule: "OWNER",
                  lableInput: " کارفرما",
                },
                {
                  id: 2,
                  name: "rule",
                  rule: "FREELANCER",
                  lableInput: "فریلنسر",
                },
              ]}
              register={register}
              errors={errors}
            />
          </div>
          {isPending ? <Loading /> : <Button>ارسال</Button>}
        </form>
      </div>
    </>
  );
};

export default CompleteProfileForm;
