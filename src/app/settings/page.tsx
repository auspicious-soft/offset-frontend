"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import { Pencil } from "lucide-react";

const Page = () => {
 return (
  <>
   <div className=" bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
    <Headers />
    <div className="container mt-[50px] ">
     <div className="mt-[50px] flex flex-row items-center gap-2 flex-wrap">
      <div className="text-[#727272]  text-md 2xl:text-xl font-medium">Home</div>
      <div className="w-px h-3 sm:h-6 bg-[#E5223A]"></div>
      <div className="text-[#E5223A] text-md 2xl:text-xl font-medium">Account Settings</div>
     </div>

  <div className="mt-[63px] justify-start text-gray-800 text-3xl 2xl:text-5xl font-medium ">Account Settings:</div>


{/* first  */}

<div className="self-stretch flex flex-col md:flex-row justify-between items-center mt-[55px] px-[50px] py-[39px] bg-stone-50 rounded-3xl overflow-hidden">
  <div className="flex flex-col sm:flex-row gap-[30px] items-center sm:items-start">
    <div>
      <Image
        src="/images/gg.png"
        alt="User"
        height={151}
        width={151}
        className=""
      />
    </div>

    <div className="text-center sm:text-left">
      <div className="w-96 justify-start text-[#1C1B35] text-xl md:text-3xl 2xl:text-4xl font-bold">
        Grayson Michael
      </div>
      <div className="self-stretch mt-[8px] mb-[8px] justify-start text-[#7E7F91] text-3xl font-medium">
        Cybersecurity Analyst
      </div>
      <div className="self-stretch justify-start text-[#7E7F91] text-xl font-normal">
        San Francisco, United Kingdom
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center min-h-[80px] mt-6 md:mt-0">
    <button
      type="submit"
      className="gap-[16px] flex items-center justify-center bg-[#E5223A] hover:bg-[#E5223A] text-white text-lg 2xl:text-2xl cursor-pointer w-32 py-2 rounded-2xl"
    >
      Edit
      <Image
        src="/images/edit.png"
        alt="Edit Icon"
        height={23}
        width={20}
      />
    </button>
  </div>
</div>



{/* second */}
<div className=" mt-[55px] px-[50px] py-[39px] bg-stone-50 rounded-3xl overflow-hidden">
  <div className="">
   

    <div className="text-center sm:text-left">
<div className="flex justify-between">
      <div className="w-96 justify-start text-[#1C1B35] text-xl md:text-3xl 2xl:text-4xl font-bold">
      Personal Information:
      </div>
      <div className="flex items-center justify-center min-h-[80px] mt-6 md:mt-0">
    <button
      type="submit"
      className="gap-[16px] flex items-center justify-center bg-[#E5223A] hover:bg-[#E5223A] text-white text-lg 2xl:text-2xl cursor-pointer w-32 py-2 rounded-2xl"
    >
      Edit
      <Image
        src="/images/edit.png"
        alt="Edit Icon"
        height={23}
        width={20}
      />
    </button>
  </div>
  </div>




  <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-700">
        <div>
          <p className=" text-[#7E7F91] text-2xl font-medium ">First Name</p>
          <p className="text-3xl font-medium text-[#1C1B35]">Grayson</p>
        </div>

         <div>
          <p className=" text-[#7E7F91] text-2xl font-medium ">Last Name</p>
          <p className="text-3xl font-medium text-[#1C1B35]">Michael</p>
        </div>

        <div>
          <p className=" text-[#7E7F91] text-3xl font-medium ">Email Address</p>
          <p className="text-3xl font-medium text-[#1C1B35]">graysonmichael@gmail.com</p>
        </div>

        <div>
          <p className=" text-[#7E7F91] text-2xl font-medium ">Phone</p>
          <p className="text-3xl font-medium text-[#1C1B35]">+92 334 409 80 </p>
        </div>

        <div>
          <p className=" text-[#7E7F91] text-2xl font-medium ">Bio</p>
          <p className="text-3xl font-medium text-[#1C1B35]">Cybersecurity Analyst </p>
        </div>

        </div>
      {/* <div className="self-stretch mt-[8px] mb-[8px] justify-start text-[#7E7F91] text-3xl font-medium">
        Cybersecurity Analyst
      </div> */}
      {/* <div className="self-stretch justify-start text-[#7E7F91] text-xl font-normal">
        San Francisco, United Kingdom
      </div> */}
    </div>
  </div>

  
</div>








    </div>
   </div>
   <Footers />
  </>
 );
};

export default Page;
