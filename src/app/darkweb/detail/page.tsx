"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const cardss = [
 {
  boardImg: "/images/one.png",
  avatarImg: "/sarah.svg",
  author: "Sarah Mitchell",
  time: "4 hours ago",
  title: "Major Bank Faces Data Breach Affecting Millions",
  tag: "GENERAL WEB",
 },
 {
  boardImg: "/images/mobile.png",
  avatarImg: "/sarah.svg",
  author: "Sarah Mitchell",
  time: "4 hours ago",
  title: "Major Bank Faces Data Breach Affecting Millions",
  tag: "GENERAL WEB",
 },
 {
  boardImg: "/images/mobile.png",
  avatarImg: "/sarah.svg",
  author: "Sarah Mitchell",
  time: "4 hours ago",
  title: "Major Bank Faces Data Breach Affecting Millions",
  tag: "GENERAL WEB",
 },
 {
  boardImg: "/images/mobile.png",
  avatarImg: "/sarah.svg",
  author: "Sarah Mitchell",
  time: "4 hours ago",
  title: "Major Bank Faces Data Breach Affecting Millions",
  tag: "GENERAL WEB",
 },
];

const educationCards = [
 {
  boardImg: "/images/mobile.png",
  avatarImg: "/sarah.svg",
  author: "Dr. Learnwell",
  time: "1d ago",
  title: "Mastering Cybersecurity: Beginner to Advanced",
  tag: "CYBERSECURITY",
 },
 {
  boardImg: "/images/one.png",
  avatarImg: "/sarah.svg",
  author: "Prof. Byte",
  time: "3d ago",
  title: "AI & Machine Learning Basics for Students",
  tag: "AI EDUCATION",
 },
 {
  boardImg: "/images/one.png",
  avatarImg: "/sarah.svg",
  author: "Prof. Byte",
  time: "3d ago",
  title: "AI & Machine Learning Basics for Students",
  tag: "AI EDUCATION",
 },
 {
  boardImg: "/images/one.png",
  avatarImg: "/sarah.svg",
  author: "Prof. Byte",
  time: "3d ago",
  title: "AI & Machine Learning Basics for Students",
  tag: "AI EDUCATION",
 },
];

const cardData = [
 {
  image: "/images/board.png",
  authorImage: "/sarah.svg",
  authorName: "Sarah Mitchell",
  time: "4 hours ago",
  title: "Major Bank Faces Data Breach Affecting Millions",
  category: "GENERAL WEB",
  arrow: "/redarrow.svg",
 },
 {
  image: "/images/mobile.png",
  authorImage: "/sarah.svg",
  authorName: "Sarah Mitchell",
  time: "4 hours ago",
  title: "Major Bank Faces Data Breach Affecting Millions",
  category: "GENERAL WEB",
  arrow: "/redarrow.svg",
 },
 {
  image: "/images/mobile.png",
  authorImage: "/sarah.svg",
  authorName: "John Carter",
  time: "4 hours ago",
  title: "Major Bank Faces Data Breach Affecting Millions",
  category: "GENERAL WEB",
  arrow: "/redarrow.svg",
 },
 {
  image: "/images/mobile.png",
  authorImage: "/sarah.svg",
  authorName: "Emma Stone",
  time: "4 hours ago",
  title: "Major Bank Faces Data Breach Affecting Millions",
  category: "GENERAL WEB",
  arrow: "/redarrow.svg",
 },
];

const Page = () => {
 const [active, setActive] = useState("tools");

 return (
  <>
   <div className="bg-[url('/images/dotsBGImage.png')]  bg-size-[100%]">
    <Headers />
    <div className="container">
     {/* breadcrumbs  */}
     <div className=" mt-[10px] sm:mt-[30px] md:mt-[20px] lg:mt-[50px] text-xl font-medium">
      <Breadcrumb>
       <div>
        <BreadcrumbList>
         <BreadcrumbItem>
          <BreadcrumbPage className="text-[#727272]">Home</BreadcrumbPage>
         </BreadcrumbItem>
         <BreadcrumbSeparator className="w-px h-[11px] bg-[#E5223A]" />
         <BreadcrumbItem>
          <BreadcrumbPage className="text-[#727272]">Recent posts</BreadcrumbPage>
         </BreadcrumbItem>
         <BreadcrumbSeparator className="bg-[#E5223A] w-px h-[11px]" />
         <BreadcrumbItem>
          <BreadcrumbPage className="text-[#E5223A]">Search Results</BreadcrumbPage>
         </BreadcrumbItem>
        </BreadcrumbList>
       </div>
      </Breadcrumb>
     </div>

     <div className="flex gap-6 flex-col lg:flex-row mt-[33px]">
      {/* Left Section */}

      <div className=" w-full lg:w-[65%] max-w-[955px] mx-auto  ">
       <Image src="/images/hands.png" alt="darkweb" width={955} height={425} className="w-full     object-cover rounded-xl md:rounded-[30px]" priority />

       {/* content  */}

<div className="flex flex-col md:flex-row md:items-center gap-4 mt-5 md:mt-14">
  <div className="flex items-center gap-2 sm:gap-3 flex-wrap lg:flex-nowrap">
    <Image
      src="/sarah.svg"
      alt="Author"
      height={34}
      width={34}
      className="w-8 h-8 sm:w-5 sm:h-5 md:w-7 md:h-7"
    />
    <div className="text-[#1C1B35] text-sm md:text-base 2xl:text-xl">
      By Sarah Mitchell
      <span className="ml-1 text-[#959595]">| 11 January 2025</span>
    </div>
  </div>

  <div className="flex items-center gap-2 text-sm md:text-base 2xl:text-xl">
    <span className="text-[#959595]">Threat Name:</span>
    <div className="text-[#FF475E] font-bold">Knight Ransomware</div>
  </div>
</div>




       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[20px]">
        <div className="justify-start text-[#1C1B35] text-2xl md:text-2xl lg:text-4xl 2xl:text-5xl font-medium">Dark Web Market Shutdown: Authorities Seize Illegal Data Trading Hub</div>

        <Image 
  src="/dots.svg" 
  alt="read more" 
  height={80} 
  width={80} 
  className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px]  lg:h-[80px] lg:w-[80px]" 
/>

       </div>

       <div className="text-[#1C1B35] text-md sm:text-lg md:text-xl  2xl:text-2xl font-normal mt-[20px] md:mt-[46px]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
        purpose (injected humour and the like).
       </div>

       <div className="text-[#1C1B35] text-md sm:text-lg md:text-xl  2xl:text-2xl font-normal mt-[20px] md:mt-[46px]">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte ration in some form, by injected humour, or randomised words which don't look even slightly belie vable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything emba rras sing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat pre defi ned chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words
       </div>

       <div className="text-[#1C1B35] text-md sm:text-lg md:text-xl  2xl:text-2xl font-normal mt-[20px] md:mt-[46px]">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter ation in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
       </div>

       <div className="mt-[46px]">
        <Image src="/images/greenBlack.png" alt="laptop" width={955} height={425} className="w-full   object-cover rounded-xl md:rounded-[30px]" priority />
       </div>

       <div className="mt-[46px] justify-start text-[#1C1B35]  text-2xl md:text-4xl font-medium   ">Authorities Seize Illegal Data Trading Hub</div>

       <div className="text-[#1C1B35] text-md sm:text-lg md:text-xl  2xl:text-2xl font-normal mt-[20px] md:mt-[46px]">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter ation in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
        structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,humour and the like).
       </div>

       <div className="mt-[46px]  flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-start md:items-start text-center gap-x-2 gap-y-2 text-md sm:text-lg md:text-xl  2xl:text-2xl  font-medium ">
        <span className="text-[#727272] ">GENERAL NEWS SOURCE:</span>
        <span className="text-[#1C1B35]   underline break-words cursor-pointer">https://www.gmail.com</span>
        <Image src="/redLink.svg" alt="Sarah Image" height={17} width={18} className="ml-[20px] cursor-pointer self-center" />
       </div>


<div className="mt-5 mb-5 lg:mb-[106px] flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center md:items-start justify-center md:justify-start gap-5 text-center text-md sm:text-lg md:text-xl 2xl:text-2xl font-medium">
  <span className="text-[#727272] self-center md:self-start">SECTOR:</span>

  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
    <button
      type="submit"
      className="flex items-center justify-center bg-[#E5223A1C] hover:bg-[#E5223A1C] text-[#E5223A] text-sm sm:text-sm md:text-lg 2xl:text-2xl cursor-pointer px-4 py-1 rounded-3xl border-[0.67px] border-rose-600/10"
    >
      E-Commerce & Online Store
    </button>

    <button
      type="submit"
      className="flex items-center justify-center bg-[#E5223A1C] hover:bg-[#E5223A1C] text-[#E5223A] text-sm sm:text-sm md:text-lg 2xl:text-2xl cursor-pointer px-4 py-1 rounded-3xl border-[0.67px] border-rose-600/10"
    >
      Financial
    </button>

    <button
      type="submit"
      className="flex items-center justify-center bg-[#E5223A1C] hover:bg-[#E5223A1C] text-[#E5223A] text-sm sm:text-sm md:text-lg 2xl:text-2xl cursor-pointer px-4 py-1 rounded-3xl border-[0.67px] border-rose-600/10"
    >
      Manufacturing
    </button>
  </div>
</div>



      </div>

      {/* Right Section */}

      <div className=" w-full lg:w-[35%]  ">
       {/* buttons  */}

       <div className=" h-auto sm:h-14 bg-stone-50 px-[14px] py-[10px] sm:py-[5px] flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl mb-[19px]">
        <div onClick={() => setActive("tools")} className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"}`}>
         <div className={`text-l font-medium ${active === "tools" ? "text-white" : "text-[#727272]"}`}>Tools Posts</div>
        </div>

        <div onClick={() => setActive("education")} className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${active === "education" ? "bg-[#E5223A]" : "bg-stone-50"}`}>
         <div className={`text-l font-medium ${active === "education" ? "text-white" : "text-[#727272]"}`}>Education Posts</div>
        </div>
       </div>

       {/* right top  */}

       {active === "tools" && (
        <div className="mt-[30px] md:mt-0  space-y-5 2xl:space-y-14">
         {cardss.map((cards, index) => (
          <div key={index} className=" py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]">
           <div className="">
            <Image src={cards.boardImg} alt="board" height={140} width={134} unoptimized className="w-full h-[140px] md:h-auto sm:w-[134px] rounded-xl object-cover" />
           </div>

           <div className="w-full pr-0">
            <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 ">
             <Image src={cards.avatarImg} alt="Author" height={34} width={34} className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8" />
             <div className="flex justify-center align-middle">
              <div className="mt-2 text-[#1C1B35] text-xs">
               By {cards.author}
               <span className="ml-[4px] text-[#959595] text-xs">| {cards.time}</span>
              </div>
             </div>
            </div>

            <div className="text-[#1C1B35] text-m sm:text-m md:text-m lg:text-lg">{cards.title}</div>

            <div className="flex justify-between items-center">
             <div className="text-sm text-[#FF475E] font-bold">{cards.tag}</div>
             <Image src="/Arrow.svg" alt="Red Arrow" height={29} width={29} className="   xl:w-[29px] xl:h-[29px] w-5 h-5 sm:w-5 sm:h-5   bg-[#E5223A]   rounded-full " />
            </div>
           </div>
          </div>
         ))}
        </div>
       )}

       {active === "education" && (
        <div className="space-y-5 2xl:space-y-14">
         {educationCards.map((cards, index) => (
          <div key={index} className=" py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]">
           <div className="">
            <Image src={cards.boardImg} alt="board" height={140} width={134} className="w-full h-[140px] md:h-auto sm:w-[134px] rounded-xl object-cover" />
           </div>

           <div className="w-full pr-0">
            <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 ">
             <Image src={cards.avatarImg} alt="Author" height={34} width={34} className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8" />
             <div className="flex justify-center align-middle">
              <div className="mt-2 text-[#1C1B35] text-xs">
               By {cards.author}
               <span className="ml-[4px] text-[#959595] text-xs">| {cards.time}</span>
              </div>
             </div>
            </div>

            <div className="text-[#1C1B35]  text-m sm:text-m md:text-m lg:text-lg">{cards.title}</div>

            <div className="flex justify-between items-center">
             <div className="text-sm text-[#FF475E] font-bold">{cards.tag}</div>
             <Image src="/Arrow.svg" alt="Red Arrow" height={29} width={29} className="xl:w-[29px] xl:h-[29px] w-5 h-5 sm:w-5 sm:h-5   bg-[#E5223A]   rounded-full " />
            </div>
           </div>
          </div>
         ))}
        </div>
       )}
      </div>
     </div>
    </div>

    <Footers />
   </div>
  </>
 );
};

export default Page;


