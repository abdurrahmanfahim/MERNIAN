import React from "react";

const EXP = () => {
  return (
    <div className="text-xs">
      <div className="flex gap-[46px] ">
        <span className=" capitalize">Next</span>

        <span className="uppercase ">35 EXP</span>
      </div>
      <div className="bg-[#4E4AC8] w-full h-[3px] relative rounded-full ">
        <div className=" absolute h-full w-[75%] bg-secondary rounded-full ">
        </div>
      </div>
    </div>
  );
};

export default EXP;
