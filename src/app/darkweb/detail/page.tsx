"use client";
import React from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";




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
 return (
  <>
<Headers/>
<div className=" px-4 sm:px-6 md:px-10 mb-[40px] sm:mb-[59px] md:mb-[60px] lg:mb-[119px] lg:px-[100px] mt-[50px]">



<div className="flex flex-row items-center gap-2 flex-wrap">
  <div className="text-neutral-500 text-sm sm:text-xl font-medium">Home</div>
  <div className="w-px h-4 sm:h-6 bg-[#E5223A]"></div>
  <div className="text-neutral-500 text-sm sm:text-xl font-medium">General News</div>
  <div className="w-px h-4 sm:h-6 bg-[#E5223A]"></div>
  <div className="text-[#E5223A] text-sm sm:text-xl font-medium">News Detail</div>
</div>


<div className="flex flex-col lg:flex-row  gap-6">

  {/* Left Section */}

<div className=" w-full max-w-[955px] mx-auto mt-[59px] ">
    <Image
      src="/images/hands.png"
      alt="earth"
      width={991}
      height={501}
      className="w-full     object-cover rounded-xl"
      priority
    />


{/* content  */}
<div className=" w-[60%] flex gap-[15px] mt-[59px]">
    <Image src="/sarah.svg" 
    alt="Sarah Image"
    height={34} width={34}
    className="sm:h-[20px] sm:w-[20px]   md:h-[34px] md:w-[34px]  w-8 h-8  lg:w-12 lg:h-12" />

<div className="flex justify-center items-center">
    <div className="  text-[#1C1B35]  text-xs sm:text-sm md:text-sm lg:text-base">By Sarah Mitchell
    <span className="ml-[4px] text-[#959595] text-xs sm:text-sm md:text-sm lg:text-base">| 11 january 2025</span>
    </div>
    </div>
    </div>

 
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  gap-4 mt-[20px]">

<div className="justify-start text-[#1C1B35] text-2xl md:text-4xl font-medium">
  Dark Web Market Shutdown: Authorities Seize Illegal Data Trading Hub
</div>

  <Image
    src="/dots.svg"
    alt="read more"
    height={34}
    width={34}
    className="sm:h-[20px] sm:w-[20px] md:h-[34px] md:w-[34px] w-8 h-8 lg:w-12 lg:h-12"
  />
</div>



<div className="text-[#1C1B35] text-base sm:text-lg md:text-xl lg:text-xl font-normal mt-[46px]">
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</div>

<div className="text-[#1C1B35] text-base sm:text-lg md:text-xl lg:text-xl font-normal mt-[24px]">
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte ration in some form, by injected humour, or randomised words which don't look even slightly belie vable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything emba rras sing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat pre defi ned chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words
</div>

<div className="text-[#1C1B35] text-base sm:text-lg md:text-xl lg:text-xl font-normal mt-[24px]">
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter ation in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
</div>



<div className="mt-[46px]">
<Image
      src="/images/keys.png"
      alt="laptop"
      width={955}
      height={425}
      className="w-full   object-cover rounded-xl"
      priority
    />
</div>




<div className="mt-[46px] justify-start text-[#1C1B35]  text-2xl md:text-4xl font-medium    ">
  Authorities Seize Illegal Data Trading Hub
</div>

<div className="text-[#1C1B35] text-base sm:text-lg md:text-xl lg:text-xl font-normal mt-[46px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter ation in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,humour and the like).</div>




<div className="mt-[46px] flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-start md:items-start text-center gap-x-2 gap-y-2">
  <span className="text-[#727272] text-base sm:text-lg lg:text-xl font-medium">GENERAL NEWS SOURCE:</span>
  <span className="text-[#1C1B35] text-base sm:text-lg lg:text-xl font-medium"> </span>
  <span className="text-[#1C1B35] text-base sm:text-lg lg:text-xl font-medium underline break-words cursor-pointer">https://www.gmail.com</span>
  <Image 
    src="/link.svg" 
    alt="Sarah Image"
    height={17} 
    width={18}
    className="ml-[20px] cursor-pointer" 
  />
</div>




 






</div>





{/* Right Section */}

  <div className="">

<div className=" flex flex-col sm:flex-row gap-4 lg:mt-[59px]">
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

  </div>


</div>



</div>

<Footers/>

  </>
 );
};

export default Page;







