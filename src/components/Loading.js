import logo from "../assets/BPGSuryabakti.png";
const Loading = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 right-0 z-50 flex justify-center items-center bg-secondary/70 backdrop-blur-md">
      <div className="">
        <img
          src={logo}
          alt=""
          className="w-2/5 mx-auto animate-bounce  animate-infinite"
        />
      </div>
    </div>
  );
};

export default Loading;
