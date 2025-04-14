"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Settings, CreditCard, LogOut, FileText, ChevronRight } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Label } from "@radix-ui/react-dropdown-menu";

// Define DropdownItem component

const DropdownItem = ({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}) => (
  <div className={`mt-[10px] mb-[10px] flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer ${className || ""}`}>
    <div className="flex items-center gap-[12px]">
      {icon}
      <span>{label}</span>
    </div>
    <ChevronRight className="w-4 h-4 text-[#7E7F91]" />
  </div>
);



export default function Headers() {
 const [menuOpen, setMenuOpen] = useState(false);
 const pathname = usePathname();
 const [isOpen, setIsOpen] = useState(false)

 return (
  <>
   <header>
    
    {!menuOpen && (
     <div className=" bg-white ">
        <div className="container ">
      {/* Top Row */}

      <div className=" py-[17px] flex justify-between">
       <div className=" ">
        <Link href="/" aria-label="Offset7 Home">
         <Image src="/logo.svg" alt="Offset7 Logo" height={72} width={57} priority className="h-auto w-auto" />
        </Link>
        
       </div>

       <div className="flex items-center gap-2 sm:gap-3">
        {/* Social icons (hidden on small & medium screens) */}
        <div className="hidden lg:flex gap-2 sm:gap-3 justify-center items-center">

         <div className="bg-[#CF201F]  flex items-center justify-center rounded cursor-pointer ">
          <Image src="/yt.svg" alt="YouTube " width={36} height={36} className=""/>
         </div>

         <div className="bg-[#18B8EA]  flex items-center justify-center rounded cursor-pointer ">
          <Image src="/v.svg" alt="Twitter/X Profile" width={36} height={36} />
         </div>

         <div className="bg-[#3E599C]  flex items-center justify-center rounded cursor-pointer">
          <Image src="/fb.svg" alt="Facebook Page" width={36} height={36} />
         </div>
        </div>

        {/* Hamburger (visible only on small & medium screens) */}
        <button className="flex lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
         {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
       </div>
      </div>
     </div>
     </div>
    )}


    {/* Navbar Links - Show only on lg+ */}
    <div className="container ">
    <div className="hidden px-5  sticky z-50 bg-white h-auto py-[22.5px] lg:flex justify-between rounded-[20px] shadow-[0px_4px_30px_0px_rgba(178,178,178,0.20)]">
     <nav className=" hidden lg:flex items-center gap-6 text-[#1C1B35] text-md xl:text-lg 2xl:text-xl">
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
      <Image src="/images/country.png" alt="Language Selection" height={32} width={32} className="h-auto w-auto" />
      <span>EN</span>
      <Image src="/notification.svg" alt="Notifications" height={24} width={24} className="h-auto w-auto" />

  

{/* dropdown  */}

<div className="relative">
      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
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
              alt="Dropdown Arrow"
              height={7}
              width={14}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </DropdownMenuTrigger>





{/* <div className="container "> */}
<DropdownMenuContent className=" rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]   shadow-[0px_4px_30px_0px_rgba(136,136,136,0.20)]  pt-[34px] pb-[25px] px-[18px] bg-white text-[#7E7F91] ">

  <DropdownItem icon={<Settings />} label="Account Settings" className="border-b border-gray-200 justify-between" />
  <DropdownItem icon={<CreditCard />} label="Payment Details" className="border-b border-gray-200 justify-between" />
  <DropdownItem icon={<FileText />} label="Canceling Subscription" className="border-b border-gray-200 justify-between" />
  <DropdownItem icon={<LogOut />} label="Logout" />
</DropdownMenuContent>
{/* </div> */}



      </DropdownMenu>
    </div>



      
     </div>
    </div>

    {/* Mobile Nav Menu */}
    {menuOpen && (
     <div className="h-full fixed z-50 left-0 right-0  backdrop-blur-xs">
      <div className="sticky top-0 z-50 bg-white   ">
       {/* Top Row */}

       <div className="sm:mx-[20px] lg:mx-[100px] py-[17px] flex justify-between">
        <div className=" inline-flex items-center gap-2">
         <Link href="/" aria-label="Offset7 Home">
          <Image src="/images/logo.png" alt="Offset7 Logo" height={72} width={57} priority className="h-auto w-auto" />
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
           <Image src="/images/youtube.png" alt="YouTube Channel" width={24} height={24} className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="bg-[#18B8EA] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
           <Image src="/images/v.png" alt="Twitter/X Profile" width={12} height={12} className="h-auto w-auto" />
          </div>
          <div className="bg-[#3E599C] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
           <Image src="/images/facebook.png" alt="Facebook Page" width={36} height={36} className="h-auto w-auto" />
          </div>
         </div>

         {/* Hamburger (visible only on small & medium screens) */}
         <button className="flex lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
         </button>
        </div>
       </div>
      </div>
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
    </div>
   </header>
  </>
 );
}
