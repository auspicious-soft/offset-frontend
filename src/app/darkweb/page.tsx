// "use client";
// import React from "react";
// import Image from "next/image";
// import Footers from "@/app/components/footers/page";
// import Headers from "@/app/components/headers/page";
// import Link from "next/link";
// import Script from "next/script";

// const newsItems = [
//   {
//     author: "Sarah Mitchell",
//     time: "4 hours ago",
//     tag: "Dark Web",
//     tagColor: "#FFDCE0",
//     tagTextColor: "#E5223A",
//     title: "Major Darknet Marketplace Taken Down in International Operation",
//     category: "DARK WEB",
//   },
//   {
//     author: "John Carter",
//     time: "6 hours ago",
//     tag: "Dark Web",
//     tagColor: "#FFDCE0",
//     tagTextColor: "#E5223A",
//     title: "New Ransomware Group Emerges on Dark Web Forums",
//     category: "DARK WEB",
//   },
//   {
//     author: "Emma Stone",
//     time: "8 hours ago",
//     tag: "Dark Web",
//     tagColor: "#FFDCE0",
//     tagTextColor: "#E5223A",
//     title: "Leaked Healthcare Data Surfaces on Dark Web Markets",
//     category: "DARK WEB",
//   },
//   {
//     author: "Michael Brown",
//     time: "12 hours ago",
//     tag: "Dark Web",
//     tagColor: "#FFDCE0",
//     tagTextColor: "#E5223A",
//     title: "Dark Web Monitoring Reveals New Cyber Attack Patterns",
//     category: "DARK WEB",
//   },
//   {
//     author: "Lisa Anderson",
//     time: "1 day ago",
//     tag: "Dark Web",
//     tagColor: "#FFDCE0",
//     tagTextColor: "#E5223A",
//     title: "Cryptocurrency Theft Ring Uncovered Through Dark Web Analysis",
//     category: "DARK WEB",
//   },
// ];

// const cardData = [
//   {
//     image: "/images/board.png",
//     authorImage: "/sarah.svg",
//     authorName: "Sarah Mitchell",
//     time: "4 hours ago",
//     title: "Dark Web Marketplace Analysis: New Trends in Cybercrime",
//     category: "DARK WEB",
//     arrow: "/redarrow.svg",
//   },
//   {
//     image: "/images/mobile.png",
//     authorImage: "/sarah.svg",
//     authorName: "John Carter",
//     time: "6 hours ago",
//     title: "Ransomware Groups Shift Tactics on Dark Web Forums",
//     category: "DARK WEB",
//     arrow: "/redarrow.svg",
//   },
//   {
//     image: "/images/mobile.png",
//     authorImage: "/sarah.svg",
//     authorName: "Emma Stone",
//     time: "8 hours ago",
//     title: "Stolen Credentials Database Discovered on Dark Web",
//     category: "DARK WEB",
//     arrow: "/redarrow.svg",
//   },
//   {
//     image: "/images/mobile.png",
//     authorImage: "/sarah.svg",
//     authorName: "Michael Brown",
//     time: "12 hours ago",
//     title: "Dark Web Intelligence: Latest Cybercriminal Activities",
//     category: "DARK WEB",
//     arrow: "/redarrow.svg",
//   },
// ];

// const Page = () => {
//  return (
//   <>
//    <Headers />
//    {/* <div className=" px-4 sm:px-6 md:px-10 mb-[40px] sm:mb-[59px] md:mb-[60px] lg:mb-[119px] lg:px-[100px] mt-[50px]"> */}
//    <div className="container">

//     <div className="flex flex-row items-center gap-2 flex-wrap">
//      <div className="text-neutral-500 text-sm sm:text-xl font-medium">Home</div>
//      <div className="w-px h-4 sm:h-6 bg-[#E5223A]"></div>
//      <div className="text-neutral-500 text-sm sm:text-xl font-medium">General News</div>
//      <div className="w-px h-4 sm:h-6 bg-[#E5223A]"></div>
//      <div className="text-[#E5223A] text-sm sm:text-xl font-medium">News Detail</div>
//     </div>

//     <div className=" flex gap-6   flex-col lg:flex-row   mt-[50px]">

// {/* Left Section */}

// <div className="w-full lg:w-[65%] flex flex-col gap-y-[22px]">

// {newsItems.map((item, index) => (

//   <Link href="/darkweb/detail"
//     key={index}
//     className="  gap-4  flex flex-col md:flex-row w-full h-auto bg-stone-50 rounded-[20.65px] p-2 sm:p-3 md:p-4  " >



// <div className="">
//   <Image
//     src="/images/hospital.png"
//     alt="board"
//     height={225}
//     width={332}
//     className="w-full h-full lg:w-[332px] lg:h-[225px] rounded-xl object-cover"
//   />
// </div>


//     <div className=" w-full  flex flex-col  pr-2">
//       <div className=" flex flex-wrap justify-between gap-2 sm:gap-3 mb-3">
//         <div className="flex items-center">
//           <Image
//             src="/sarah.svg"
//             alt={`${item.author} Image`}
//             height={39}
//             width={39}
//             className="min-w-[39px] min-h-[39px]"
//           />
//           <div className="ml-3 text-xs sm:text-sm md:text-md text-[#1C1B35]">
//             By {item.author}
//             <span className="ml-1 text-[#959595] text-xs sm:text-sm md:text-md">
//               | {item.time}
//             </span>
//           </div>
//         </div>

//         <div
//           className="px-3 py-[3px]  rounded-3xl flex items-center"
//           style={{ backgroundColor: item.tagColor }}
//         >
//           <div
//             className="text-sm sm:text-sm md:text-md"
//             style={{ color: item.tagTextColor }}
//           >
//             {item.tag}
//           </div>
//         </div>
//       </div>

//       <div>
//         <div  className="   sm:text-base text-xl font-medium md:text-2xl lg:text-3xl text-[#1C1B35]">
//           {item.title}
//         </div>

//         <div className="mt-3 flex justify-between items-center">
//           <div className="text-xs sm:text-sm lg:text-base text-[#FF475E] font-bold">
//             {item.category}
//           </div>
//         </div>
//       </div>
//     </div>
//   </Link>
// ))}
// </div>



// {/* Right Section */}

// <div className="w-full lg:w-[35%]">

// <div className=" flex flex-col sm:flex-row gap-4 ">
//   <div className="w-full sm:w-1/2 h-11 p-2 bg-[#E5223A] rounded-lg flex justify-center items-center gap-2 cursor-pointer">
//     <div className="text-white text-xl font-medium">Tools Posts</div>
//   </div>

//   <div className="mb-[19px] w-full sm:w-1/2 h-11 bg-stone-50 p-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer">
//     <div className="text-neutral-500 text-xl font-medium">Education Posts</div>
//   </div>
// </div>





// <div className="flex flex-col gap-4">
//       {cardData.map((card, index) => (
//         <div
//           key={index}
//           className="   w-full lg:justify-between flex h-auto self-stretch mt-[19px] sm:p-[2px] bg-stone-50 rounded-[20.65px] gap-[19px]" >
//           <div className="">
//             <Image
//               src={card.image}
//               alt="board"
//               height={140}
//               width={140}
//               className=" lg:w-full w-full max-w-[134px] h-[140px] rounded-xl object-cover"
//             />
//           </div>


//           <div className=" w-full pr-0">
//             <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 sm:mb-3">
//               <Image
//                 src={card.authorImage}
//                 alt="Author"
//                 height={34}
//                 width={34}
//                 className="sm:h-[20px] sm:w-[20px] md:h-[34px] md:w-[34px] w-8 h-8 lg:w-12 lg:h-12"
//               />
//               <div className="flex">
//                 <div className="mt-2 lg:mt-[7] text-[#1C1B35] text-xs sm:text-sm md:text-sm lg:text-base">
//                   By {card.authorName}
//                   <span className="ml-[4px] text-[#959595] text-xs sm:text-sm md:text-sm lg:text-base">
//                     | {card.time}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="text-[#1C1B35] text-sm sm:text-sm md:text-sm lg:text-lg">
//               {card.title}
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="sm:text-sm md:text-sm text-[#FF475E] text-xs lg:text-base font-bold">
//                 {card.category}
//               </div>
//               <Image
//                 src={card.arrow}
//                 alt="Red Arrow"
//                 height={35}
//                 width={35}
//                 className="w-7 h-7 lg:w-5 lg:h-5 sm:w-7 sm:h-7 bg-[#E5223A]"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//   </div>







//     </div>
//    </div>

//    <Footers />

//    {/* Structured data for darkweb incidents page */}
//    <Script
//     id="darkweb-listing-schema"
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//      __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "CollectionPage",
//       "name": "Darkweb Incidents & Threat Intelligence | Offset7",
//       "description": "Monitor darkweb incidents, data breaches, and emerging threats. Get insights into ransomware attacks, leaked credentials, and cybercriminal activities.",
//       "url": "https://offset7.com/darkweb",
//       "isPartOf": {
//        "@type": "WebSite",
//        "name": "Offset7",
//        "url": "https://offset7.com"
//       },
//       "about": {
//        "@type": "Thing",
//        "name": "Darkweb Threat Intelligence"
//       }
//      })
//     }}
//    />
//   </>
//  );
// };

// export default Page;





"use client";
import React from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import Link from "next/link";
import Script from "next/script";
import { useState, useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    author: "Sarah Mitchell",
    time: "4 hours ago",
    tag: "Ransomware",
    tagColor: "#FFDCE0",
    tagTextColor: "#E5223A",
    title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
    category: "GENERAL WEB",
  },
  {
    author: "Sarah Mitchell",
    time: "4 hours ago",
    tag: "Ransomware",
    tagColor: "#FFDCE0",
    tagTextColor: "#E5223A",
    title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
    category: "GENERAL WEB",
  },
  {
    author: "Sarah Mitchell",
    time: "4 hours ago",
    tag: "Ransomware",
    tagColor: "#FFDCE0",
    tagTextColor: "#E5223A",
    title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
    category: "GENERAL WEB",
  },
  {
    author: "Sarah Mitchell",
    time: "4 hours ago",
    tag: "Ransomware",
    tagColor: "#FFDCE0",
    tagTextColor: "#E5223A",
    title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
    category: "GENERAL WEB",
  },
  {
    author: "Sarah Mitchell",
    time: "4 hours ago",
    tag: "Ransomware",
    tagColor: "#FFDCE0",
    tagTextColor: "#E5223A",
    title: "Breaking Cybersecurity News: Latest Threats, Breaches, and Innovations in the Digital World",
    category: "GENERAL WEB",
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

const Page = () => {
  const [active, setActive] = useState("tools");

  const totalItems = newsItems.length; // Use actual length of newsItems
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to page 1 on per-page change
  };

  // Slice newsItems based on current page and items per page
  const paginatedNewsItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return newsItems.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, newsItems]);

  return (
    <>
      <div className="bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
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
            <div className="md:mb-[102px] mb-[20px] w-full lg:w-[65%] flex flex-col gap-y-[22px]">
              {paginatedNewsItems.map((item, index) => (
                <Link
                  href="/newss/general-news"
                  key={index}
                  className="gap-4 flex flex-col md:flex-row w-full h-auto bg-stone-50 rounded-3xl p-2 sm:p-3 md:p-4"
                >
                  <div className="">
                    <Image
                      src="/images/hospital.png"
                      alt="board"
                      height={225}
                      width={332}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>

                  <div className="w-full flex flex-col pr-2">
                    <div className="flex flex-wrap justify-between gap-2 sm:gap-3 mb-3">
                      <div className="flex items-center">
                        <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                          <Image
                            src="/sarah.svg"
                            alt="Author"
                            height={34}
                            width={34}
                            className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                          />

                          <div className="flex justify-center align-middle xl:text-lg text-md">
                            <div className="text-[#1C1B35]">
                              By {item.author}
                              <span className="ml-[4px] text-[#959595]">| {item.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="px-[13px] py-[3px]  rounded-3xl flex items-center justify-center"
                        style={{ backgroundColor: item.tagColor }}
                      >
                        <div className="text-base sm:text-base md:text-base px-[14px]" style={{ color: item.tagTextColor }}>
                          {item.tag}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xl font-medium md:text-2xl 2xl:text-3xl text-[#1C1B35]">{item.title}</div>

                      <div className="mt-3 flex justify-between items-center">
                        <div className="text-sm text-[#FF475E] font-bold">{item.category}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}



{/* Pagination Controls */}
              {/* <div className=" flex justify-center items-center gap-[80px] mt-4">
                <div className="flex">
                  <div className="flex items-center gap-2 relative">
                    <label className="2xl:text-xl text-md text-neutral-600">News per page:</label>
                    <div className="relative ml-[16px] mr-[32px]">
                      <select
                        className="rounded-md appearance-none 2xl:py-[18px] 2xl:px-[16px] py-[15px] px-[16px]  border-[1.39px] border-zinc-200 shadow-[0px_1.3947858810424805px_4.184357643127441px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-10"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                      >
                        <option value={4}>4</option>
                        <option value={10}>10</option>
                        <option value={12}>12</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="2xl:text-xl text-md text-neutral-600">
                      {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} News
                    </span>
                  </div>
                </div>

                <div className="flex gap-[25px]">
                  <div className="flex items-center gap-[25px] relative">
                    <div className="relative">
                      <select
                        className="rounded-md appearance-none  border-[1.39px] border-zinc-200 shadow-[0px_1.3947858810424805px_4.184357643127441px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-8 2xl:py-[18px] 2xl:px-[16px] py-[15px] px-[16px]"
                        value={currentPage}
                        onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                      >
                        {Array.from({ length: totalPages }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={16} />
                    </div>
                    <label className="text-md text-neutral-600">of {totalPages} pages</label>
                  </div>

                  <div className="flex items-center gap-[17px]">
                    <button
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                      className="rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[15px] px-[16px] border-[1.39px] border-zinc-200 shadow-[0px_1.3947858810424805px_4.184357643127441px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50"
                    >
                      <ChevronLeft className="text-neutral-600" size={18} />
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className="rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[15px] px-[16px] border-[1.39px] border-zinc-200 shadow-[0px_1.3947858810424805px_4.184357643127441px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50"
                    >
                      <ChevronRight className="text-neutral-600" size={18} />
                    </button>
                  </div>
                </div>
              </div> */}


<div className="flex flex-col lg:flex-row justify-between lg:justify-center items-center gap-6 lg:gap-[80px] mt-4 px-4">
  {/* Left side: Items per page + Current position */}
  <div className=" 2xl:text-xl sm:text-md text-sm  flex  sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
    <div className="flex items-center gap-2 relative">
      <label className=" text-neutral-600">News per page:</label>
      <div className=" relative ml-[8px] sm:ml-[16px] mr-[16px] sm:mr-[32px]">
        <select
          className="cursor-pointer rounded-md appearance-none 2xl:py-[18px]  py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-10"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={4}>4</option>
          <option value={10}>10</option>
          <option value={12}>12</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={18} />
      </div>
    </div>

 
    <div className="flex items-center justify-center h-full min-h-[40px] gap-2">
  <span className=" text-neutral-600">
    {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} News
  </span>
</div>
  </div>

  {/* Right side: Page selection and navigation */}
  <div className=" 2xl:text-xl sm:text-md text-sm flex  sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
    <div className=" flex items-center gap-3 sm:gap-[25px] relative">
      <div className="relative">
        <select
          className="cursor-pointer rounded-md appearance-none border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-8 2xl:py-[18px]  py-[12px] px-[14px]"
          value={currentPage}
          onChange={(e) => setCurrentPage(parseInt(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={16} />
      </div>
      <label className=" text-neutral-600">of {totalPages} pages</label>
    </div>

    <div className="flex items-center gap-3 sm:gap-[17px]">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="cursor-pointer rounded-md 2xl:py-[18px]  2xl:px-[16px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50"
      >
        <ChevronLeft className="text-neutral-600" size={18} />
      </button>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="cursor-pointer rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50"
      >
        <ChevronRight className="text-neutral-600" size={18} />
      </button>
    </div>
  </div>
</div>




            </div>

{/* Right Section */}
            <div className="mb-[25px] w-full lg:w-[35%]">
              <div className="h-auto sm:h-14 bg-stone-50 px-[14px] py-[10px] sm:py-[5px] flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl mb-[19px]">
                <div
                  onClick={() => setActive("tools")}
                  className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
                    active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"
                  }`}
                >
                  <div className={`text-l font-medium ${active === "tools" ? "text-white" : "text-[#727272]"}`}>Recent Posts</div>
                </div>

                <div
                  onClick={() => setActive("education")}
                  className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
                    active === "education" ? "bg-[#E5223A]" : "bg-stone-50"
                  }`}
                >
                  <div className={`text-l font-medium ${active === "education" ? "text-white" : "text-[#727272]"}`}>Popular Posts</div>
                </div>
              </div>

{/* top  */}
              {active === "tools" && (
                <div className="mt-[30px] md:mt-0 space-y-5">
                  {cardss.map((cards, index) => (
                    <div key={index} className="py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]">
                      <div className="">
                        <Image
                          src={cards.boardImg}
                          alt="board"
                          height={140}
                          width={134}
                          unoptimized
                          className="w-full h-[140px] md:h-auto sm:w-[134px] rounded-xl object-cover"
                        />
                      </div>

                      <div className="w-full pr-0">
                        <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                          <Image
                            src={cards.avatarImg}
                            alt="Author"
                            height={34}
                            width={34}
                            className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                          />
                          <div className="flex justify-center align-middle xl:text-lg text-md">
                            <div className=" text-[#1C1B35] ">
                              By {cards.author}
                              <span className="ml-[4px] text-[#959595] ">| {cards.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[#1C1B35] text-m sm:text-m md:text-m lg:text-lg">{cards.title}</div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-[#FF475E] font-bold">{cards.tag}</div>
                          <Image
                            src="/Arrow.svg"
                            alt="Red Arrow"
                            height={35}
                            width={35}
                            className="xl:w-[35px] xl:h-[35px] 2xl:w-[35px] 2xl:h-[35px] w-5 h-5 sm:w-5 sm:h-5 bg-[#E5223A] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}


{/* bottom  */}
              {active === "education" && (
                <div className="space-y-5">
                  {educationCards.map((cards, index) => (
                    <div key={index} className="py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]">
                      <div className="">
                        <Image
                          src={cards.boardImg}
                          alt="board"
                          height={140}
                          width={134}
                          className="w-full h-[140px] md:h-auto sm:w-[134px] rounded-xl object-cover"
                        />
                      </div>

                      <div className="w-full pr-0">
                        <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                          <Image
                            src={cards.avatarImg}
                            alt="Author"
                            height={34}
                            width={34}
                            className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                          />
                          <div className="flex justify-center align-middle xl:text-lg text-md">
                            <div className=" text-[#1C1B35] ">
                              By {cards.author}
                              <span className="ml-[4px] text-[#959595] ">| {cards.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[#1C1B35] text-m sm:text-m md:text-m lg:text-lg">{cards.title}</div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-[#FF475E] font-bold">{cards.tag}</div>
                          <Image
                            src="/Arrow.svg"
                            alt="Red Arrow"
                            height={35}
                            width={35}
                            className="xl:w-[35px] xl:h-[35px] 2xl:w-[35px] 2xl:h-[35px] w-5 h-5 sm:w-5 sm:h-5 bg-[#E5223A] rounded-full"
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

        <Footers />
      </div>
    </>
  );
};

export default Page;

<Script
  id="news-listing-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Cybersecurity News & Updates | Offset7",
      description:
        "Stay informed with the latest cybersecurity news, threat intelligence, data breaches, and security innovations from around the world.",
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
/>
