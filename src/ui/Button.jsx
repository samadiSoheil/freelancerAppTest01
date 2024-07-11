function Button({ children, isDisable = false }) {
  return (
    <>
      <button
        disabled={isDisable}
        className={`w-full btn btn--primery ${isDisable ? "opacity-50" : ""}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
