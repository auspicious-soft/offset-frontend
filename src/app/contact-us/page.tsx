"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import Script from "next/script";
import { ChevronDown, ChevronUp } from "lucide-react";


interface FaqItem  {
  _id: string;
  question: string;
  answer: string;
}


const Page = () => {

  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)
  // Separate state for each dropdown
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  // Toggle functions for each dropdown
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);
  const toggleDropdown4 = () => setIsOpen4(!isOpen4);
  const toggleDropdown5 = () => setIsOpen5(!isOpen5);


 return (
  <>
  <Headers/>
  <div className="container">
<div className="  mt-[50px]">

{/* top  */}
<div className="relative w-full ">
  <Image
    src="/images/contactUs.png"
    alt="earth"
    width={1580}
    height={415}
    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[415px] object-cover rounded-xl"
    priority
  />

  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
    <div className="flex gap-[10px] sm:gap-[12px] md:gap-[14px] items-center">
      <Image
        src="/horizontalRedLine.svg"
        alt="left arrow"
        height={0}
        width={30}
        className="w-[20px] sm:w-[30px] md:w-[41px]"
      />

      <div className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Contact Us
      </div>

      <Image
        src="/horizontalRedLine.svg"
        alt="right arrow"
        height={0}
        width={30}
        className="w-[20px] sm:w-[30px] md:w-[41px]"
      />
    </div>

    <div className="mt-4 sm:mt-5 text-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-[90%] md:max-w-[600px]">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </div>
  </div>
</div>

{/* middle  */}
<div className=" flex my-[126px] gap-[102px]">

{/* left  */}
  <div className=" w-[50%] ">

  <div className="mt-[43px] self-stretch justify-start">
  <span className="text-[#1C1B35] text-2xl sm:text-4xl 2xl:text-7xl font-medium">We are</span>
  <span className="text-[#E5223A] text-2xl sm:text-4xl 2xl:text-7xl font-medium"> always ready</span>
  <span className="text-[#1C1B35] text-2xl sm:text-4xl 2xl:text-7xl font-medium"> to help you and answer your questions</span>
</div>


  <div className="mt-[21px] justify-start text-[#1C1B35] text-lg sm:text-lg 2xl:text-2xl font-normal ">If you have any inquiries or need assistance, feel free to reach out to us. Our team is available 24/7 to support you.</div>


<div className="mt-[88px] mb-[89px] grid grid-cols-1 md:grid-cols-2 gap-[49px]">
  <div>
    <div className="self-stretch justify-center text-[#1C1B35] text-2xl sm:text-2xl 2xl:text-4xl font-medium">Call Center</div>
    <div className="mt-[7px] justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">+1 (800) 123-4567</div>
    <div className="justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">+1 (800) 987-6543</div>
  </div>

  <div>
    <div className="self-stretch justify-center text-[#1C1B35] text-2xl sm:text-2xl 2xl:text-4xl font-medium">Our Location</div>
    <div className="mt-[7px] justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">USA, New York – 10001</div>
    <div className="justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">1st Avenue, Cyber Tower</div>
  </div>
</div>




<div className="grid grid-cols-1 md:grid-cols-2 gap-[49px]">
  <div>
    <div className="self-stretch justify-center text-[#1C1B35] text-2xl sm:text-2xl 2xl:text-4xl font-medium">Email Address</div>
    <div className="mt-[7px] justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">support@offset7.com</div>
  </div>

  <div>
  <div className="self-stretch justify-center text-[#1C1B35] text-2xl sm:text-2xl 2xl:text-4xl font-medium">Follow Us</div>
  <div className="mt-[7px] justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">
  <div className="hidden lg:flex gap-2 sm:gap-3  ">

         <div className="bg-[#CF201F]  flex items-center justify-center rounded cursor-pointer ">
          <Image src="/yt.svg" alt="YouTube " width={40} height={40} className=""/>
         </div>

         <div className="bg-[#18B8EA]  flex items-center justify-center rounded cursor-pointer ">
          <Image src="/v.svg" alt="Twitter/X Profile" width={40} height={40} />
         </div>

         <div className="bg-[#3E599C]  flex items-center justify-center rounded cursor-pointer">
          <Image src="/fb.svg" alt="Facebook Page" width={40} height={40} />
         </div>
        </div>
      
    </div>
  </div>
</div>







  </div>

{/* right  */}
  <div className=" w-[50%] ">
  <div className=" p-[42px]  relative bg-stone-50 rounded-[30px] overflow-hidden">

  <div className=" flex gap-[16px]">

  <div className="w-[10px] h-8 bg-rose-600 rounded-full" />

  <div className="">
  <div className=" justify-start text-[#1C1B35] text-xl sm:text-2xl 2xl:text-5xl font-bold ">Get in Touch</div>
  <div className="mt-[9px] justify-start text-[#727272] text-sm sm:text-md 2xl:text-xl font-normal ">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.</div>
  </div>
    </div>

    <div className="mt-[45px] ">
  

    <div className=" rounded-xl  relative w-full  py-[9px] sm:px-0">
         <Image src="/user.svg" alt="Message box" height={20} width={20} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
         <input type="email" placeholder="Username" className=" rounded-xl text-[#7E7F91] w-full pl-8 sm:pl-10 text-sm sm:text-md pr-20 sm:pr-24 py-3 sm:py-4 border border-[#7C7C7C40] focus:outline-none  " />
        </div>

    <div className=" rounded-xl  relative w-full  py-[9px] sm:px-0">
         <Image src="/Message.svg" alt="Message box" height={20} width={20} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
         <input type="email" placeholder="Enter your Email" className=" rounded-xl text-[#7E7F91] w-full pl-8 sm:pl-10 text-sm sm:text-md pr-20 sm:pr-24 py-3 sm:py-4 border border-[#7C7C7C40] focus:outline-none  " />
        </div>

    <div className=" rounded-xl  relative w-full  py-[9px] sm:px-0">
         <Image src="/images/phone.png" alt="Message box" height={20} width={20} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
         <input type="email" placeholder="Please Enter Phone" className=" rounded-xl text-[#7E7F91] w-full pl-8 sm:pl-10 text-sm sm:text-md pr-20 sm:pr-24 py-3 sm:py-4 border border-[#7C7C7C40] focus:outline-none  " />
        </div>

 
<div className="rounded-xl relative w-full py-[9px] sm:px-0">
  <textarea
    placeholder="Message"
    className="h-52 rounded-xl text-[#7E7F91] w-full sm:pl-[36px] text-sm sm:text-md   pt-4 border border-[#7C7C7C40] focus:outline-none resize-none"
  ></textarea>
</div>

<div className="rounded-xl relative w-full py-[9px] mt-[45px] sm:px-0">
<button type="submit" className=" w-full rounded-xl absolute right-1 top-1/2 -translate-y-1/2 px-[36px] py-[25px] sm:py-[10px] sm:px-4 bg-[#E5223A] hover:bg-[#E5223A] text-white  text-xs sm:text-sm cursor-pointer">
Send
</button>
</div>

    </div>


    </div>
  
  

  </div>

</div>

  </div>


{/* faq  */}

  <div className="relative w-full ">
  <Image
    src="/images/pinkFrame.png"
    alt="earth"
    width={1580}
    height={415}
    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[415px] object-cover rounded-xl"
    priority
  />

<div className=" absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 ">
    <div className="flex gap-[10px] sm:gap-[12px] md:gap-[14px] items-center">
      <Image
        src="/horizontalRedLine.svg"
        alt="left arrow"
        height={0}
        width={30}
        className="w-[20px] sm:w-[30px] md:w-[41px]"
      />

      <div className="text-center text-[#1C1B35] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
      Frequently Asked Questions
      </div>

      <Image
        src="/horizontalRedLine.svg"
        alt="right arrow"
        height={0}
        width={30}
        className="w-[20px] sm:w-[30px] md:w-[41px]"
      />
    </div>

    <div className="mt-4 sm:mt-5 text-center text-[#1C1B35] text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-[90%] md:max-w-[600px]">
    Discover the Impact of Our Efforts Through Key Statistics.
    </div>


    {/* dropdowm  */}

{/* <div className="relative inset-0 mt-[83px] self-stretch p-5 border-b border-[#7C7C7C40]   gap-2 px-[87px]">
     <div className="border border-amber-500 flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
        <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
          1. What is Offset 7?
        </div>
        <Image
          src="/RedDownArrow.svg"
          alt="toggle dropdown"
          height={14}
          width={24}
          className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen && (
        <div className="mt-4 text-[#1C1B35] text-base 2xl:text-lg">
          Offset 7 is a cybersecurity company that specializes in...
        </div>
      )}
</div> */}









{/* <div className="inline-flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
  <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
    1. What is Offset 7?
  </div>
  <Image
    src="/RedDownArrow.svg"
    alt="toggle dropdown"
    height={14}
    width={24}
    className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  />
</div>

{isOpen && (
  <div className="mt-4 text-[#1C1B35] text-base 2xl:text-lg">
    Offset 7 is a cybersecurity company that specializes in...
  </div>
)}

<div className="inline-flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
  <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
    2. How does Offset 7 help businesses?
  </div>
  <Image
    src="/RedDownArrow.svg"
    alt="toggle dropdown"
    height={14}
    width={24}
    className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  />
</div>

{isOpen && (
  <div className="mt-4 text-[#1C1B35] text-base 2xl:text-lg">
    Offset 7 provides tailored cybersecurity solutions to protect businesses...
  </div>
)}

<div className="inline-flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
  <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
    3. What industries does Offset 7 serve?
  </div>
  <Image
    src="/RedDownArrow.svg"
    alt="toggle dropdown"
    height={14}
    width={24}
    className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  />
</div>

{isOpen && (
  <div className="mt-4 text-[#1C1B35] text-base 2xl:text-lg">
    Offset 7 serves industries including healthcare, finance, and technology...
  </div>
)}

<div className="inline-flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
  <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
    4. How can I contact Offset 7 for services?
  </div>
  <Image
    src="/RedDownArrow.svg"
    alt="toggle dropdown"
    height={14}
    width={24}
    className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  />
</div>

{isOpen && (
  <div className="mt-4 text-[#1C1B35] text-base 2xl:text-lg">
    You can contact us via email at contact@offset7.com or visit our website...
  </div>
)}

<div className="inline-flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
  <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
    5. What makes Offset 7 unique?
  </div>
  <Image
    src="/RedDownArrow.svg"
    alt="toggle dropdown"
    height={14}
    width={24}
    className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  />
</div>

{isOpen && (
  <div className="mt-4 text-[#1C1B35] text-base 2xl:text-lg">
    Offset 7 stands out by providing innovative cybersecurity solutions combined with personalized service...
  </div>
)} */}







<div className="relative inset-0 mt-[83px] self-stretch p-5 border-b border-[#7C7C7C40] inline-flex flex-col gap-2 px-[87px]">
<div>

      <div className="mb-[21px] flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown1}>
        <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
          1. What is Offset 7?
        </div>
        <Image
          src="/RedDownArrow.svg"
          alt="toggle dropdown"
          height={14}
          width={24}
          className={`transform transition-transform duration-300 ease-in-out ${isOpen1 ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen1 && (
        <div className="mb-[15px]  mt-4 text-[#1C1B35] text-base 2xl:text-lg">
          Offset 7 is a cybersecurity company that specializes in...
        </div>
      )}


      <div className="mb-[21px]  flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown2}>
        <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
          2. How does Offset 7 help businesses?
        </div>
        <Image
          src="/RedDownArrow.svg"
          alt="toggle dropdown"
          height={14}
          width={24}
          className={`transform transition-transform duration-300 ease-in-out ${isOpen2 ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen2 && (
        <div className="mb-[15px]  mt-4 text-[#1C1B35] text-base 2xl:text-lg">
          Offset 7 provides tailored cybersecurity solutions to protect businesses...
        </div>
      )}



      <div className="mb-[21px]  flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown3}>
        <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
          3. What industries does Offset 7 serve?
        </div>
        <Image
          src="/RedDownArrow.svg"
          alt="toggle dropdown"
          height={14}
          width={24}
          className={`transform transition-transform duration-300 ease-in-out ${isOpen3 ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen3 && (
        <div className="mb-[15px] mt-4 text-[#1C1B35] text-base 2xl:text-lg">
          Offset 7 serves industries including healthcare, finance, and technology...
        </div>
      )}


      <div className="mb-[21px]  flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown4}>
        <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
          4. How can I contact Offset 7 for services?
        </div>
        <Image
          src="/RedDownArrow.svg"
          alt="toggle dropdown"
          height={14}
          width={24}
          className={`transform transition-transform duration-300 ease-in-out ${isOpen4 ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen4 && (
        <div className="mb-[15px]  mt-4 text-[#1C1B35] text-base 2xl:text-lg">
          You can contact us via email at contact@offset7.com or visit our website...
        </div>
      )}


      <div className="mb-[21px]  flex justify-between items-center gap-4 cursor-pointer" onClick={toggleDropdown5}>
        <div className="text-[#1C1B35] text-xl 2xl:text-3xl font-medium">
          5. What makes Offset 7 unique?
        </div>
        <Image
          src="/RedDownArrow.svg"
          alt="toggle dropdown"
          height={14}
          width={24}
          className={`transform transition-transform duration-300 ease-in-out ${isOpen5 ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen5 && (
        <div className="mb-[15px]   mt-4 text-[#1C1B35] text-base 2xl:text-lg">
          Offset 7 stands out by providing innovative cybersecurity solutions combined with personalized service...
        </div>
      )}
    </div>

</div>











  </div>







    
   

  </div>


  </div>
<Footers/>
  </>
  

 );
};

export default Page;

{/* Structured data for contact page */}
<Script
id="contact-schema"
type="application/ld+json"
dangerouslySetInnerHTML={{
 __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us | Offset7 Cybersecurity",
  "description": "Get in touch with the Offset7 team for cybersecurity solutions, threat intelligence services, or technical support.",
  "url": "https://offset7.com/contact-us",
  "mainEntity": {
   "@type": "Organization",
   "name": "Offset7",
   "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-OFFSET7",
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": "English"
   }
  }
 })
}}
/>


