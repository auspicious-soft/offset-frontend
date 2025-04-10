"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Headers() {
 const [menuOpen, setMenuOpen] = useState(false);
 const pathname = usePathname();

 //  const handleClick = () => {
 //   window.location.href = "https://panel.inscape.life/";
 //  };

 return (
  <>
   {/* top  */}
   <div className=" px-4 sm:px-8 md:px-16 lg:px-[170px] flex justify-between items-center">
    <div className="inline-flex justify-start items-center gap-2">
     <div className="flex justify-center items-center">
      <Image src={"/images/logo.png"} alt="playstore" height={72} width={57} className="w-10 h-12 sm:w-14 sm:h-18" />
     </div>

     <div className="inline-flex flex-col justify-start items-start py-2">
      <div className="text-[#1C1B35] text-lg sm:text-2xl font-black">
       OFFSET
       <span className="text-[#E5223A]">7</span>
      </div>
      <div className="text-[#979797] text-sm sm:text-xl font-normal">Threat Intel</div>
     </div>
    </div>

    <div className="flex gap-2 sm:gap-3 justify-center items-center">
     <div className="bg-[#CF201F] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
      <Image src="/images/youtube.png" alt="youtube" width={24} height={24} unoptimized className="w-4 h-4 sm:w-5 sm:h-5" />
     </div>
     <div className="bg-[#18B8EA] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
      <Image src="/images/v.png" alt="v" width={24} height={24} unoptimized className="w-2 h-2 sm:w-3 sm:h-3" />
     </div>
     <div className="bg-[#3E599C] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
      <Image src="/images/fb.png" alt="facebook" width={24} height={24} unoptimized className="w-2 h-2 sm:w-3 sm:h-3" />
     </div>
    </div>
   </div>

   {/* bottom  */}

   <header className=" sticky top-0 z-50 bg-white px-4 shadow-lg rounded-[20px]">
    <div className="flex justify-center items-center py-4 min-h-[60px]">
     <div className=" flex flex-col md:items-center md:gap-2 w-full max-w-7xl md:flex-col lg:flex-row lg:justify-between">
      <nav className=" text-lg font-normal hidden lg:flex items-center justify-center flex-wrap text-[#1C1B35] gap-4 lg:gap-4 lg:text-xl xl:text-xl">
       <Link href="/" scroll={true} className={`cursor-pointer flex items-center ${pathname === "/" ? "text-[#E5223A] font-semibold" : ""}`}>
        Home
       </Link>

       <Link href="/newss" className={`cursor-pointer flex items-center ${pathname === "/newss" ? "text-[#E5223A] font-semibold" : ""}`}>
        News
       </Link>


       <Link href="/darkweb" className={`cursor-pointer flex items-center ${pathname === "/darkweb" ? "text-[#E5223A] font-semibold" : ""}`}>
        Darkweb Incidents
       </Link>

       <Link href="" className="cursor-pointer flex items-center whitespace-nowrap">
        Cve Engine
       </Link>

       <Link href="" className="cursor-pointer flex items-center whitespace-nowrap">
        Risk Assets
       </Link>
       <Link href="" className="cursor-pointer flex items-center whitespace-nowrap">
        My Library
       </Link>

       <Link href="/contact-us" className={`cursor-pointer flex items-center ${pathname === "/contact-us" ? "text-[#E5223A] font-semibold" : ""}`}>
        Contact Us
       </Link>
       
    

      </nav>

      <div className="  hidden lg:flex items-center justify-center gap-2 lg:gap-2 mt-2 lg:mt-0 shrink-0">
       <Image src="/images/country.png" alt="country" height={45} width={45} className="h-8 w-8 lg:h-8 lg:w-8 object-contain cursor-pointer" />
       <div className="text-[#1C1B35] text-base lg:text-base font-normal">EN</div>
       <Image src="/notification.svg" alt="notifications" height={34} width={34} className="h-6 w-6 lg:h-6 lg:w-6 cursor-pointer" />
       <div className="h-8 w-8 lg:h-8 lg:w-8 bg-[#37474F] rounded-full flex items-center justify-center">
        <Image src="/images/G.png" alt="country" height={35} width={20} className="h-5 w-3 lg:h-5 lg:w-3 object-contain cursor-pointer" />
       </div>
       <Image src="/downredarrow.svg" alt="down arrow" height={7} width={14} className="h-1.5 w-3 lg:h-1.5 lg:w-3 cursor-pointer" />
      </div>

      <button className="lg:hidden ml-auto self-end" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
       {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
     </div>
    </div>

    {menuOpen && (
     <div className="justify-center lg:hidden flex flex-wrap gap-4 p-4 bg-white text-[#1C1B35] text-sm max-w-full">
      <Link href="/" scroll={true} className={`cursor-pointer ${pathname === "/" ? "text-[#E5223A] font-semibold" : ""}`}>
       Home
      </Link>
      <Link href="/newss" className={`cursor-pointer ${pathname === "/newss" ? "text-[#E5223A] font-semibold" : ""}`}>
       News
      </Link>
      <Link href="" className="cursor-pointer">
       Darkweb Incidents
      </Link>
      <Link href="" className="cursor-pointer">
       Cve Engine
      </Link>
      <Link href="" className="cursor-pointer">
       Risk Assets
      </Link>
      <Link href="" className="cursor-pointer">
       My Library
      </Link>
      <Link href="" className="cursor-pointer">
       Contact Us
      </Link>

      <div className="flex items-center gap-3 pt-4">
       <Image src="/images/country.png" alt="country" height={45} width={45} className="h-8 w-8 object-contain cursor-pointer" />
       <div className="text-[#1C1B35] text-base font-normal">EN</div>
       <Image src="/notification.svg" alt="notifications" height={34} width={34} className="h-6 w-6 cursor-pointer" />
       <div className="h-8 w-8 bg-[#37474F] rounded-full flex items-center justify-center">
        <Image src="/images/G.png" alt="country" height={35} width={20} className="h-5 w-3 object-contain cursor-pointer" />
       </div>
       <Image src="/downredarrow.svg" alt="down arrow" height={7} width={14} className="h-1.5 w-3 cursor-pointer" />
      </div>
     </div>
    )}
   </header>
  </>
 );
}
