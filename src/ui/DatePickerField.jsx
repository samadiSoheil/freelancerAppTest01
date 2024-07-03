import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

const DatePickerField = ({ label, date, setDate }) => {
  console.log(date);
  return (
    <div className="flex flex-col space-y-3">
      <label className="text-secondary-800 dark:text-secondary-400">{label}</label>
      <DatePicker
        containerClassName="w-full"
        inputClass="textFiled__input"
        value={date}
        onChange={(date) => setDate(date)}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
      />
    </div>
  );
};

export default DatePickerField;
