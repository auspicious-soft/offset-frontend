"use client";
import React, { useMemo, useState } from "react";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, ChevronDown } from "lucide-react";

interface Payment {
 id: string;
 date: string;
 invoiceNumber: string;
 status: "Paid" | "Pending" | "Failed";
 amount: string;
}

const cardData = [
 {
  image: "monthlyCredentials.svg",
  pinkImage: "MCPinkImage.svg",
  value: "30",
  label: "Monthly Credentials",
 },
 {
  image: "/globalCredentials.svg",
  pinkImage: "MCPinkImage.svg",
  value: "7332",
  label: "Total Credentials",
 },
];

const cardDataa = [
 { image: "/monthlyCredentials.svg", pinkImage: "/MCPinkImage.svg", value: 12, label: "Label 1" },
 { image: "/globalCredentials.svg", pinkImage: "/pinkMediumBGImage.svg", value: "+1B", label: "Label 2" },
 { image: "/monthlyCredentials.svg", pinkImage: "/MCPinkImage.svg", value: 12, label: "Label 3" },
 { image: "/globalCredentials.svg", pinkImage: "/pinkMediumBGImage.svg", value: "+5K", label: "Label 4" },
];

const data = {
 image: "/images/usa.png",
 pinkImage: "/images/usaBGImage.png",
 value: 2214,
 label: "USA Attacks",
};

const samplePayments: Payment[] = [
 {
  id: "1",
  date: "2023-10-01",
  invoiceNumber: "INV-001",
  status: "Paid",
  amount: "100.00",
 },
 {
  id: "2",
  date: "2023-10-02",
  invoiceNumber: "INV-002",
  status: "Pending",
  amount: "200.00",
 },
 {
  id: "3",
  date: "2023-10-03",
  invoiceNumber: "INV-003",
  status: "Failed",
  amount: "150.00",
 },
];

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

const getStatusColor = (status: string) => {
 switch (status) {
  case "Paid":
   return "bg-green-100 text-green-800";
  case "Pending":
   return "bg-yellow-100 text-yellow-800";
  case "Failed":
   return "bg-red-100 text-red-800";
  default:
   return "bg-gray-100 text-gray-800";
 }
};

const Page = () => {
 const [active, setActive] = useState("tools");
 const [itemsPerPage, setItemsPerPage] = useState(4);
 const [currentPage, setCurrentPage] = useState(1);

 const totalItems = newsItems.length;
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
  setCurrentPage(1);
 };

 const paginatedNewsItems = useMemo(() => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return newsItems.slice(startIndex, endIndex);
 }, [currentPage, itemsPerPage, newsItems]);

 return (
  <>
   <div className="bg-[url('/images/dotsBGImage.png')] bg-size-[100%]">
    <Headers />
    <div className="container">
     <div className="lg:mt-[86px] mt-[20px] md:mt-[30px]  flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
      {/* Conditional Text Rendering */}
      <div className="text-[#1C1B35] text-xl sm:text-xl md:text-2xl xl:text-3xl 2xl:text-5xl font-medium">{active === "tools" ? "Incident Leakages" : "Global Statistics"}</div>

      {/* Buttons */}
      <div className="w-full lg:w-[35%]">
       <div className="h-auto bg-stone-50 px-[14px] py-[10px] sm:py-[5px] flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl mb-[19px]">
        <div onClick={() => setActive("tools")} className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"}`}>
         <div className={`text-l font-medium ${active === "tools" ? "text-white" : "text-[#727272]"}`}>Leakages</div>
        </div>

        <div onClick={() => setActive("education")} className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${active === "education" ? "bg-[#E5223A]" : "bg-stone-50"}`}>
         <div className={`text-l font-medium ${active === "education" ? "text-white" : "text-[#727272]"}`}>Global Statistics</div>
        </div>
       </div>
      </div>
     </div>

     {/* Conditional Rendering Based on Active State */}
     {active === "tools" ? (
      <>
       {/* Leakages Section */}

       <div className="flex flex-wrap gap-6 mt-[20px] md:mt-[30px] lg:mt-[58px]">
  {cardData.map((card, index) => (
    <div
      key={index}
      className="rounded-[35.12px] shadow-[0px_119.587px_140.691px_0px_rgba(205,205,205,0.16)]  outline-[1.32px] outline-gray-200 pt-[19px] pl-[28px] pr-[17px] pb-[51px] bg-white relative w-full md:w-fit"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[24px] md:gap-[56px]">
          <div className="flex gap-2">
            <Image
              src={card.image}
              alt={card.label}
              height={87}
              width={77}
              className="object-contain"
            />
            <Image
              src={card.pinkImage}
              alt={card.label}
              height={87}
              width={77}
              className="object-contain"
            />
          </div>
          <div className="text-black text-4xl md:text-5xl 2xl:text-7xl font-normal">
            {card.value}
          </div>
        </div>
      </div>
      <div className="mt-2 text-black text-xl 2xl:text-2xl font-normal">
        {card.label}
      </div>
    </div>
  ))}
</div>


       {/* Table */}
       <div className="w-full mt-[63px] overflow-hidden">
        <div className="overflow-x-auto">
         <table className="w-full">
          <thead>
           <tr className="text-[#7E7F91] 2xl:text-3xl xl:text-xl text:md">
            <th className="py-3 px-4 text-left font-medium">URL</th>
            <th className="py-3 px-4 text-left font-medium">User Name</th>
            <th className="py-3 px-4 text-left font-medium">Password</th>
            <th className="py-3 px-4 text-left font-medium">Action</th>
           </tr>
          </thead>
          <tbody>
           <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors 2xl:text-3xl xl:text-xl text:md text-[#1C1B35]">
            <td className="py-3 px-4">http://hackerson.com/users/sign_up</td>
            <td className="py-3 px-4">aabb@e.com</td>
            <td className="py-3 px-4">azert******</td>
            <td className="py-3 px-4">
             <button className="cursor-pointer">
              <Image src="Copy.svg" alt="Copy" height={42} width={42} className="" />
             </button>
            </td>
           </tr>
           <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors 2xl:text-3xl xl:text-xl text:md text-[#1C1B35]">
            <td className="py-3 px-4">http://hackerson.com/users/sign_up</td>
            <td className="py-3 px-4">aabb@e.com</td>
            <td className="py-3 px-4">azert******</td>
            <td className="py-3 px-4">
             <button className="cursor-pointer">
              <Image src="Copy.svg" alt="Copy" height={42} width={42} className="" />
             </button>
            </td>
           </tr>
           <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors 2xl:text-3xl xl:text-xl text:md text-[#1C1B35]">
            <td className="py-3 px-4">http://hackerson.com/users/sign_up</td>
            <td className="py-3 px-4">aabb@e.com</td>
            <td className="py-3 px-4">azert******</td>
            <td className="py-3 px-4">
             <button className="cursor-pointer">
              <Image src="Copy.svg" alt="Copy" height={42} width={42} className="" />
             </button>
            </td>
           </tr>
           <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors 2xl:text-3xl xl:text-xl text:md text-[#1C1B35]">
            <td className="py-3 px-4">http://hackerson.com/users/sign_up</td>
            <td className="py-3 px-4">aabb@e.com</td>
            <td className="py-3 px-4">azert******</td>
            <td className="py-3 px-4">
             <button className="cursor-pointer">
              <Image src="Copy.svg" alt="Copy" height={42} width={42} className="" />
             </button>
            </td>
           </tr>
           <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors 2xl:text-3xl xl:text-xl text:md text-[#1C1B35]">
            <td className="py-3 px-4">http://hackerson.com/users/sign_up</td>
            <td className="py-3 px-4">aabb@e.com</td>
            <td className="py-3 px-4">azert******</td>
            <td className="py-3 px-4">
             <button className="cursor-pointer">
              <Image src="Copy.svg" alt="Copy" height={42} width={42} className="" />
             </button>
            </td>
           </tr>
          </tbody>
         </table>
        </div>
       </div>

       {/* Pagination */}
       <div className="flex flex-col lg:flex-row justify-between lg:justify-center items-center gap-6 lg:gap-[80px] mt-[63px] mb-[98px] px-4">
        <div className="2xl:text-xl sm:text-md text-sm flex sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
         <div className="flex items-center gap-2 relative">
          <label className="text-neutral-600">News per page:</label>
          <div className="relative ml-[8px] sm:ml-[16px] mr-[16px] sm:mr-[32px]">
           <select className="cursor-pointer rounded-md appearance-none 2xl:py-[18px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-10" value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={4}>4</option>
            <option value={10}>10</option>
            <option value={12}>12</option>
           </select>
           <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={18} />
          </div>
         </div>
         <div className="flex items-center justify-center h-full min-h-[40px] gap-2">
          <span className="text-neutral-600">
           {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} News
          </span>
         </div>
        </div>

        <div className="2xl:text-xl sm:text-md text-sm flex sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
         <div className="flex items-center gap-3 sm:gap-[25px] relative">
          <div className="relative">
           <select className="cursor-pointer rounded-md appearance-none border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-8 2xl:py-[18px] py-[12px] px-[14px]" value={currentPage} onChange={(e) => setCurrentPage(parseInt(e.target.value))}>
            {Array.from({ length: totalPages }, (_, i) => (
             <option key={i + 1} value={i + 1}>
              {i + 1}
             </option>
            ))}
           </select>
           <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={16} />
          </div>
          <label className="text-neutral-600">of {totalPages} pages</label>
         </div>

         <div className="flex items-center gap-3 sm:gap-[17px]">
          <button onClick={handlePrev} disabled={currentPage === 1} className="cursor-pointer rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50">
           <ChevronLeft className="text-neutral-600" size={18} />
          </button>

          <button onClick={handleNext} disabled={currentPage === totalPages} className="cursor-pointer rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50">
           <ChevronRight className="text-neutral-600" size={18} />
          </button>
         </div>
        </div>
       </div>
      </>
     ) : (
      <>
       {/* Global Statistics Section */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:mt-[58px] mt-[20px] md:mt-[30px]  md:mb-[332px] mb-[20px]">
        {cardDataa.map((card, index) => (
         <React.Fragment key={index}>
          <div className=" rounded-[35.12px] shadow-[0px_119.587px_140.691px_0px_rgba(205,205,205,0.16)] outline-[1.32px] outline-gray-200 pt-[19px] pl-[28px] pr-[17px] pb-[51px] bg-white relative">
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 flex-wrap">
            <div className="flex flex-col sm:flex-row xl:flex-nowrap items-start sm:items-center gap-[24px] sm:gap-[56px]">
             <div className="flex gap-2">
              <Image src={card.image} alt={card.label} height={87} width={77} />
              <Image src={card.pinkImage} alt={card.label} height={87} width={77} />
             </div>
             <div className="text-black text-4xl md:text-4xl xl:text-5xl 2xl:text-7xl font-normal">{card.value}</div>
            </div>
           </div>
           <div className="mt-[8px] text-black text-xl md:text-xl xl:text-xl 2xl:text-2xl font-normal">{card.label}</div>
          </div>

          {index === 3 && (
           <div
            className=" col-span-full rounded-[35.12px] shadow-[0px_119.587px_140.691px_0px_rgba(205,205,205,0.16)] outline-[1.32px] outline-gray-200 pt-[30px] px-[28px] pb-[51px] bg-white relative overflow-hidden"
            style={{
             backgroundImage: `url(${data.pinkImage})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
            }}
           >
            <div className="relative z-10">
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:space-x-6 space-y-4 md:space-y-0">
              <Image src={data.image} alt="Image" height={94} width={178} className="w-[178px] h-[94px] object-contain" />
              <div className="flex flex-col">
               <span className="text-4xl md:text-4xl xl:text-5xl 2xl:text-7xl font-normal text-black">{data.value}</span>
              </div>
             </div>
             <div className="text-2xl md:text-2xl xl:text-xl 2xl:text-3xl font-normal mt-[13px] text-black">{data.label}</div>
            </div>
            <div className="absolute inset-0 bg-white/30 z-0" />
           </div>
          )}
         </React.Fragment>
        ))}
       </div>
      </>
     )}
    </div>
   </div>
   <Footers />
  </>
 );
};

export default Page;
