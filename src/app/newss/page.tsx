"use client";
import React from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import Link from "next/link";
import Script from "next/script";

const newsItems = [
    {
      author: "Sarah Mitchell",
      time: "4 hours ago",
      tag: "World",
      tagColor: "#FFDCE0",
      tagTextColor: "#E5223A",
      title:
        "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
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
  // import React from "react";
  // import { useState } from "react";
  // import Image from "next/image";
  // import Footers from "@/app/components/footers/page";
  // import Headers from "@/app/components/headers/page";
  // import Script from "next/script";
  // import Link from "next/link";



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
    // const [active, setActive] = useState("tools");
  

 return (
  <>
   <Headers />

   <div className="container">

    <div className="flex flex-row items-center gap-2 flex-wrap">
     <div className="text-neutral-500 text-sm sm:text-xl font-medium">Home</div>
     <div className="w-px h-4 sm:h-6 bg-[#E5223A]"></div>
     <div className="text-neutral-500 text-sm sm:text-xl font-medium">General News</div>
     <div className="w-px h-4 sm:h-6 bg-[#E5223A]"></div>
     <div className="text-[#E5223A] text-sm sm:text-xl font-medium">News Detail</div>
    </div>

    <div className=" flex gap-6   flex-col lg:flex-row   mt-[50px]">
     {/* Left Section */}
{/* <div> */}
<div className="w-full lg:w-[65%] flex flex-col gap-y-[22px]">

{newsItems.map((item, index) => (

  <Link href="/newss/general-news"
    key={index}
    className="  gap-4  flex flex-col md:flex-row w-full h-auto bg-stone-50 rounded-[20.65px] p-2 sm:p-3 md:p-4  " >



<div className="">
  <Image
    src="/images/lights.png"
    alt="board"
    height={225}
    width={332}
    className="w-full h-full lg:w-[332px] lg:h-[225px] rounded-xl object-cover"
  />
</div>


    <div className=" w-full  flex flex-col  pr-2">
      <div className="flex flex-wrap justify-between gap-2 sm:gap-3 mb-3">
        <div className="flex items-center">
          <Image
            src="/sarah.svg"
            alt={`${item.author} Image`}
            height={39}
            width={39}
            className="min-w-[39px] min-h-[39px]"
          />
          <div className="ml-3 text-xs sm:text-sm md:text-md text-[#1C1B35]">
            By {item.author}
            <span className="ml-1 text-[#959595] text-xs sm:text-sm md:text-md">
              | {item.time}
            </span>
          </div>
        </div>

        <div
          className="px-3 py-[3px] rounded-3xl flex items-center"
          style={{ backgroundColor: item.tagColor }}
        >
          <div
            className="text-sm sm:text-sm md:text-md"
            style={{ color: item.tagTextColor }}
          >
            {item.tag}
          </div>
        </div>
      </div>

      <div>
        {/* <div  className="mt-2 text-sm sm:text-base lg:text-lg text-[#1C1B35]">
          {item.title}
        </div> */}
          <div  className="   sm:text-base text-xl font-medium md:text-2xl lg:text-3xl text-[#1C1B35]">
          {item.title}
        </div>


        <div className="mt-3 flex justify-between items-center">
          <div className="text-xs sm:text-sm lg:text-base text-[#FF475E] font-bold">
            {item.category}
          </div>
        </div>
      </div>
    </div>
  </Link>
))}
</div>



{/* Right Section */}

{/* <div className="w-full lg:w-[35%]">

<div className=" flex flex-col sm:flex-row gap-4 ">
  <div className="w-full sm:w-1/2 h-11 p-2 bg-[#E5223A] rounded-lg flex justify-center items-center gap-2 cursor-pointer">
    <div className="text-white text-xl font-medium">Tools Posts</div>
  </div>

  <div className="mb-[19px] w-full sm:w-1/2 h-11 bg-stone-50 p-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer">
    <div className="text-neutral-500 text-xl font-medium">Education Posts</div>
  </div>
</div>





<div className="flex flex-col gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="w-full lg:justify-between flex h-auto self-stretch mt-[19px] sm:p-[2px] bg-stone-50 rounded-[20.65px] gap-[19px]"
        >
          <div>
            <Image
              src={card.image}
              alt="board"
              height={140}
              width={140}
              className="w-full max-w-[134px] h-[140px] rounded-xl object-cover"
            />
          </div>

          <div className="w-full pr-0">
            <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 sm:mb-3">
              <Image
                src={card.authorImage}
                alt="Author"
                height={34}
                width={34}
                className="sm:h-[20px] sm:w-[20px] md:h-[34px] md:w-[34px] w-8 h-8 lg:w-12 lg:h-12"
              />
              <div className="flex">
                <div className="mt-2 lg:mt-[7] text-[#1C1B35] text-xs sm:text-sm md:text-sm lg:text-base">
                  By {card.authorName}
                  <span className="ml-[4px] text-[#959595] text-xs sm:text-sm md:text-sm lg:text-base">
                    | {card.time}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[#1C1B35] text-sm sm:text-sm md:text-sm lg:text-lg">
              {card.title}
            </div>

            <div className="flex justify-between items-center">
              <div className="sm:text-sm md:text-sm text-[#FF475E] text-xs lg:text-base font-bold">
                {card.category}
              </div>
              <Image
                src={card.arrow}
                alt="Red Arrow"
                height={35}
                width={35}
                className="w-7 h-7 lg:w-5 lg:h-5 sm:w-7 sm:h-7 bg-[#E5223A]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

  </div> */}



       {/* Right Section */}
  
  













    </div>
   </div>

   <Footers />

   {/* Structured data for news listing page */}
   <Script
    id="news-listing-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Cybersecurity News & Updates | Offset7",
      "description": "Stay informed with the latest cybersecurity news, threat intelligence, data breaches, and security innovations from around the world.",
      "url": "https://offset7.com/newss",
      "isPartOf": {
       "@type": "WebSite",
       "name": "Offset7",
       "url": "https://offset7.com"
      },
      "about": {
       "@type": "Thing",
       "name": "Cybersecurity"
      }
     })
    }}
   />
  </>
 );
};

export default Page;
