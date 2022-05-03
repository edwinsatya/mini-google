import MoonLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MoonLoader color="#4285F4" loading={true} css="" size={100} />
    </div>
  );
};

export default Loading;
