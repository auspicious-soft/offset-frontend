"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footers() {
 return (
  <>
   <footer className="bg-[url('/images/footerBGImage.png')] bg-cover bg-center sticky top-0 bg-[#1C1B35] w-full px-4 sm:px-8">
    <div className="flex justify-center items-center">
     <Image
      src={"/images/logo.png"}
      alt="Offset7 Logo"
      height={129}
      width={149}
      className="mt-[40px] sm:mt-[59px] h-auto w-auto"
     />
    </div>

    <nav className="mt-6 sm:mt-[18px] flex flex-wrap justify-center items-center text-[#FFFFFF] gap-4 sm:gap-[38px] text-sm sm:text-base text-center">
     <Link href="/" scroll={true} className="cursor-pointer hover:text-[#E5223A] transition-colors" aria-label="Home Page">
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
     <a href="https://www.youtube.com/offset7" target="_blank" rel="noopener noreferrer" aria-label="Offset7 YouTube Channel" className="bg-[#CF201F] w-6 h-6 flex items-center justify-center rounded cursor-pointer hover:opacity-90 transition-opacity">
      <Image
       src="/images/youtube.png"
       alt="YouTube Channel"
       width={24}
       height={24}
       className="w-4 h-4 sm:w-5 sm:h-5"
      />
     </a>
     <a href="https://twitter.com/offset7" target="_blank" rel="noopener noreferrer" aria-label="Offset7 Twitter/X Profile" className="bg-[#18B8EA] w-6 h-6 flex items-center justify-center rounded cursor-pointer hover:opacity-90 transition-opacity">
        <Image
         src="/images/v.png"
         alt="Twitter/X Profile"
         width={12}
         height={12}
         className="h-auto w-auto"
        />
     </a>
     <a href="https://www.facebook.com/offset7" target="_blank" rel="noopener noreferrer" aria-label="Offset7 Facebook Page" className="bg-[#3E599C] w-6 h-6 flex items-center justify-center rounded cursor-pointer hover:opacity-90 transition-opacity">
        <Image
         src="/images/facebook.png"
         alt="Facebook Page"
         width={36}
         height={36}
         className="h-auto w-auto"
        />
     </a>
    </div>

    <div className="mt-8 sm:mt-[49px] mb-8 sm:mb-[49px] w-full h-px bg-white/20"></div>

    <div className="pb-10 sm:pb-[65px] text-[#FFFFFF] text-sm sm:text-base flex justify-center items-center text-center">
     <span itemScope itemType="http://schema.org/Organization">
      © {new Date().getFullYear()} <span itemProp="name">Offset7</span>. All Rights Reserved.
     </span>
    </div>
   </footer>
  </>
 );
}
