import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="text-center">
        <BounceLoader color={"gray"} />
    </div>
  );
};

export default Loader;
