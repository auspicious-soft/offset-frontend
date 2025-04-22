"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface NextPaymentProps {
  date: string;
  additionalInfo: string;
}

const NextPayment: React.FC<NextPaymentProps> = ({ date, additionalInfo }) => {
  return (
    <div className=" bg-[#F9F9F9] rounded-3xl flex flex-col justify-between p-5 md:p-6 h-full w-full ">
      <div className="mb-4 md:mb-0">
        <h3 className="text-md lg:text-xl 2xl:text-3xl font-medium  text-gray-800">Next payment</h3>
        <p className="text-xl lg:text-3xl 2xl:text-5xl font-semibold mt-[20px] text-gray-900 ">{date}</p>
        <p className="text-sm lg:text-md 2xl:text-xl text-gray-500 mt-1">{additionalInfo}</p>
      </div>
      <div className="">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-white px-10 py-6 hover:text-white cursor-pointer bg-[#E5223A] hover:bg-[#E5223A]"
        >
          Modify Plan
        </Button>
      </div>
    </div>
  );
};

export default NextPayment;