"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footers() {
 return (
  <>
   <footer className="bg-[url('/images/footerBGImage.png')] bg-cover bg-center sticky top-0 bg-[#1C1B35] w-full px-4 sm:px-8">
    <div className="flex justify-center items-center">
     <Image src={"/images/logo.png"} alt="playstore" height={129} width={149} className="mt-[40px] sm:mt-[59px]" />
    </div>

    <nav className="mt-6 sm:mt-[18px] flex flex-wrap justify-center items-center text-[#FFFFFF] gap-4 sm:gap-[38px] text-sm sm:text-base text-center">
     <Link href="" scroll={true} className="cursor-pointer">
      Home
     </Link>
     <Link href="" className="cursor-pointer">
      About Us
     </Link>
     <Link href="" className="cursor-pointer">
      Contact Us
     </Link>
     <Link href="" className="cursor-pointer">
      Privacy Policy
     </Link>
     <Link href="" className="cursor-pointer">
      Terms and Conditions
     </Link>
    </nav>

    <div className="flex gap-3 sm:gap-[7px] mt-6 sm:mt-[18px] justify-center items-center">
     <div className="bg-[#CF201F] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
      <Image src="/images/youtube.png" alt="youtube" width={24} height={24} unoptimized className="w-4 h-4 sm:w-5 sm:h-5" />
     </div>
     <div className="bg-[#18B8EA] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
        <Image src="/images/v.png" alt="v" width={12} height={12} />
      
     </div>
     <div className="bg-[#3E599C] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
        <Image src="/images/facebook.png" alt="facebook" width={36} height={36} />
      
     </div>
    </div>

    <div className="mt-8 sm:mt-[49px] mb-8 sm:mb-[49px] w-full h-px bg-white/20"></div>

    <div className="pb-10 sm:pb-[65px] text-[#FFFFFF] text-sm sm:text-base flex justify-center items-center text-center">© 2025 Offset7. All Rights Reserved.</div>
   </footer>
  </>
 );
}
