"use client";
import React from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";



const Page = () => {
 return (
  <>
  <Headers/>
<div className="border border-amber-500 px-4 sm:px-6 md:px-10 mb-[40px] sm:mb-[59px] md:mb-[60px] lg:mb-[119px] lg:px-[40px] mt-[50px]">  


{/* top  */}
<div className="relative w-full">
  <Image
    src="/images/contactUs.png"
    alt="earth"
    width={1580}
    height={415}
    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[415px] object-cover rounded-xl"
    priority
  />

  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
    <div className="flex gap-[10px] sm:gap-[12px] md:gap-[14px] items-center">
      <Image
        src="/horizontalRedLine.svg"
        alt="left arrow"
        height={0}
        width={30}
        className="w-[20px] sm:w-[30px] md:w-[41px]"
      />

      <div className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Contact Us
      </div>

      <Image
        src="/horizontalRedLine.svg"
        alt="right arrow"
        height={0}
        width={30}
        className="w-[20px] sm:w-[30px] md:w-[41px]"
      />
    </div>

    <div className="mt-4 sm:mt-5 text-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-[90%] md:max-w-[600px]">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </div>
  </div>
</div>


{/* middle  */}
<div className=" flex my-[126px]">
  <div className=" w-[50%] ">
  <div className="mt-[43px] self-stretch justify-start"><span className="text-[#1C1B35] text-7xl font-medium ">We are</span><span className="text-[#E5223A] text-7xl font-medium "> always ready</span><span className="text-gray-800 text-7xl font-medium "> to help you and answer your questions</span></div>
  <div className="mt-[21px] justify-start text-gray-800 text-2xl font-normal ">If you have any inquiries or need assistance, feel free to reach out to us. Our team is available 24/7 to support you.</div>
  </div>

  <div className="w-[50%]">
  <div className=" p-[42px]  relative bg-stone-50 rounded-[30px] overflow-hidden">

  <div className="justify-start text-[#1C1B35] text-5xl font-bold font-['Arial'] leading-[65px]">Get in Touch</div>
  </div>
  </div>
  
</div>






  </div>






<Footers/>
  </>
 );
};

export default Page;
