import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
const ViewAllCard = () => {
  return (
    // <div className="flex items-center justify-center">
    <div className="flex items-center text-[#333333]/85 justify-center h-[18.665em] w-[14em] flex-col border-gray-200 border-[1px] hover:shadow-custom transition cursor-pointer duration-500 hover:border-[#FF0204] hover:text-[#FF0204] hover:scale-105">
      <ArrowSmRightIcon className="h-12 w-12 mb-1" />
      <h4 className="text-xl font-medium hover:">VIEW ALL</h4>
    </div>
    // </div>
  );
};

export default ViewAllCard;
