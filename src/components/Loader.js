import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="text-center h-16 min-h-full flex justify-center items-center w-full">
        <BounceLoader color={"gray"} />
    </div>
  );
};

export default Loader;
