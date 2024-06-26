const Modal = ({ isOpen, onClose, title, typeOfModal, children }) => {
  return (
    <>
      {isOpen && (
        <div className="w-full h-screen fixed backdrop-blur-sm bg-slate-900/50  left-0 top-0 z-50 ">
          {" "}
          <div className="w-[calc(100vw-3rem)] sm:w-[600px] max-h-[calc(100vh-3rem)] overflow-y-auto fixed top-1/2 left-1/2 p-5 rounded-lg backdrop-blur-0 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 shadow-xl transition-all duration-500">
            <div className="flex justify-between items-center border-b pb-5">
              <h1
                className={`border-r-8 font-Vazir-Bold  px-2 ${
                  typeOfModal === "DELETE" ? "border-r-red-600" : "border-r-primary-800"
                }`}
              >
                {title}
              </h1>
              <button className="badge" onClick={() => onClose(false)}>
                x
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
