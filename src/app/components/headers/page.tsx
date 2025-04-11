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

 return (
  <>
  <header>
   <div className="sticky top-0 z-50 bg-white   ">
    {/* Top Row */}

    <div className=" mx-[100px] py-[17px] flex justify-between">
     <div className=" inline-flex items-center gap-2">
      <Link href="/" aria-label="Offset7 Home">
       <Image
        src="/images/logo.png"
        alt="Offset7 Logo"
        height={72}
        width={57}
        priority
        className="h-auto w-auto"
       />
      </Link>
      <div className="flex flex-col">
       <div className="text-[#1C1B35] text-lg font-black">
        OFFSET <span className="text-[#E5223A]">7</span>
       </div>
       <div className="text-[#979797] text-sm font-normal">Threat Intel</div>
      </div>
     </div>

     <div className="flex items-center gap-2 sm:gap-3">
      {/* Social icons (hidden on small & medium screens) */}
      <div className="hidden lg:flex gap-2 sm:gap-3 justify-center items-center">
       <div className="bg-[#CF201F] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
        <Image
         src="/images/youtube.png"
         alt="YouTube Channel"
         width={24}
         height={24}
         className="w-4 h-4 sm:w-5 sm:h-5"
        />
       </div>
       <div className="bg-[#18B8EA] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
        <Image
         src="/images/v.png"
         alt="Twitter/X Profile"
         width={12}
         height={12}
         className="h-auto w-auto"
        />
       </div>
       <div className="bg-[#3E599C] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
        <Image
         src="/images/facebook.png"
         alt="Facebook Page"
         width={36}
         height={36}
         className="h-auto w-auto"
        />
       </div>
      </div>

      {/* Hamburger (visible only on small & medium screens) */}
      <button className="flex lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
       {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
     </div>
    </div>
   </div>

   {/* Navbar Links - Show only on lg+ */}

    <div className="mx-[100px] px-4  sticky z-50 bg-white h-auto lg:h-[87px] flex justify-between rounded-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
     <nav className=" hidden lg:flex items-center gap-6 text-[#1C1B35] text-lg">
      <Link href="/" className={pathname === "/" ? "text-[#E5223A] font-semibold" : ""}>
       Home
      </Link>
      <Link href="/newss" className={pathname === "/newss" ? "text-[#E5223A] font-semibold" : ""}>
       News
      </Link>
      <Link href="/darkweb">Darkweb Incidents</Link>
      <Link href="#">Cve Engine</Link>
      <Link href="#">Risk Assets</Link>
      <Link href="#">My Library</Link>
      <Link href="/contact-us" className={pathname === "/contact-us" ? "text-[#E5223A] font-semibold" : ""}>
       Contact Us
      </Link>
     </nav>

     {/* Socials & Icons (hidden on mobile) */}
     <div className="hidden lg:flex items-center gap-3">
      <Image
       src="/images/country.png"
       alt="Language Selection"
       height={32}
       width={32}
       className="h-auto w-auto"
      />
      <span>EN</span>
      <Image
       src="/notification.svg"
       alt="Notifications"
       height={24}
       width={24}
       className="h-auto w-auto"
      />
      <div className="h-8 w-8 bg-[#37474F] rounded-full flex items-center justify-center">
       <Image
        src="/images/G.png"
        alt="User Profile"
        height={20}
        width={20}
        className="h-auto w-auto"
       />
      </div>
      <Image
       src="/downredarrow.svg"
       alt="Dropdown Menu"
       height={7}
       width={14}
       className="h-auto w-auto"
      />
     </div>
    </div>

    {/* Mobile Nav Menu */}
    {menuOpen && (
      <div className="h-full fixed left-0 right-0  backdrop-blur-xs">
     <div className=" flex flex-col lg:hidden gap-4 p-4 text-[#1C1B35] text-base bg-white  rounded-b-[20px]">
      <Link href="/" className={pathname === "/" ? "text-[#E5223A] font-semibold" : ""}>
       Home
      </Link>
      <Link href="/newss" className={pathname === "/newss" ? "text-[#E5223A] font-semibold" : ""}>
       News
      </Link>
      <Link href="/darkweb">Darkweb Incidents</Link>
      <Link href="#">Cve Engine</Link>
      <Link href="#">Risk Assets</Link>
      <Link href="#">My Library</Link>
      <Link href="/contact-us" className={pathname === "/contact-us" ? "text-[#E5223A] font-semibold" : ""}>
       Contact Us
      </Link>

      {/* Mobile bottom icons */}
      <div className="flex items-center gap-3 pt-4">
       <Image src="/images/country.png" alt="country" height={32} width={32} />
       <span>EN</span>
       <Image src="/notification.svg" alt="notifications" height={24} width={24} />
       <div className="h-8 w-8 bg-[#37474F] rounded-full flex items-center justify-center">
        <Image src="/images/G.png" alt="profile" height={20} width={20} />
       </div>
       <Image src="/downredarrow.svg" alt="dropdown" height={7} width={14} />
      </div>
     </div>
      </div>
    )}
    </header>
  </>
 );
}
