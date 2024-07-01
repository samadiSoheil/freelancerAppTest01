import { ThreeDots } from "react-loader-spinner";

const Loading = ({ height = "80", width = "80" }) => {
  return (
    <>
      <ThreeDots
        height={height}
        width={width}
        color="#4d70ff"
        radius="9"
        wrapperStyle={{ display: "flex", justifyContent: "center" }}
      />
    </>
  );
};

export default Loading;
