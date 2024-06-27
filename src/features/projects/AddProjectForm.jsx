import TextField from "../../ui/TextFIeld";
import Button from "../../ui/Button";

const AddProjectForm = () => {
  return (
    <>
      <form className="space-y-8 mt-4">
        <TextField isFoucus={true} lableText="نام پروژ" id="project-name" />
        <TextField lableText="نام پروژ" id="project-name" />
        <Button>ارسال</Button>
      </form>
    </>
  );
};

export default AddProjectForm;
