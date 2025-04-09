"use client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';


export default function Headers() {

 return (
      <>





<div className="px-[170px] border border-b flex justify-between items-center">

<div className="inline-flex justify-start items-center gap-[8px]">

      <div className=" flex justify-center items-center">
        <Image
          src={"/images/logo.png"}
          alt="playstore"
          height={72}
          width={57}
          className=" "
        />
      </div>

    <div className=" w-36 inline-flex flex-col justify-start items-start py-[8px]">
        <div className="text-[#1C1B35] text-2xl font-black"> OFFSET 
        <span className="text-[#E5223A] text-2xl font-black ">7</span>
        </div>
        <div className="self-stretch justify-start text-[#979797] text-xl font-normal ">Threat Intel</div>    </div>

</div>


  <div className="flex gap-3  justify-center items-center">
    <div className="bg-[#CF201F] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
      <Image
        src="/images/youtube.png"
        alt="youtube"
        width={24}
        height={24}
        unoptimized
        className="w-5 h-5 "
      />
    </div>
    <div className="bg-[#18B8EA] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
      <Image
        src="/images/v.png"
        alt="v"
        width={24}
        height={24}
        unoptimized
        className="w-3 h-3"
      />
    </div>
    <div className="bg-[#3E599C] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
      <Image
        src="/images/fb.png"
        alt="facebook"
        width={24}
        height={24}
        unoptimized
        className="w-3 h-3"
      />
    </div>
  </div>


</div>



<div className="border border-red-800 flex justify-between  h-20 relative rounded-[20px] shadow-[0px_4px_30px_0px_rgba(178,178,178,0.20)] overflow-hidden">
<nav className="border border-purple-800 mt-6 sm:mt-[18px] flex flex-wrap justify-center items-center text-[#1C1B35] gap-4 sm:gap-[38px] text-sm sm:text-base text-center">
    <Link href="" scroll={true} className="cursor-pointer">Home</Link>
    <Link href="" className="cursor-pointer">News</Link>
    <Link href="" className="cursor-pointer">Darkweb Incidents</Link>
    <Link href="" className="cursor-pointer">Cve Engine</Link>
    <Link href="" className="cursor-pointer">Risk Assets</Link>
    <Link href="" className="cursor-pointer">My Library</Link>
    <Link href="" className="cursor-pointer">Contact Us</Link>
  </nav>

   
      <div className="border border-amber-600 flex justify-center gap-[14px]">
       
         <Image
          src={"/images/country.png"}
          alt="playstore"
          height={45}
          width={45}
          className=" "
        />
        <div className=" text-[#1C1B35] text-xl font-normal ">EN</div>
        <Image
            src="/notification.svg"
            alt="notifications"
            height={34}
            width={34}
            className=""
          />
        <Image
            src="/downredarrow.svg"
            alt="notifications"
            height={7}
            width={14}
            className=""
          />

</div>

</div>






    </>

 );
}
