"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";


const Page = () => {

 return (
  <>
<div className=" bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">

  <Headers />
  <div className="container mt-[50px] border border-amber-500">


  <div className=" flex flex-row items-center gap-2 flex-wrap">
  <div className="text-[#727272] text-md 2xl:text-xl font-medium">Home</div>
  <div className="w-px h-3 sm:h-6 bg-[#E5223A]"></div>
  <div className="text-[#E5223A] text-md 2xl:text-xl font-medium">Account Settings</div>
  </div>


  <div className="mt-[63px] justify-start text-gray-800 text-2xl 2xl:text-5xl font-medium ">Account Settings:</div>

   </div>
</div>
   <Footers />
  </>
 );
};

export default Page;

