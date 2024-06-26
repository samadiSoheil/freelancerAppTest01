const ConfirmDelete = ({ title, onClose, deleteFunk }) => {
  return (
    <div className="pt-4">
      <div className="flex flex-col items-start gap-3 text-secondary-800 text-right">
        <h1 className="font-Vazir-Bold ">{title}</h1>
        <p>درصورت حذف پروژه قابل بازیابی مجدد نمی باشد.</p>
      </div>
      <div className="flex justify-between items-center gap-5 mt-5">
        <button
          className="btn btn--primery w-full font-Vazir-Bold"
          onClick={() => onClose(false)}
        >
          خیر
        </button>
        <button
          onClick={deleteFunk}
          className="btn btn--secondary__outline w-full font-Vazir-Bold"
        >
          بله
        </button>
      </div>
    </div>
  );
};
export default ConfirmDelete;
