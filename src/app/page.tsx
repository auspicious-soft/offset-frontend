// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//    <>

// {/* <Link
//   href="/admin/dashboard"
//   scroll={true}
//   className={`cursor-pointer flex items-center ${
//     pathname === '/admin/dashboard' ? 'text-[#E5223A] font-semibold' : ''
//   }`} > */}

//    <div>first page </div>
   
//    </>
//   );
// }







"use client";
import React from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";



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





const Page = () => {
 return (
  <>
<Headers/>


<div className=" bg-[url('/images/dotsBackgroundImage.png')] bg-cover bg-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] p-4">


<div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-[40px] gap-6">

  {/* Left Section */}

<div className=" w-full lg:w-[65%] mx-auto mt-[59px] px-2">
  <div className="relative w-full">
    <Image
      src="/images/mainnews.png"
      alt="earth"
      width={955}
      height={425}
      className="w-full h-[425px]  sm:h-full lg:h-full lg:min-h-[425px] object-cover rounded-[30px]"
      priority
    />

    <div className="p-2 absolute top-0 left-0 w-full">
      <div className="flex justify-between items-start p-2 sm:p-3 md:p-4 lg:p-5">
        <div className="text-white font-bold break-words max-w-[70%]
          text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
          MAIN NEWS
        </div>
        <div className="flex items-start gap-2 sm:gap-3">
          <Image src="/leftarrow.svg" 
          alt="left arrow" 
          height={43} width={43}
          className="w-3 h-3 sm:w-4 sm:h-4" />
          
          <Image src="/rightarrow.svg" 
          alt="right arrow" 
          height={43} width={43}

          className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>
      <div className="h-px ml-2 sm:ml-3 md:ml-4" style={{ backgroundColor: "#E5223A" }} />
    </div>

    <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 md:p-4 lg:p-5">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <Image
          src="/sarah.svg"
          alt="Sarah Image"
          width={34}
          height={34}
          className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
        />
        <div className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base">By Sarah Mitchell</div>
        <div className="text-[#959595] text-[10px] sm:text-xs md:text-sm lg:text-base">| 4 hours ago</div>
      </div>

      <div className="text-white leading-snug
        text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2">
        Dark Web Market Shutdown: Authorities Seize Illegal Data Trading Hub
      </div>

      <div className="text-white text-[10px] sm:text-xs md:text-sm">
        DARK WEB <span className="text-[#959595]">| 10 minutes read</span>
      </div>
    </div>
  </div>
</div>



  {/* Right Section */}

<div className=" w-full lg:w-[35%]">

{/* buttons  */}
<div className=" flex flex-col sm:flex-row gap-4  mb-[15px] lg:mt-[59px]">
  <div className=" w-full sm:w-1/2 h-11 py-[17px]  bg-[#E5223A] rounded-lg flex justify-center items-center gap-2">
    <div className="text-white text-xl font-medium">Tools Posts</div>
  </div>

  <div className=" py-[17px]   mb-[19px] w-full sm:w-1/2 h-11 bg-stone-50  rounded-lg flex justify-center items-center gap-2">
    <div className="text-[#727272] text-xl font-medium">Education Posts</div>
  </div>
</div>


{/* right top  */}

<div className="space-y-6 ">
      {cardss.map((cards, index) => (
        <div
          key={index}
          className="w-full lg:justify-between flex h-auto self-stretch lg:mt-[27px] sm:p-[2px] bg-stone-50 rounded-[20.65px] gap-[19px]  "
        >
          <div className="">
            <Image
              src={cards.boardImg}
              alt="board"
              height={140}
              width={140}
              className="w-full max-w-[134px] h-[140px] rounded-xl object-cover"
            />
          </div>

          <div className=" w-full pr-0">
            <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 sm:mb-3">
              <Image
                src={cards.avatarImg}
                alt="Author"
                height={34}
                width={34}
                className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px]  w-8 h-8 "
              />
              <div className=" flex justify-center align-middle">
                <div className="mt-2    text-[#1C1B35] text-xs ">
                  By {cards.author}
                  <span className="ml-[4px] text-[#959595] text-xs ">
                    | {cards.time}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[#1C1B35]  text-sm sm:text-sm md:text-sm lg:text-lg">
              {cards.title}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm  text-[#FF475E]   font-bold">
                {cards.tag}
              </div>
              <Image
                src="/redarrow.svg"
                alt="Red Arrow"
                height={35}
                width={35}
                className="w-7 h-7 lg:w-5 lg:h-5 sm:w-7 sm:h-7 bg-[#E5223A]   rounded-full p-[4px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>


</div>

</div>




{/* red  */}

 <div className="mt-[75px] ">

<div className="px-4 sm:px-6 md:px-10 lg:px-[40px]">
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
        <div
          key={idx}
          className="flex items-center gap-4 bg-red-50 rounded-[20px] p-5"
        >
          <div className="flex-shrink-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-red-100 flex items-center justify-center rounded-full">
            <Image
              src={item.icon}
              alt="icon"
              width={40}
              height={40}
              className="opacity-100"
            />
          </div>
          <div>
            <div className="text-gray-800 text-xl sm:text-2xl font-bold">{item.number}</div>
            <div className="text-gray-800 text-sm sm:text-base font-normal leading-snug">
              {item.label}
            </div>
          </div>
        </div>
      ))}
    </div>


    <div
  className="  p-6 flex flex-col justify-between rounded-[30px] gap-4 bg-[url('/images/pinkFrame.png')] bg-cover bg-center"
>
      <div className=" mt-[35px]">
      <div className="flex gap-[17px]">


    <div className="border border-red-600 w-0 h-9 origin-top-left rotate- outline-[5.38px] outline-offset-[-2.69px] outline-rose-600 rounded-t-lg rounded-b-lg" />

        <div className=" text-lg sm:text-xl font-semibold text-gray-900 mb-1">
           Check Your Email for Leaks
        </div>
        </div>
        <p className="text-sm text-gray-600 ml-[17px]">
          Enter your email address below to check if it has been compromised in malware leaks or cyber incidents.
        </p>
      </div>



<div className="relative w-full max-w-md px-4 sm:px-0">
  <Image
    src="/Message.svg"
    alt="Message box"
    height={20}
    width={20}
    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
  />
  <input
    type="email"
    placeholder="Enter your Email"
    className="w-full pl-10 pr-20 sm:pr-24 py-3 sm:py-4 border border-[#7E7F91] focus:outline-none rounded-md text-sm"
  />
  <button
    type="submit"
    className="absolute right-1 top-1/2 -translate-y-1/2  px-4 py-2 sm:px-4  sm:py-1 bg-[#E5223A] hover:bg-[#E5223A] text-white rounded-md text-xs sm:text-sm cursor-pointer"
  >
    Check Now
  </button>
</div>




    </div>
  </div>
</div>



</div>


</div>

{/* last second  */}

<div className=" mt-[96px]  px-4 sm:px-6 md:px-10 lg:px-[40px]">


<div className=" flex flex-col gap-[22px] lg:flex-row lg:flex-nowrap w-full">

  {[1, 2, 3].map((_, idx) => (
    <div key={idx} className=" flex-1 min-w-[300px]  bg-stone-50 rounded-t-[30px]">

    <div className="relative inline-block w-full h-[200px] sm:h-[300px] md:h-[350px]">
  <Image
    src="/images/board.png"
    alt="earth"
    fill
    className=" rounded-t-2xl object-cover"
  />
  <div className="absolute top-0 left-0 w-full">
    <div className="flex w-full justify-between items-start p-3 sm:p-4 lg:p-5">
      <div className="text-xl font-bold text-white sm:text-lg md:text-lg lg:text-lg xl:text-lg break-words max-w-[70%]">
        POST DOUBLE COLUMNS 1
      </div>
    </div>
    <div
      className="h-px ml-4 sm:ml-5 mr-4 sm:mr-5"
      style={{ backgroundColor: "#E5223A" }}
    />
  </div>
</div>


      {/* text */}
      <div className="ml-[22px] mt-[37px] w-auto">
        <div className="justify-start text-gray-800 text-2xl font-medium">
          Zero-Day Exploit Discovered in Popular Enterprise Software
        </div>

        <div className=" text-[#FF475E] text-base font-bold text-[10px] sm:text-xs lg:text-sm">
          GENERAL WEB{" "}
          <span className="text-[#959595] text-sm font-normal">| 4 hours ago</span>
        </div>

        <div className="h-0 mt-[23px] mb-[23px] border-t border-black/5"></div>




<div className="space-y-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full lg:justify-between flex h-auto self-stretch lg:mt-[59px] sm:p-[2px] bg-stone-50 rounded-[20.65px] gap-[19px]"
        >
          <div className="">
            <Image
              src={card.boardImg}
              alt="board"
              height={140}
              width={140}
              className="w-full max-w-[134px] h-[140px] rounded-xl object-cover"
            />
          </div>

          <div className=" w-full pr-0">
            <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 sm:mb-3">
              <Image
                src={card.avatarImg}
                alt="Author"
                height={34}
                width={34}
                className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px]  w-8 h-8 "
              />
              <div className="  flex justify-center items-center">
                <div className="text-[#1C1B35] text-xs">
                  By {card.author}
                  <span className="ml-[4px] text-[#959595] text-xs ">
                    | {card.time}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[#1C1B35]   text-lg   ">
              {card.title}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm  text-[#FF475E]  font-bold">
                {card.tag}
              </div>
              <Image
                src="/redarrow.svg"
                alt="Red Arrow"
                height={35}
                width={35}
                className="w-7 h-7 lg:w-5 lg:h-5 sm:w-7 sm:h-7 bg-[#E5223A]   rounded-full p-[4px]"
              />
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
    <Image
      src="/verticalWhiteLine.svg"
      alt="Vertical line"
      width={3}
      height={44}
      className="h-full object-cover"
    />
  </div>
  <div className="text-white text-3xl md:text-5xl font-bold">Get Offset7 Today</div>
</div>


    <div className="mt-4 text-white text-base md:text-xl font-normal">
      Stay ahead of cyber threats with Offset7! Download the app for free and gain
      access to powerful tools, real-time monitoring, and actionable insights to protect
      your organization from evolving digital risks.
    </div>

    <div className="flex flex-wrap gap-x-6 mt-6 md:mt-[32px]">
      {[
        "Live Threat Monitoring",
        "Cybersecurity Insights",
        "Advanced Data Protection",
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 mb-2 w-full sm:w-auto">
          <Image
            src="/check.svg"
            alt="check"
            width={21}
            height={21}
            className="w-5 h-5 bg-[#E5223A] rounded-full p-[2px]"
          />
          <div className="text-white text-base md:text-lg font-medium leading-loose">{item}</div>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-4 md:gap-[23px] mt-8 md:mt-[67px] mb-[40px] md:mb-[50px]">
      <Image
        src="/images/googleplay.png"
        alt="Google Play"
        width={160}
        height={50}
        className="object-cover w-[140px] md:w-[160px] h-auto"
      />
      <Image
        src="/images/applestore.png"
        alt="App Store"
        width={160}
        height={50}
        className="object-cover w-[140px] md:w-[160px] h-auto"
      />
    </div>
  </div>

  <div className="w-full md:w-1/2 relative mt-8 md:mt-0 pr-0 md:pr-[20px] flex justify-center md:block">
    <Image
      src="/images/stackmobiles.png"
      alt="Mobile Preview"
      width={707}
      height={563}
      className="relative md:absolute bottom-0 md:bottom-[-50px] right-0 w-[80%] md:w-[707px] h-auto z-0"
    />
  </div>
</div>




</div>




<Footers/>
  </>
 );
};

export default Page;
