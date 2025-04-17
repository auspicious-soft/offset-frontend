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
<div className="self-stretch flex flex-col md:flex-row justify-between items-center mt-[55px] px-[30px] sm:px-[40px] md:px-[50px] py-[30px] sm:py-[35px] md:py-[39px] bg-stone-50 rounded-3xl overflow-hidden">
  <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] items-center sm:items-start">
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
      <div className="w-full sm:w-96 justify-start text-[#1C1B35] text-lg sm:text-xl md:text-3xl 2xl:text-4xl font-bold">
        Grayson Michael
      </div>
      <div className="mt-[6px] mb-[6px] sm:mt-[8px] sm:mb-[8px] justify-start text-[#7E7F91] text-xl sm:text-2xl md:text-3xl font-medium">
        Cybersecurity Analyst
      </div>
      <div className="text-[#7E7F91] text-base sm:text-lg md:text-xl font-normal">
        San Francisco, United Kingdom
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px] mt-4 sm:mt-5 md:mt-0">
    <button
      type="submit"
      className="gap-[12px] sm:gap-[16px] flex items-center justify-center bg-[#E5223A] hover:bg-[#E5223A] text-white text-base sm:text-lg 2xl:text-2xl cursor-pointer w-28 sm:w-32 py-2 rounded-2xl"
    >
      Edit
      <Image
        src="/images/edit.png"
        alt="Edit Icon"
        height={20}
        width={18}
      />
    </button>
  </div>
</div>



{/* second */}

<div className="mt-[55px] px-[20px] sm:px-[20px] py-[39px] bg-stone-50 rounded-3xl overflow-hidden">
  <div className="">
    <div className="text-center sm:text-left">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="text-[#1C1B35] text-lg sm:text-xl md:text-3xl 2xl:text-4xl font-bold">
      Personal Information:
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="gap-[12px] sm:gap-[16px] flex items-center justify-center bg-[#E5223A] hover:bg-[#E5223A] text-white text-base sm:text-lg 2xl:text-2xl cursor-pointer w-28 sm:w-32 p-[10px] rounded-2xl"
        >
          Edit
          <Image
            src="/images/edit.png"
            alt="Edit Icon"
            height={20}
            width={18}
          />
        </button>
      </div>
    </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 max-w-[800px] mt-[36px] sm:gap-y-10 gap-y-5">
        <div>
          <p className="text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">First Name</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">Grayson</p>
        </div>

        <div className="md:ml-[70px] lg:ml-[0px]  ml-0">
          <p className="text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">Last Name</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">Michael</p>
        </div>

        <div>
          <p className=" text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">Email Address</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">graysonmichael@gmail.com</p>
        </div>

        <div  className="md:ml-[70px] lg:ml-[0px]  ml-0">
          <p className=" text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">Phone</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">+92 334 409 80</p>
        </div>

        <div className="sm:col-span-2">
          <p className="  text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">Bio</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">Cybersecurity Analyst</p>
        </div>
      </div>
    </div>
  </div>
</div>




{/* third  */}

<div className="mt-[55px] mb-[88px] px-[20px] sm:px-[20px] py-[39px] bg-stone-50 rounded-3xl overflow-hidden">
  <div className="">
    <div className="text-center sm:text-left">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="text-[#1C1B35] text-lg sm:text-xl md:text-3xl 2xl:text-4xl font-bold">
      Personal Address:
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="gap-[12px] sm:gap-[16px] flex items-center justify-center bg-[#E5223A] hover:bg-[#E5223A] text-white text-base sm:text-lg 2xl:text-2xl cursor-pointer w-28 sm:w-32 p-[10px] rounded-2xl"
        >
          Edit
          <Image
            src="/images/edit.png"
            alt="Edit Icon"
            height={20}
            width={18}
          />
        </button>
      </div>
    </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 max-w-[800px] mt-[36px] sm:gap-y-10 gap-y-5">
        <div>
          <p className="text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">Country</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">United Kingdom</p>
        </div>

        <div className="md:ml-[70px] lg:ml-[0px]  ml-0">
          <p className="text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">City/State</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">Leeds, East London</p>
        </div>

        <div>
          <p className=" text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">Postal Code</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">ERT 2354</p>
        </div>

        <div  className="md:ml-[70px] lg:ml-[0px]  ml-0">
          <p className=" text-[#7E7F91] text-base sm:text-xl md:text-2xl font-medium">TAX ID</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">AS45645756</p>
        </div>

      </div>
    </div>
  </div>
</div>










{/* <div className="mt-[55px] px-6 sm:px-10 py-10 bg-stone-50 rounded-3xl overflow-hidden">
  <div className="">
    <div className="text-center sm:text-left">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className="text-[#1C1B35] text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold">
          Personal Information:
        </div>

        <div className="flex items-center justify-center mt-4 sm:mt-0">
          <button
            type="submit"
            className="gap-3 flex items-center justify-center bg-[#E5223A] hover:bg-[#E5223A] text-white text-base sm:text-lg 2xl:text-2xl cursor-pointer w-28 sm:w-32 p-[10px] rounded-2xl"
          >
            Edit
            <Image
              src="/images/edit.png"
              alt="Edit Icon"
              height={20}
              width={18}
              className="sm:h-[23px] sm:w-[20px]"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-[800px] mt-[36px]">
        <div>
          <p className="text-[#7E7F91] text-lg sm:text-xl md:text-2xl font-medium">First Name</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-3">Grayson</p>
        </div>

        <div>
          <p className="text-[#7E7F91] text-lg sm:text-xl md:text-2xl font-medium">Last Name</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-3">Michael</p>
        </div>

        <div>
          <p className="mt-6 text-[#7E7F91] text-lg sm:text-xl md:text-2xl font-medium">Email Address</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-3">graysonmichael@gmail.com</p>
        </div>

        <div>
          <p className="mt-6 text-[#7E7F91] text-lg sm:text-xl md:text-2xl font-medium">Phone</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-3">+92 334 409 80</p>
        </div>

        <div>
          <p className="mt-6 text-[#7E7F91] text-lg sm:text-xl md:text-2xl font-medium">Bio</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-3">Cybersecurity Analyst</p>
        </div>
      </div>
    </div>
  </div>
</div> */}







    </div>
   </div>
   <Footers />
  </>
 );
};

export default Page;
