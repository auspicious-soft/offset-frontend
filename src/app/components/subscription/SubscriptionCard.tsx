"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

interface SubscriptionCardProps {
  planPrice: string;
  planFrequency: string;
  status: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  planPrice,
  planFrequency,
  status,
}) => {
  return (
    // <div className="bg-[#E5223A] text-white rounded-lg p-5 h-full md:p-6 w-full ">
    <div className="bg-[url('/images/redFrameDots.png')] bg-no-repeat bg-cover text-white rounded-lg p-5 h-full md:p-6 w-full ">
      <div className="space-y-5 md:space-y-6">
        <div className="flex flex-col space-y-1">
          <p className="text-xs md:text-sm px-2 py-0.5 bg-white/20 rounded-full w-fit">Current subscription</p>
          <div className="flex items-baseline space-x-2 font-medium 2xl:text-3xl xl:text-2xl mdxl:text-xl text-xl">
            <span className=" ">Premium ($9.99/month)</span>
            <Image src="/greenDot.svg" alt="Dropdown Arrow" width={10} height={10} className="" />
            <span className="text-[#B6FA81]">Active</span>
          </div>
          <p className="2xl:text-xl lg:text-lg text-md mt-[24px] ">Your subscription is about to expire!</p>
          <Progress value={60} color="white" className="w-[100%] h-[12px] bg-white/20  text-white my-[10px]" />
          <p className="2xl:text-lg lg:text-md text-sm  ">Using 27 days from 30 days included</p>
        </div>
        
        <div className="grid grid-cols-1 md:col-span-2 gap-4">
          <Button variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white hover:border-white/50 transition-all py-[23px]">
            Cancel subscription
          </Button>
          <Button variant="outline" size="sm" className="bg-white text-[#303030] hover:bg-white/90 hover:text-[#303030] border-transparent transition-all py-[23px]">
            Change subscription
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;