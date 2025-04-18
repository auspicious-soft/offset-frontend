"use client";
import React, { useState } from "react";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import Image from "next/image";



const Page = () => {
      const [active, setActive] = useState("tools");
    
 return (
  <>
   <div className=" bg-[url('/images/dotsBGImage.png')]  bg-size-[100%]">
    <Headers />
   <div className="container">

    <div className="mt-[86px] flex justify-between items-center">
    <div className=" justify-start text-[#1C1B35] text-xl sm:text-xl md:text-2xl xl:text-3xl 2xl:text-5xl font-medium ">Incident Leakages</div>




{/* buttons  */}

    {/* <div className="border border-amber-500 h-auto sm:h-14 bg-stone-50 px-[14px] py-[10px] sm:py-[5px] flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl mb-[19px]">
  <div
    onClick={() => setActive("tools")}
    className={`w-[286px] border border-red-500   h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
      active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"
    }`}
  >
    <div
      className={`text-l font-medium ${
        active === "tools" ? "text-white" : "text-[#727272]"
      }`}
    >
      Leakages
    </div>
  </div>

  <div
    onClick={() => setActive("education")}
    className={`w-[286px] border border-purple-500   h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center  cursor-pointer ${
      active === "education" ? "bg-[#E5223A]" : "bg-stone-50"
    }`}
  >
    <div
      className={`text-l font-medium ${
        active === "education" ? "text-white" : "text-[#727272]"
      }`}
    >
      Global Statistics
    </div>
  </div>
</div> */}


</div>



<div>
<div className="bg-[url('/images/monthlyCredentialsBGImage.png')] bg-cover  bg-no-repeat  mt-[58px] h-52   rounded-[35.12px] shadow-[0px_119.58736419677734px_140.69100952148438px_0px_rgba(205,205,205,0.16)]  outline-[1.32px] outline-gray-200  pt-[19px]  pl-[28px]  pr-[17px]  pb-[51px]" >

<div className=" flex justify-between items-center">
  <Image
  src="monthlyCredentials.svg"
  alt="Monthly Credentials"
  height={87}
  width={77}
  className=""
/>
<div className="justify-start text-black text-7xl font-normal ">30</div>
</div>

<div className="mt-[8px] justify-start text-black 2xl:text-2xl xl:text-xl text:lg font-normal ">Monthly Credentials</div>
</div>


</div>



   </div>
   </div>
   <Footers />
  </>
 );
};

export default Page;
