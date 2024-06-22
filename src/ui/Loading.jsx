import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <ThreeDots
        height="80"
        width="80"
        color="#4d70ff"
        radius="9"
        wrapperStyle={{ display: "flex", justifyContent: "center" }}
      />
    </>
  );
};

export default Loading;
