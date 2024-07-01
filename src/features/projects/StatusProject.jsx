import useToggleprojectStatus from "./useToggleprojectStatus";
import Loading from "../../ui/Loading";
import SwitchToggle from "../../ui/SwitchToggle";

const StatusProject = ({ project }) => {
  let isOpen = project.status == "OPEN";

  const { isToggleStatus, toggleProgectStatusFun } = useToggleprojectStatus();

  const toggleHandler = () => {
    const statusValue = project.status == "OPEN" ? "CLOSED" : "OPEN";
    toggleProgectStatusFun({ id: project._id, toggeledProject: { status: statusValue } });
  };

  return (
    <div className="w-[175px] h-[28] flex justify-center items-center gap-2">
      {isToggleStatus ? (
        <Loading height="28" width="40" />
      ) : (
        <SwitchToggle
          label={isOpen ? "باز" : "بسته"}
          onChange={toggleHandler}
          enabled={isOpen}
        />
      )}
    </div>
  );
};

export default StatusProject;
