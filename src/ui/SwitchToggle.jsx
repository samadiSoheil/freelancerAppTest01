import { Switch } from "@headlessui/react";
const SwitchToggle = ({ enabled, label, onChange }) => {
  return (
    <div className="w-[100px] flex justify-between items-center gap-2">
      <p>{label}</p>
      <Switch
        checked={enabled}
        onChange={onChange}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-950/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary-800"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:-translate-x-7"
        />
      </Switch>
    </div>
  );
};
export default SwitchToggle;
