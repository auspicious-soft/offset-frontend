"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface NextPaymentProps {
  date: string;
  additionalInfo: string;
}

const NextPayment: React.FC<NextPaymentProps> = ({ date, additionalInfo }) => {
  return (
    <div className=" bg-[#F9F9F9] rounded-lg flex flex-col justify-between p-5 md:p-6 h-full w-full ">
      <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-medium text-gray-800">Next payment</h3>
        <p className="text-xl lg:text-3xl 2xl:text-5xl font-semibold text-gray-900 mt-1">{date}</p>
        <p className="text-xs text-gray-500 mt-1">{additionalInfo}</p>
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