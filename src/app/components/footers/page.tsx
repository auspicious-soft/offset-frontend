"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footers() {
 return (
  <>
   <footer className="bg-[url('/images/footerBGImage.png')] bg-cover bg-center sticky top-0 bg-[#1C1B35] w-full  ">
     <div className="container ">


    <div className="flex justify-center items-center">
     <Image
      src={"/images/logo.png"}
      alt="Offset7 Logo"
      height={129}
      width={149}
      className="h-[50px] sm:h-[50px] lg:h-[72px]  mt-[40px] sm:mt-[59px]  w-auto"
     />
    </div>

    <nav className="mt-6 sm:mt-[18px] flex flex-wrap justify-center items-center text-[#FFFFFF] gap-4 sm:gap-[38px] text-sm sm:text-base xl:text-2xl text-center">
     <Link href="/dashboard" scroll={true} className="cursor-pointer hover:text-[#E5223A] transition-colors" aria-label="Home Page">
      Home
     </Link>
     <Link href="/about-us" className="cursor-pointer hover:text-[#E5223A] transition-colors" aria-label="About Us Page">
      About Us
     </Link>
     <Link href="/contact-us" className="cursor-pointer hover:text-[#E5223A] transition-colors" aria-label="Contact Us Page">
      Contact Us
     </Link>
     <Link href="/privacy-policy" className="cursor-pointer hover:text-[#E5223A] transition-colors" aria-label="Privacy Policy Page">
      Privacy Policy
     </Link>
     <Link href="/terms-and-conditions" className="cursor-pointer hover:text-[#E5223A] transition-colors" aria-label="Terms and Conditions Page">
      Terms and Conditions
     </Link>
    </nav>

    <div className="flex gap-3 sm:gap-[7px] mt-6 sm:mt-[18px] justify-center items-center">
     <a href="https://www.youtube.com/offset7" target="_blank" rel="noopener noreferrer" aria-label="Offset7 YouTube Channel" className="bg-[#CF201F]  flex items-center justify-center rounded cursor-pointer hover:opacity-90 transition-opacity">

     <div className="bg-[#CF201F]  flex items-center justify-center rounded cursor-pointer ">
         <Image src="/yt.svg" alt="YouTube " width={36} height={36} className=""/>
      </div>

     </a>
     <a href="https://twitter.com/offset7" target="_blank" rel="noopener noreferrer" aria-label="Offset7 Twitter/X Profile" className="bg-[#18B8EA]  flex items-center justify-center rounded cursor-pointer hover:opacity-90 transition-opacity">
       <div className="bg-[#18B8EA]  flex items-center justify-center rounded cursor-pointer ">
                 <Image src="/v.svg" alt="Twitter/X Profile" width={36} height={36} />
                </div>
       
     </a>
     <a href="https://www.facebook.com/offset7" target="_blank" rel="noopener noreferrer" aria-label="Offset7 Facebook Page" className="bg-[#3E599C]  flex items-center justify-center rounded cursor-pointer hover:opacity-90 transition-opacity">
 <div className="bg-[#3E599C]  flex items-center justify-center rounded cursor-pointer">
          <Image src="/fb.svg" alt="Facebook Page" width={36} height={36} />
         </div>
     </a>
    </div>

    </div>
    <div className="mt-8 sm:mt-[49px] mb-8 sm:mb-[49px] w-full h-px bg-white/20"></div>
    
    <div className="container ">

    <div className="xl:text-2xl pb-10 sm:pb-[65px] text-[#FFFFFF] text-sm sm:text-base flex justify-center items-center text-center">
     <span itemScope itemType="http://schema.org/Organization">
      © {new Date().getFullYear()} <span itemProp="name">Offset7</span>. All Rights Reserved.
     </span>
    </div>
    </div>
   </footer>
  </>
 );
}
