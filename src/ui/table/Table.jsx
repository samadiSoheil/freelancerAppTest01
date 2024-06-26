const Table = ({ children }) => {
  return (
    <div className="projects-container__table ">
      <table className="projects__table">{children}</table>
    </div>
  );
};

export default Table;

const Thead = ({ children }) => {
  return (
    <>
      <thead className=" bg-slate-100">
        <tr>{children}</tr>
      </thead>
    </>
  );
};

const Tbody = ({ children }) => {
  return (
    <>
      <tbody>{children}</tbody>
    </>
  );
};

const Tr = ({ children }) => {
  return (
    <>
      <tr>{children}</tr>
    </>
  );
};

Table.Hearder = Thead;
Table.Body = Tbody;
Table.Row = Tr;
