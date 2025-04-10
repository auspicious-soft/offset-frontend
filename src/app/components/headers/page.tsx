"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import router from "next/navigation";
import { useRouter } from "next/router";
import { usePathname } from 'next/navigation';

export default function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);
 const router= useRouter;
 const pathname = usePathname();
  const handleClick = () => {
    window.location.href = 'https://panel.inscape.life/';
  };

 return (
  <>
   {/* <div className=" px-[170px]  flex justify-between items-center">
    <div className="inline-flex justify-start items-center gap-[8px]">
     <div className=" flex justify-center items-center">
      <Image src={"/images/logo.png"} alt="playstore" height={72} width={57} className=" " />
     </div>

     <div className=" w-36 inline-flex flex-col justify-start items-start py-[8px]">
      <div className="text-[#1C1B35] text-2xl font-black">
       {" "}
       OFFSET
       <span className="text-[#E5223A] text-2xl font-black ">7</span>
      </div>
      <div className="self-stretch justify-start text-[#979797] text-xl font-normal ">Threat Intel</div>{" "}
     </div>
    </div>

    <div className="flex gap-3  justify-center items-center">
     <div className="bg-[#CF201F] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
      <Image src="/images/youtube.png" alt="youtube" width={24} height={24} unoptimized className="w-5 h-5 " />
     </div>
     <div className="bg-[#18B8EA] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
      <Image src="/images/v.png" alt="v" width={24} height={24} unoptimized className="w-3 h-3" />
     </div>
     <div className="bg-[#3E599C] w-6 h-6 flex items-center justify-center rounded cursor-pointer">
      <Image src="/images/fb.png" alt="facebook" width={24} height={24} unoptimized className="w-3 h-3" />
     </div>
    </div>
   </div>


   <div className=" mx-[170px]  px-[21px] flex justify-between h-20 relative rounded-[20px] shadow-[0_4px_60px_rgba(0,0,0,0.1)] backdrop-blur-md bg-white/80 overflow-hidden">



    <nav className=" h-full flex items-center flex-wrap justify-center text-[#1C1B35] gap-4 sm:gap-[38px] text-sm sm:text-base text-center">
  <Link href="" scroll={true} className="cursor-pointer flex items-center">
    Home
  </Link>
  <Link href="" className="cursor-pointer flex items-center">
    News
  </Link>
  <Link href="" className="cursor-pointer flex items-center">
    Darkweb Incidents
  </Link>
  <Link href="" className="cursor-pointer flex items-center">
    Cve Engine
  </Link>
  <Link href="" className="cursor-pointer flex items-center">
    Risk Assets
  </Link>
  <Link href="" className="cursor-pointer flex items-center">
    My Library
  </Link>
  <Link href="" className="cursor-pointer flex items-center">
    Contact Us
  </Link>
</nav>



<div className=" flex items-center justify-center gap-[14px]">
  <Image
    src="/images/country.png"
    alt="country"
    height={45}
    width={45}
    className="h-[45px] w-[45px] object-contain cursor-pointer"
  />

  <div className="text-[#1C1B35] text-xl font-normal">EN</div>

  <Image
    src="/notification.svg"
    alt="notifications"
    height={34}
    width={34}
    className="cursor-pointer"
  />


  <div className="h-[45px] w-[45px] bg-[#37474F] rounded-full flex items-center justify-center">
  <Image
    src="/images/G.png"
    alt="country"
    height={35} 
    width={20}
    className="object-contain cursor-pointer"
  />
</div>

  <Image
    src="/downredarrow.svg"
    alt="down arrow"
    height={7}
    width={14}
    className="cursor-pointer"
  />
</div>



   </div> */}




{/* top  */}
<div className="px-4 sm:px-8 md:px-16 lg:px-[170px] flex justify-between items-center">
    <div className="inline-flex justify-start items-center gap-2">
        <div className="flex justify-center items-center">
            <Image 
                src={"/images/logo.png"} 
                alt="playstore" 
                height={72} 
                width={57} 
                className="w-10 h-12 sm:w-14 sm:h-18" 
            />
        </div>

        <div className="inline-flex flex-col justify-start items-start py-2">
            <div className="text-[#1C1B35] text-lg sm:text-2xl font-black">
                OFFSET
                <span className="text-[#E5223A]">7</span>
            </div>
            <div className="text-[#979797] text-sm sm:text-xl font-normal">
                Threat Intel
            </div>
        </div>
    </div>

    <div className="flex gap-2 sm:gap-3 justify-center items-center">
        <div className="bg-[#CF201F] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
            <Image 
                src="/images/youtube.png" 
                alt="youtube" 
                width={24} 
                height={24} 
                unoptimized 
                className="w-4 h-4 sm:w-5 sm:h-5" 
            />
        </div>
        <div className="bg-[#18B8EA] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
            <Image 
                src="/images/v.png" 
                alt="v" 
                width={24} 
                height={24} 
                unoptimized 
                className="w-2 h-2 sm:w-3 sm:h-3" 
            />
        </div>
        <div className="bg-[#3E599C] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
            <Image 
                src="/images/fb.png" 
                alt="facebook" 
                width={24} 
                height={24} 
                unoptimized 
                className="w-2 h-2 sm:w-3 sm:h-3" 
            />
        </div>
    </div>
</div>


{/* bottom  */}
<div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[170px] px-4 sm:px-5 flex justify-between h-16 sm:h-20 relative rounded-xl sm:rounded-[20px] shadow-[0_4px_60px_rgba(0,0,0,0.1)] backdrop-blur-md bg-white/80 overflow-hidden">
    <nav className="h-full flex items-center flex-wrap justify-center text-[#1C1B35] gap-2 sm:gap-4 md:gap-6 lg:gap-[38px] text-xs sm:text-sm md:text-base text-center">
  
        <Link
  href="/admin/dashboard"
  scroll={true}
  className={`cursor-pointer flex items-center ${
    pathname === '/admin/dashboard' ? 'text-[#E5223A] font-semibold' : ''
  }`}
>
  Home
</Link>
   
        
<Link
  href="/admin/newss"
  className={`cursor-pointer flex items-center ${
    pathname === '/admin/newss' ? 'text-[#E5223A] font-semibold' : ''
  }`}
>
  News
</Link>

<Link
  href="/admin/darkweb"
  className={`cursor-pointer flex items-center ${
    pathname === '/admin/darkweb' ? 'text-[#E5223A] font-semibold' : ''
  }`}
>
  Darkweb Incidents
</Link>

        <Link href="" className="cursor-pointer flex items-center">
            Cve Engine
        </Link>
        <Link href="" className="cursor-pointer flex items-center">
            Risk Assets
        </Link>
        <Link href="" className="cursor-pointer flex items-center">
            My Library
        </Link>
        <Link href="" className="cursor-pointer flex items-center">
            Contact Us
        </Link>
    </nav>

    <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-[14px]">
        <Image
            src="/images/country.png"
            alt="country"
            height={45}
            width={45}
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-[45px] lg:w-[45px] object-contain cursor-pointer"
        />

        <div className="text-[#1C1B35] text-base sm:text-lg lg:text-xl font-normal">EN</div>

        <Image
            src="/notification.svg"
            alt="notifications"
            height={34}
            width={34}
            className="h-6 w-6 sm:h-8 sm:w-8 lg:h-[34px] lg:w-[34px] cursor-pointer"
        />

        <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-[45px] lg:w-[45px] bg-[#37474F] rounded-full flex items-center justify-center">
            <Image
                src="/images/G.png"
                alt="country"
                height={35}
                width={20}
                className="h-5 w-3 sm:h-7 sm:w-4 lg:h-[35px] lg:w-[20px] object-contain cursor-pointer"
            />
        </div>

        <Image
            src="/downredarrow.svg"
            alt="down arrow"
            height={7}
            width={14}
            className="h-1.5 w-3 sm:h-2 sm:w-3.5 lg:h-[7px] lg:w-[14px] cursor-pointer"
        />
    </div>
</div>



{/* <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>


        {menuOpen && (
        <div className="flex flex-col gap-2 py-2 md:hidden ">
          <Link href="#benefits"  className="text-zinc-800 font-small cursor-pointer">Benefits</Link>
          <Link href="#how-it-works"  className="text-zinc-800 font-small cursor-pointer">How It Works</Link>
          <Link href="#faq"  className="text-zinc-800 font-small cursor-pointer">FAQ</Link>
          <button  onClick={handleClick}  className="px-6 py-3 bg-[#1A3F70] rounded-full text-white font-medium w-fit">
            Login/Register
          </button>
        </div>
      )} */}



  </>
 );
}
