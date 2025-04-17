"use client";
import React from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const newsItems = [
 {
  author: "Sarah Mitchell",
  time: "4 hours ago",
  tag: "World",
  tagColor: "#FFDCE0",
  tagTextColor: "#E5223A",
  title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
  category: "GENERAL WEB",
 },
 {
  author: "Sarah Mitchell",
  time: "4 hours ago",
  tag: "World",
  tagColor: "#FFDCE0",
  tagTextColor: "#E5223A",
  title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
  category: "GENERAL WEB",
 },
 {
  author: "Sarah Mitchell",
  time: "4 hours ago",
  tag: "World",
  tagColor: "#FFDCE0",
  tagTextColor: "#E5223A",
  title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
  category: "GENERAL WEB",
 },
 {
  author: "Sarah Mitchell",
  time: "4 hours ago",
  tag: "World",
  tagColor: "#FFDCE0",
  tagTextColor: "#E5223A",
  title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
  category: "GENERAL WEB",
 },
 {
  author: "Sarah Mitchell",
  time: "4 hours ago",
  tag: "World",
  tagColor: "#FFDCE0",
  tagTextColor: "#E5223A",
  title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
  category: "GENERAL WEB",
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

const cards = [
 {
  boardImg: "/images/one.png",
  avatarImg: "/sarah.svg",
  author: "Sarah Mitchell",
  time: "4 hours ago",
  title: "New Phishing Scam Targets Cryptocurrency Wallets",
  tag: "GENERAL WEB",
 },
 {
  boardImg: "/images/laptop.png",
  avatarImg: "/sarah.svg",
  author: "Sarah Mitchell",
  time: "4 hours ago",
  title: "Zero-Day Exploit Discovered in Popular Enterprise Software",
  tag: "GENERAL WEB",
 },
];

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
];

const Page = () => {
 const [active, setActive] = useState("tools");

 return (
  <>
    <div className=" bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">

   <Headers />

   <div className="container">
    <div className="mt-[50px] flex flex-row items-center gap-2 flex-wrap text-sm sm:text-xl font-medium">
     <div className="text-[#727272] ">Home</div>
     <div className="w-px h-[11px] ] bg-[#E5223A]"></div>
     <div className="text-[#727272] ">Recent posts</div>
     <div className="w-px h-[11px] ] bg-[#E5223A]"></div>
     <div className="text-[#E5223A] ">Search Results</div>
    </div>

    <div className=" flex gap-6   flex-col lg:flex-row   mt-[33px]">
     {/* Left Section */}
     <div className="md:mb-[102px] mb-[20px] w-full lg:w-[65%] flex flex-col gap-y-[22px]">
      {newsItems.map((item, index) => (
       <Link href="/newss/general-news" key={index} className="  gap-4  flex flex-col md:flex-row w-full h-auto bg-stone-50 rounded-3xl p-2 sm:p-3 md:p-4  ">
        <div className="">
         <Image src="/images/lights.png" alt="board" height={225} width={332} className="w-full h-full  rounded-2xl object-cover" />
        </div>

        <div className=" w-full  flex flex-col  pr-2">
         <div className="flex flex-wrap justify-between gap-2 sm:gap-3 mb-3">
          <div className="flex items-center">
      
          <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 ">
            <Image src="/sarah.svg" alt="Author" height={34} width={34} className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8" />

            <div className="flex justify-center align-middle">
             <div className="mt-2 text-[#1C1B35] text-xs">
              By Sarah Mitchell
              <span className="ml-[4px] text-[#959595] text-xs">| 4 hours ago</span>
             </div>
            </div>
           </div>

          </div>

          <div className="px-[13px] py-[3px] w-[99px] rounded-3xl flex items-center justify-center" style={{ backgroundColor: item.tagColor }}>
           <div className="text-base sm:text-base md:text-base" style={{ color: item.tagTextColor }}>
            {item.tag}
           </div>
          </div>
         </div>

         <div>
          <div className="    text-xl font-medium md:text-2xl 2xl:text-3xl text-[#1C1B35] ">{item.title}</div>

          <div className="mt-3 flex justify-between items-center">
           <div className="text-sm text-[#FF475E] font-bold">{item.category}</div>
          </div>
         </div>
        </div>
       </Link>
      ))}
     </div>




     {/* Right Section */}

     <div className=" w-full lg:w-[35%]  ">
      <div className=" h-auto sm:h-14 bg-stone-50 px-[14px] py-[10px] sm:py-[5px] flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl mb-[19px]">
       <div onClick={() => setActive("tools")} className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"}`}>
        <div className={`text-l font-medium ${active === "tools" ? "text-white" : "text-[#727272]"}`}>Recent Posts</div>
       </div>

       <div onClick={() => setActive("education")} className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${active === "education" ? "bg-[#E5223A]" : "bg-stone-50"}`}>
        <div className={`text-l font-medium ${active === "education" ? "text-white" : "text-[#727272]"}`}>Popular Posts</div>
       </div>
      </div>

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
            <Image src="/Arrow.svg" alt="Red Arrow" height={35} width={35} className="   xl:w-[35px] xl:h-[35px] 2xl:w-[35px] 2xl:h-[35px] w-5 h-5 sm:w-5 sm:h-5   bg-[#E5223A]   rounded-full " />
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
            <Image src="/Arrow.svg" alt="Red Arrow" height={35} width={35} className="   xl:w-[35px] xl:h-[35px] 2xl:w-[35px] 2xl:h-[35px] w-5 h-5 sm:w-5 sm:h-5   bg-[#E5223A]   rounded-full " />
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

{
 /* Structured data for news listing page */
}
<Script
 id="news-listing-schema"
 type="application/ld+json"
 dangerouslySetInnerHTML={{
  __html: JSON.stringify({
   "@context": "https://schema.org",
   "@type": "CollectionPage",
   name: "Cybersecurity News & Updates | Offset7",
   description: "Stay informed with the latest cybersecurity news, threat intelligence, data breaches, and security innovations from around the world.",
   url: "https://offset7.com/newss",
   isPartOf: {
    "@type": "WebSite",
    name: "Offset7",
    url: "https://offset7.com",
   },
   about: {
    "@type": "Thing",
    name: "Cybersecurity",
   },
  }),
 }}
/>;
