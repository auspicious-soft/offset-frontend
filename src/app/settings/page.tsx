"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import { Pencil } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const Page = () => {
 return (
  <>
   <div className=" bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
    <Headers />
    <div className=" container mt-[50px]  ">

     {/* breadcrumbs  */}
     {/* <div className="border border-red-400 mt-[50px]  text-xl font-medium"> */}
     <div className=" mt-[10px] sm:mt-[30px] md:mt-[20px] lg:mt-[50px] text-xl font-medium">

            <Breadcrumb>
              <div>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#727272]">Home</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="bg-[#E5223A] w-px h-[11px]" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#E5223A]">Account Settings</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </div>
            </Breadcrumb>
          </div>



  <div className=" mt-[20px] sm:mt-[30px] md:mt-[20px] lg:mt-[63px] justify-start text-gray-800 text-3xl 2xl:text-5xl font-medium ">Account Settings:</div>



{/* first  */}
<div className="self-stretch flex flex-col md:flex-row justify-between items-center   mt-[20px] sm:mt-[30px] md:mt-[20px] lg:mt-[55px] px-[30px] sm:px-[40px] md:px-[50px] py-[30px] sm:py-[35px] md:py-[39px] bg-stone-50 rounded-3xl overflow-hidden">
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

<div className="mt-[20px] sm:mt-[30px] md:mt-[20px] lg:mt-[55px] px-[20px] sm:px-[20px] py-[25px] sm:py-[25px] lg:py-[39px] bg-stone-50 rounded-3xl overflow-hidden">
  <div className="">
    <div className="text-center sm:text-left">
  

<div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 sm:flex-nowrap">
  <div className="text-left text-[#1C1B35] text-md sm:text-lg md:text-3xl 2xl:text-4xl font-bold">
    Personal Information:
  </div>

  <div className="flex items-center">
      <button
          type="submit"
          className="gap-[12px] sm:gap-[16px] flex items-center justify-center bg-[#E5223A] hover:bg-[#E5223A] text-white text-sm sm:text-sm md:text-lg 2xl:text-2xl cursor-pointer sm:p-2 sm:px-4 md:px-6  md:p-[10px] p-[10px] rounded-2xl"
        >
          Edit
          <Image
  src="/images/edit.png"
  alt="Edit Icon"
  height={20}
  width={18}
  className="h-[15px] w-[15px] sm:h-[20px] sm:w-[18px]"
/>
        </button>

  </div>
</div>









<div className="grid grid-cols-1 sm:grid-cols-2 max-w-[800px] mt-[20px] sm:mt-[20px]  md:mt-[36px] sm:gap-y-10 gap-y-5">
  <div>
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">First Name</p>
    <p className="text-left text-lg sm:text-lg md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">Grayson</p>
  </div>

  <div className="md:ml-[70px] lg:ml-[0px] ml-0">
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">Last Name</p>
    <p className="text-left text-lg sm:text-lg md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">Michael</p>
  </div>

  <div>
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">Email Address</p>
    <p className="text-left text-lg sm:text-lg md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">graysonmichael@gmail.com</p>
  </div>

  <div className="md:ml-[70px] lg:ml-[0px] ml-0">
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">Phone</p>
    <p className="text-left text-lg sm:text-lg md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">+92 334 409 80</p>
  </div>

  <div className="sm:col-span-2">
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">Bio</p>
    <p className="text-left text-lg sm:text-lg md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">Cybersecurity Analyst</p>
  </div>
</div>



    </div>
  </div>
</div>




{/* third  */}

<div className="mt-[20px] sm:mt-[30px] md:mt-[20px] lg:mt-[55px] lg:mb-[88px] md:mb-[30px] sm:mb-[20px] mb-[20px] px-[20px] sm:px-[20px] py-[25px] sm:py-[25px] lg:py-[39px] bg-stone-50 rounded-3xl overflow-hidden">
  <div className="">
    <div className="text-center sm:text-left">
    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 sm:flex-nowrap">
  <div className="text-left text-[#1C1B35] text-md sm:text-lg md:text-3xl 2xl:text-4xl font-bold">
    Personal Address:
  </div>

  <div className="flex items-center">
      <button
          type="submit"
          className="gap-[12px] sm:gap-[16px] flex items-center justify-center bg-[#E5223A] hover:bg-[#E5223A] text-white text-sm sm:text-sm md:text-lg 2xl:text-2xl cursor-pointer sm:p-2 sm:px-4 md:px-6  md:p-[10px] p-[10px] rounded-2xl"
        >
          Edit
          <Image
  src="/images/edit.png"
  alt="Edit Icon"
  height={20}
  width={18}
  className="h-[15px] w-[15px] sm:h-[20px] sm:w-[18px]"
/>
        </button>

  </div>
</div>

 

<div className="grid grid-cols-1 sm:grid-cols-2 max-w-[800px] mt-[20px] sm:mt-[20px]  md:mt-[36px] sm:gap-y-10 gap-y-5">
  <div>
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">Country</p>
    <p className="text-left text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">United Kingdom</p>
  </div>

  <div className="md:ml-[70px] lg:ml-[0px] ml-0">
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">City/State</p>
    <p className="text-left text-lg sm:text-lg md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">Leeds, East London</p>
  </div>

  <div>
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">Postal Code</p>
    <p className="text-left text-lg sm:text-lg md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">ERT 2354</p>
  </div>

  <div className="md:ml-[70px] lg:ml-[0px] ml-0">
    <p className="text-[#7E7F91] text-left text-md sm:text-md md:text-2xl font-medium">TAX ID</p>
    <p className="text-left text-lg sm:text-lg md:text-3xl font-medium text-[#1C1B35] mt-[10px] sm:mt-[18px]">AS45645756</p>
  </div>
</div>



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
