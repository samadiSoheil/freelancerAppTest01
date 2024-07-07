const ProposalsRow = ({ item, index }) => {
  return (
    <>
      <td>{index + 1}</td>
      <td>
        <div className="min-w-[100px]">{item.description || "--"}</div>
      </td>
      <td>
        <div className="projects__table-title">{item.duration + " " + "روز"}</div>
      </td>
      <td>{item.price.toLocaleString("fa-ir")}</td>
      <td>
        <span
          className={`badge ${
            item.status ? (item.status == 1 ? "badge" : "badge--green") : "badge--red"
          }`}
        >
          {item.status ? (item.status == 1 ? "در انتظار تایید" : "تایید شده") : "رد شده"}
        </span>
      </td>
    </>
  );
};

export default ProposalsRow;
