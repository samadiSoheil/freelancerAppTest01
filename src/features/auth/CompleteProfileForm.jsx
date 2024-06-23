import { useState } from "react";
import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

const CompleteProfileForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const navigateUser = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({
        name: userName,
        email: userEmail,
        role: userRole,
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
        <form className="space-y-8" onSubmit={submitHandler}>
          <TextField
            isFoucus={true}
            lableText="نام و نام خانوادگی"
            elemValue={userName}
            setElemVaulue={setUserName}
            id="userNameInput"
          />
          <TextField
            lableText="ایمیل"
            id="userEmailInput"
            elemValue={userEmail}
            setElemVaulue={setUserEmail}
            elementType="email"
          />
          <div className="flex justify-center items-center gap-x-12 ">
            <div className="flex items-center gap-2">
              <input
                className="form-radio cursor-pointe text-primary-900 focus:ring-primary-900"
                type="radio"
                id="OWNER"
                name="rule"
                value="OWNER"
                onChange={(e) => setUserRole(e.target.value)}
              />
              <label htmlFor="OWNER" className="cursor-pointer">
                کارفرما
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="form-radio cursor-pointer text-primary-900 focus:ring-primary-900"
                type="radio"
                id="FREELANCER"
                name="rule"
                value="FREELANCER"
                onChange={(e) => setUserRole(e.target.value)}
              />
              <label htmlFor="FREELANCER" className="cursor-pointer">
                فریلنسر
              </label>
            </div>
          </div>
          {isPending ? <Loading /> : <Button>ارسال</Button>}
        </form>
      </div>
    </>
  );
};

export default CompleteProfileForm;
