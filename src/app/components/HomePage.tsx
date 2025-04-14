"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import Script from "next/script";
import Link from "next/link";

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



const HomePage = () => {
  const [active, setActive] = useState("tools");



  return (
  <>
  <div className=" bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
   <Headers />
<main>
    <section className="news-section">    
    <div className="container">
      <div className="  flex flex-col lg:flex-row  gap-[44px]">
     {/* Left Section */}

     <div className=" w-full lg:w-[65%] mx-auto mt-[59px] ">
      <div className="relative w-full">

       <Image src="/images/mainnews.png" alt="earth" width={955} height={425} className="w-full h-[425px]  sm:h-full   object-cover rounded-[30px]" priority />

       <div className="p-2 absolute top-0 left-0 w-full">
        <div className="flex justify-between items-start p-2 sm:p-3 md:p-4 lg:p-5">
         <div
          className="text-white font-bold break-words max-w-[70%]
          text-sm sm:text-base md:text-lg lg:text-2xl xl:text-2xl"
         >
          MAIN NEWS
         </div>
         <div className="flex items-start gap-2 sm:gap-3">
          <div className="backdrop-blur-sm bg-white/30 rounded-full p-2 w-fit">
           <Image src="/leftarrow.svg" alt="left arrow" height={43} width={43} className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>

          <div className="backdrop-blur-sm bg-white rounded-full p-2 w-fit">
           <Image src="/rightarrow.svg" alt="left arrow" height={43} width={43} className="w-3 h-3 sm:w-4 sm:h-4 bg-white" />
          </div>
         </div>
        </div>

        <div className="h-px ml-2 sm:ml-3 md:ml-4 w-full" style={{ background: "linear-gradient(to right, #E5223A 33%, rgba(255, 255, 255, 0.1) 33%)" }} />
       </div>

       <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 md:p-4 lg:p-5">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
         <Image src="/sarah.svg" alt="Sarah Image" width={34} height={34} className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
         <div className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base">By Sarah Mitchell</div>
         <div className="text-[#959595] text-[10px] sm:text-xs md:text-sm lg:text-base">| 4 hours ago</div>
        </div>

        <div
         className="text-white leading-snug
        text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2"
        >
         Dark Web Market Shutdown: Authorities Seize Illegal Data Trading Hub
        </div>

        <div className="text-white text-[10px] sm:text-xs md:text-sm">
         DARK WEB <span className="text-[#959595]">| 10 minutes read</span>
        </div>
       </div>
      </div>
     </div>

     {/* Right Section */}

     <div className=" w-full lg:w-[35%]  ">

      {/* buttons  */}

<div className=" h-14 bg-stone-50 px-[14px]  py-[5px] flex flex-col sm:flex-row gap-4 rounded-3xl mb-[19px]  sm:mb-[50px] lg:mt-[59px]">
      <div
        onClick={() => setActive("tools")}
        className={` w-full sm:w-1/2 h-11 py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
          active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"
        }`}
      >
        <div
          className={`text-l font-medium ${
            active === "tools" ? "text-white" : "text-[#727272]"
          }`}
        >
          Tools Posts
        </div>
      </div>

      <div
        onClick={() => setActive("education")}
        className={` w-full sm:w-1/2 h-11 py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
          active === "education" ? "bg-[#E5223A]" : "bg-stone-50"
        }`}
      >
        <div
          className={`text-l font-medium ${
            active === "education" ? "text-white" : "text-[#727272]"
          }`}
        >
          Education Posts
        </div>
      </div>
    </div>



      {/* right top  */}


{active === "tools" && (
  <div className="space-y-5 2xl:space-y-14">
    {cardss.map((cards, index) => (
      <div
        key={index}
        className=" py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]"
      >
        <div className="">
          <Image
            src={cards.boardImg}
            alt="board"
            height={140}
            width={134}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="w-full pr-0">
          <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 ">
            <Image
              src={cards.avatarImg}
              alt="Author"
              height={34}
              width={34}
              className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
            />
            <div className="flex justify-center align-middle">
              <div className="mt-2 text-[#1C1B35] text-xs">
                By {cards.author}
                <span className="ml-[4px] text-[#959595] text-xs">| {cards.time}</span>
              </div>
            </div>
          </div>

          <div className="text-[#1C1B35] text-m sm:text-m md:text-m lg:text-lg">
            {cards.title}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-[#FF475E] font-bold">{cards.tag}</div>
            <Image
            src="/redroundarrow.svg"
            alt="Red Arrow"
            height={35}
            width={35}
            className=" lg:w-5 lg:h-5 sm:w-7 sm:h-7   xl:w-6 xl:h-6  bg-[#E5223A]   rounded-full p-[4px]"
          />
           
          </div>
        </div>
      </div>
    ))}
  </div>
)}

{active === "education" && (
  <div className="space-y-5 2xl:space-y-14">
    {educationCards.map((cards, index) => (
      <div
      key={index}
      className=" py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]"
    >
      <div className="">
        <Image
          src={cards.boardImg}
          alt="board"
          height={140}
          width={134}
          className="rounded-xl object-cover"
        />
      </div>

      <div className="w-full pr-0">
        <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 ">
          <Image
            src={cards.avatarImg}
            alt="Author"
            height={34}
            width={34}
            className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
          />
          <div className="flex justify-center align-middle">
            <div className="mt-2 text-[#1C1B35] text-xs">
              By {cards.author}
              <span className="ml-[4px] text-[#959595] text-xs">| {cards.time}</span>
            </div>
          </div>
        </div>

        <div className="text-[#1C1B35]  text-m sm:text-m md:text-m lg:text-lg">
          {cards.title}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-[#FF475E] font-bold">{cards.tag}</div>
          <Image
            src="/redroundarrow.svg"
            alt="Red Arrow"
            height={35}
            width={35}
            className="w-7 h-7 lg:w-5 lg:h-5 sm:w-7 sm:h-7 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-[#E5223A]   rounded-full p-[4px]"
          />
        </div>
      </div>
    </div>
    ))}
  </div>
)}



     </div>


    </div>
    </div>
    </section>

    {/* red  */}
    <div className="container">

    <div className="mt-[75px] ">
     <div className="   ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
        {[
         {
          icon: "/6.svg",
          number: "6",
          label: "Global Credentials (Monthly)",
         },
         {
          icon: "/+1b.svg",
          number: "0",
          label: "Ransomware Victims (Monthly)",
         },
         {
          icon: "/0.svg",
          number: "+1B",
          label: "Global Credentials (Total)",
         },
         {
          icon: "/+5k.svg",
          number: "+5k",
          label: "Ransomware Victims (Total)",
         },
        ].map((item, idx) => (
         <div key={idx} className="flex items-center gap-4 bg-red-50 rounded-[20px] p-[19px]">
          <div className="flex-shrink-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-red-100 flex items-center justify-center rounded-full">
           <Image src={item.icon} alt="icon" width={40} height={40} className="opacity-100" />
          </div>
          <div>
           <div className="text-gray-800 text-4xl sm:text-2xl font-bold">{item.number}</div>
           <div className="text-gray-800  text-l sm: lg:text-xl  font-normal ">{item.label}</div>
          </div>
         </div>
        ))}
       </div>

       <div className="  p-6 flex flex-col justify-between rounded-[30px] gap-4 bg-[url('/images/pinkFrame.png')] bg-cover bg-center">
        <div className=" mt-[35px]">
         <div className="flex gap-[17px]">
        
          <div className="w-[4px] h-[34px] bg-red-600 rounded-t-lg rounded-b-lg" />

          <div className=" text-lg sm:text-xl font-semibold text-gray-900 mb-1">Check Your Email for Leaks</div>
         </div>
         <p className="text-sm text-gray-600 ml-[17px]">Enter your email address below to check if it has been compromised in malware leaks or cyber incidents.</p>
        </div>

        <div className="  relative w-full max-w-md px-4 py-[9px] sm:px-0">
         <Image src="/Message.svg" alt="Message box" height={20} width={20} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
         <input type="email" placeholder="Enter your Email" className="  font-[#7E7F91] w-full pl-10 text-md pr-20 sm:pr-24 py-3 sm:py-4 border border-[#7E7F91] focus:outline-none rounded-md " />

         <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-[10px] sm:py-[10px] sm:px-4 bg-[#E5223A] hover:bg-[#E5223A] text-white rounded-md text-xs sm:text-sm cursor-pointer">
          Check Now
         </button>
        </div>
       </div>
      </div>
     </div>
    </div>
</div>
  

   {/* last second  */}
   <div className="container">

   <div className=" mt-[96px]   ">
    <div className=" flex flex-col gap-[22px] lg:flex-row lg:flex-nowrap w-full">
     {[1, 2, 3].map((_, idx) => (
      <div key={idx} className=" flex-1 min-w-[300px]  bg-stone-50 rounded-[20px]">
       <div className="relative inline-block w-full ">
        <Image src="/images/board.png" 
        alt="board"  
        height={356} width={634}
        className="   rounded-t-2xl 
 object-cover" />
        <div className="absolute top-0 left-0 w-full">
         <div className="flex w-full justify-between items-start p-3 sm:p-4 ">
          <div className="text-xl font-bold text-white sm:text-lg md:text-lg lg:text-lg xl:text-lg break-words max-w-[70%]">POST DOUBLE COLUMNS 1</div>
         </div>
         <div className="h-px ml-2 sm:ml-3 md:ml-4 w-full" style={{ background: "linear-gradient(to right, #E5223A 33%, rgba(255, 255, 255, 0.1) 33%)" }} />
        </div>
       </div>

       {/* text */}
       <div className="ml-[22px] mt-[37px] w-auto">
        <div className="justify-start text-gray-800 text-2xl font-medium">Zero-Day Exploit Discovered in Popular Enterprise Software</div>

        <div className=" text-[#FF475E] text-base font-bold text-[10px] sm:text-xs lg:text-sm">
         GENERAL WEB <span className="text-[#959595] text-sm font-normal">| 4 hours ago</span>
        </div>

        <div className="h-0 mt-[23px] mb-[23px] border-t border-black/5"></div>

        <div className="space-y-6">
         {cards.map((card, index) => (
          <div key={index} className="w-full lg:justify-between flex h-auto self-stretch   bg-stone-50 rounded-[20.65px] gap-[19px]">
           <div className="">
            <Image src={card.boardImg} alt="board" height={140} width={134} className="rounded-xl object-cover" />
           </div>

           <div className=" w-full pr-0">
            <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 ">
             <Image src={card.avatarImg} alt="Author" height={34} width={34} className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px]  w-8 h-8 " />
             <div className="  flex justify-center items-center">
              <div className="text-[#1C1B35] text-xs">
               By {card.author}
               <span className="ml-[4px] text-[#959595] text-xs ">| {card.time}</span>
              </div>
             </div>
            </div>

            <div className="text-[#1C1B35]   text-lg   ">{card.title}</div>

            <div className="flex justify-between items-center">
             <div className="text-sm  text-[#FF475E]  font-bold">{card.tag}</div>
             <Image src="/Arrow.svg" 
             alt="Red Arrow" 
             height={29} width={29} 
             className=" lg:w-5 lg:h-5 sm:w-7 sm:h-7 bg-[#E5223A]   rounded-full p-[4px]" />
            </div>
           </div>
          </div>
         ))}
        </div>
       </div>
      </div>
     ))}
    </div>

    {/* red frame playstore */}

    <div className="bg-[url('/images/playstoreBGImage.png')] bg-cover bg-center relative mt-[60px] md:mt-[126px] mb-[60px] md:mb-[126px] px-4 md:px-[50px] flex flex-col md:flex-row bg-[#E5223A] rounded-xl overflow-hidden">
     <div className="w-full md:w-1/2 pt-[60px] md:pt-[110px] z-10">
      <div className="flex gap-[16px]">
       <div className="flex items-stretch rounded-full overflow-hidden">
        <Image src="/verticalWhiteLine.svg" alt="Vertical line" width={3} height={44} className="h-full object-cover" />
       </div>
       <div className="text-white text-3xl md:text-5xl font-bold">Get Offset7 Today</div>
      </div>

      <div className="mt-4 text-white text-base md:text-xl font-normal">Stay ahead of cyber threats with Offset7! Download the app for free and gain access to powerful tools, real-time monitoring, and actionable insights to protect your organization from evolving digital risks.</div>

      <div className="flex flex-wrap gap-x-6 mt-6 md:mt-[32px]">
       {["Live Threat Monitoring", "Cybersecurity Insights", "Advanced Data Protection"].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 mb-2 w-full sm:w-auto">
         <Image src="/check.svg" alt="check" width={21} height={21} className="w-5 h-5 bg-[#E5223A] rounded-full p-[2px]" />
         <div className="text-white text-base md:text-lg font-medium leading-loose">{item}</div>
        </div>
       ))}
      </div>

      <div className="flex flex-wrap gap-4 md:gap-[23px] mt-8 md:mt-[67px] mb-[40px] md:mb-[50px]">
       <Image src="/images/googleplay.png" alt="Google Play" width={160} height={50} className="object-cover w-[140px] md:w-[160px] h-auto" />
       <Image src="/images/applestore.png" alt="App Store" width={160} height={50} className="object-cover w-[140px] md:w-[160px] h-auto" />
      </div>
     </div>

     <div className="w-full md:w-1/2 relative mt-8 md:mt-0 pr-0 md:pr-[20px] flex justify-center md:block">
      <Image src="/images/stackmobiles.png" alt="Mobile Preview" width={707} height={563} className="relative md:absolute bottom-0 md:bottom-[-50px] right-0 w-[80%] md:w-[707px] h-auto z-0" />
     </div>
    </div>
   </div>
   </div>
   </main>
   <Footers />
   </div>
  {/* </div> */}
  </>
  );
};

export default HomePage;

  {/* Add structured data for homepage */}
  <Script
    id="homepage-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Offset7 - Cybersecurity Monitoring & Threat Intelligence",
        "description": "Stay ahead of cyber threats with Offset7. Get real-time monitoring, threat intelligence, and actionable insights to protect your organization.",
        "url": "https://offset7.com",
        "mainEntity": {
          "@type": "Organization",
          "name": "Offset7",
          "url": "https://offset7.com",
          "logo": "https://offset7.com/images/logo.png",
          "sameAs": [
            "https://twitter.com/offset7",
            "https://www.linkedin.com/company/offset7",
            "https://www.facebook.com/offset7"
          ]
        },
        "mainContentOfPage": {
          "@type": "WebPageElement",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Offset7",
            "url": "https://offset7.com"
          }
        },
        "about": {
          "@type": "Thing",
          "name": "Cybersecurity",
          "description": "Professional cybersecurity monitoring and threat intelligence services"
        },
        "offers": {
          "@type": "Offer",
          "name": "Cybersecurity Services",
          "description": "Comprehensive cybersecurity monitoring and threat intelligence solutions"
        }
      })
    }}
  />

  {/* Add Article structured data for news items */}
  <Script
    id="news-articles-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": cards.map((card, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Article",
            "headline": card.title,
            "author": {
              "@type": "Person",
              "name": card.author
            },
            "datePublished": new Date().toISOString(), // Replace with actual publish date
            "image": `https://offset7.com${card.boardImg}`,
            "articleSection": card.tag
          }
        }))
      })
    }}
  />

  {/* Add FAQPage structured data */}
  <Script
    id="faq-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Offset7?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Offset7 is a comprehensive cybersecurity monitoring and threat intelligence platform that helps organizations protect against evolving digital risks."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Offset7 provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Offset7 provides real-time monitoring, threat intelligence, data breach detection, and actionable insights to protect organizations from cyber threats."
            }
          }
        ]
      })
    }}
  />

  {/* Add BreadcrumbList structured data */}
  <Script
    id="breadcrumb-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://offset7.com"
          }
        ]
      })
    }}
  />




