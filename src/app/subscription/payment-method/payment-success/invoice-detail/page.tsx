"use client";
import React from "react";
import Headers from "@/app/components/headers/page";
import Footers from "@/app/components/footers/page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Download } from "lucide-react";
import Image from "next/image";

const InvoiceDetailsPage = () => {
 return (
  <>
   <Headers />
   {/* <div className="mb-10 md:mb-15 min-h-screen h-fit  w-full bg-gray-50"> */}
   <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover">
    <div className=" py-6 md:py-10">
     {/* Breadcrumb Navigation */}
     <div className="">
      <Breadcrumb>
       <BreadcrumbList>
        <BreadcrumbItem>
         <BreadcrumbPage className="text-[#727272] text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl">Invoice</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="w-px h-[11px] bg-[#E5223A]" />
        <BreadcrumbItem>
         <BreadcrumbPage className="text-[#E5223A] text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl">Invoice Details</BreadcrumbPage>
        </BreadcrumbItem>
       </BreadcrumbList>
      </Breadcrumb>
     </div>
     <h1 className="lg:mt-[63px] mt-[20px]  text-md md:text-lg lg:text-xl xl:text-3xl 2xl:text-5xl font-medium">Payment: #INV2024XXXX</h1>
     {/* Invoice Content */}

     <div className="lg:mt-[71px] mt-[20px] bg-stone-50 rounded-[20px]  lg:py-[43px] lg:px-[40px] py-[20px] px-[15px] mb-3   ">
      {/* User Info and Download Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
       <div className="flex items-center gap-4 sm:gap-6">
        <Image src="/M.svg" alt="User" height={105} width={105} className="rounded-full w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] xl:w-[105px] xl:h-[105px]" />
        <div>
         <p className="font-medium text-Color-Heading text-md  md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">Michael Welch</p>
         <p className="text-gray-500 text-sm  md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">March 5, 2025</p>
        </div>
       </div>
       <button className="bg-[#E5223A] cursor-pointer text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 flex items-center text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl">
        Download
        <Download className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
       </button>
      </div>

      {/* Due Amount */}
      <div className="border-t border-gray-200 pt-4  ">
       <div className="flex justify-between mt-[37px]">
        <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl ">Due Amount:</p>
        <p className="font-medium">
         <span className="text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mr-2">Visa **** 4321</span>
         <span className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">$12.00</span>
        </p>
       </div>
      </div>
     </div>

     <div className="mx-auto">
      <div className="py-6">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
         <div className="bg-gray-50 rounded-[20px] md:py-[19px] md:px-[40px] py-[15px] px-[20px]">
          <div className="bg-green-100 text-[#0BA932] text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base font-medium p-2 rounded-[29.42px] inline-block mb-2">Subscription Plan</div>
          <h3 className="font-medium text-[#31334E] text-Color-Heading my-[12px] text-xl   lg:text-xl xl:text-2xl 2xl:text-4xl">Premium ($9.99/month)</h3>
          <ul className="2xl:space-y-[29px] lg:space-y-[15px] space-y-[10px]">
           <li className="flex items-center">
            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-md  xl:text-lg 2xl:text-2xl text-gray-700">Full Cybersecurity Access</span>
           </li>
           <li className="flex items-center">
            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-md  xl:text-lg 2xl:text-2xl text-gray-700">Real-Time Alerts</span>
           </li>
           <li className="flex items-center">
            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-md  xl:text-lg 2xl:text-2xl text-gray-700">Advanced Analytics</span>
           </li>
           <li className="flex items-center">
            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-md  xl:text-lg 2xl:text-2xl text-gray-700">Priority Support</span>
           </li>
          </ul>
         </div>
        </div>

        {/* Right Column */}
        <div>
         <div className="grid grid-cols-2 lg:gap-y-[44px] gap-y-[2px] gap-x-[23px]">
          <div className="bg-[#F9F9F9] py-[24px] px-[24px] rounded-2xl">
           <p className="text-[#7E7F91] text-md  lg:text-md xl:text-xl 2xl:text-3xl mb-[2px]">Total Amount:</p>
           <p className="font-medium text-lg  lg:text-lg xl:text-2xl 2xl:text-4xl">$9.99</p>
          </div>
          <div className="bg-[#F9F9F9] py-[24px] px-[24px] rounded-2xl">
           <p className="text-[#7E7F91] text-md  lg:text-md xl:text-xl 2xl:text-3xl mb-[2px]">Billing Cycle:</p>
           <p className="font-medium text-md  lg:text-md xl:text-xl 2xl:text-3xl">Mar 1 - 31, 2025</p>
          </div>
          <div className="bg-[#F9F9F9] py-[24px] px-[24px] rounded-2xl">
           <p className="text-[#7E7F91] text-md  lg:text-md xl:text-xl 2xl:text-3xl mb-[2px]">Status:</p>
           <p className="text-green-500 font-medium text-lg  lg:text-lg xl:text-2xl 2xl:text-4xl">Paid</p>
          </div>
          <div className="bg-[#F9F9F9] py-[24px] px-[24px] rounded-2xl">
           <p className="text-[#7E7F91] font-medium text-md  lg:text-md xl:text-xl 2xl:text-3xl">Invoice Date:</p>
           <p className="font-medium text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl">Mar 1, 2025</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   {/* </div> */}
   <Footers />
  </>
 );
};

export default InvoiceDetailsPage;
