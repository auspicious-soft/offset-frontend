"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import { Search, ChevronDown, Mail, X, Check, LockKeyhole, Zap, ChartNoAxesColumn, CircleHelp } from "lucide-react";
import Link from "next/link";

const Page = () => {
  // State for FAQ dropdowns
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Toggle function for FAQ items
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  // FAQ data
  const faqItems = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Offset 7 is a cybersecurity company that specializes in protecting businesses from cyber threats through advanced monitoring, threat detection, and security consultation services. We provide comprehensive security solutions tailored to your organization's specific needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "To report a security incident, please contact our 24/7 incident response team at security@offset7.com or call our emergency hotline at +1-800-OFFSET7. For existing clients, you can also use the incident reporting feature in your customer dashboard. We recommend reporting incidents as soon as they're detected for the most effective response."
    },
    {
      question: "Will I be charged automatically?",
      answer: "Yes, we offer comprehensive cybersecurity consultation services. Our team of certified security experts can assess your current security posture, identify vulnerabilities, and provide tailored recommendations to enhance your organization's security. Consultations can be scheduled for remote or on-site sessions, depending on your preference and requirements."
    },
    {
      question: "Do you offer refunds?",
      answer: "You can subscribe to Offset 7 updates by entering your email address in the subscription form on our homepage or visiting the 'Stay Informed' section on our website. Subscribers receive our monthly security newsletter, threat intelligence updates, and announcements about new services and features. You can customize your subscription preferences at any time."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "You can follow Offset 7 on our social media channels including LinkedIn, Twitter, and YouTube where we regularly post security tips, industry news, and company updates. We also host a monthly webinar series on emerging cybersecurity topics that you can register for through our website. All our content is designed to keep you informed about the latest in cybersecurity."
    }
  ];

  return (
    <>
      {/* Header Component */}
      <Headers />

      {/* Main Content Area */}
      <div className="mb-6 md:mb-10 lg:mb-16 xl:mb-20 2xl:mb-24">
        <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover min-h-screen">
          
          {/* Form Section (Inspired by Email Leak Checker) */}
          <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-[#1C1B35] mb-2 md:mb-4">
              Choose the <span className="text-[#E5223A]"> Right Plan </span>for You
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#1C1B35] max-w-2xl mx-auto">
              Unlock exclusive features and take your experience to the next level. Whether you're an individual or a team, we have a plan that fits your needs. Subscribe today and stay ahead with premium access!
            </p>
          </section>

          {/* Subscription Plans */}
          <section className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-24">
            {/* Free Plan */}
            <div className="bg-[#FFFFFF] rounded-lg w-full shadow-md p-4 md:p-6 flex flex-col items-left">
              <div className="bg-[#1FED7821] w-fit p-3 md:p-4 rounded-full">
                <Image
                  src="/images/Layer_2.png"
                  alt="Free Plan"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#31334E] mt-[19px]">Free</h3>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#31334E] mt-1">$0.00/month</p>
              <p className="text-base md:text-lg lg:text-xl 2xl:text-3xl text-[#7E7F91] mt-[14px]">Limited access to cybersecurity news & updates</p>
              <ul className="mt-[32px] mb-[28px] md:mt-4 space-y-2 md:space-y-[25px] text-gray-700 text-sm sm:text-sm md:text-md lg:text-md 2xl:text-xl">
                <li className="flex items-center ">
                  <span className="text-green-500 mr-2"><div className="bg-[#E5223A1C] p-1 rounded-full"><Check color="#E5223A" size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /></div></span> 
                  <span className="font-medium">Standard Notifications –</span> 
                  <span className="font-normal ml-[4px]">Get occasional security alerts.</span> 
                 
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2"><div className="bg-[#E5223A1C] p-1 rounded-full"><Check color="#E5223A" size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /></div></span> <span className="font-medium">Community Access –</span> 
                  <span className="font-normal ml-[4px]">Join discussions with other free users.</span> 
                </li> 
                <li className="flex items-center">
                  <span className="text-green-500 mr-2"><div className="bg-[#E5223A1C] p-1 rounded-full"><X color="#E5223A" size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /></div></span> <span className="font-medium">No Premium Reports –</span> 
                  <span className="font-normal ml-[4px]">In-depth analytics not included.</span> 

                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2"><div className="bg-[#E5223A1C] p-1 rounded-full"><X color="#E5223A" size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /></div></span> 
                  <span className="font-medium">No Priority Support –</span> 
                  <span className="font-normal ml-[4px]">General support only.</span> 
                </li>
              </ul>
              <Link href="/subscription/payment-method">
              <button className=" w-full mt-4 md:mt-6 bg-[#E5223A] text-white font-medium 2xl:py-[25px] py-[15px]  px-4 rounded-xl hover:bg-opacity-90 transition duration-300 text-md lg:text-md 2xl:text-xl cursor-pointer">
                Choose Plan
              </button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-4 md:p-6 flex flex-col items-left">
              <div className="bg-[#54C0EB24] w-fit p-3 md:p-4 rounded-full">
                <Image
                  src="/images/Group 1261157046.png"
                  alt="Premium Plan"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#31334E] mt-[19px]">Premium</h3>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#31334E] mt-1">($9.99/month)</p>
              <p className="text-base md:text-lg lg:text-xl 2xl:text-3xl text-[#7E7F91] mt-[14px]">Full access to cybersecurity insights and alerts.</p>
              <ul className="mt-[32px] mb-[28px] md:mt-4 space-y-2 md:space-y-[25px] text-gray-700 text-sm sm:text-sm md:text-md lg:text-md 2xl:text-xl">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2"><div className="bg-[#E5223A1C] p-1 rounded-full"><LockKeyhole color="#E5223A" size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /></div></span>  <span className="font-medium">Security Insights –</span> 
                  <span className="font-normal ml-[4px]">Stay updated with the latest threats.</span> 

                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2"><div className="bg-[#E5223A1C] p-1 rounded-full"><Zap color="#E5223A" size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /></div></span> 
                   <span className="font-medium">Real-time Alerts –</span> 
                  <span className="font-normal ml-[4px]">Get notified instantly.</span> 
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2"><div className="bg-[#E5223A1C] p-1 rounded-full"><ChartNoAxesColumn color="#E5223A" size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /></div></span>  
                  <span className="font-medium">Analytics & Trends –</span> 
                  <span className="font-normal ml-[4px]">Explore in-depth cyber reports.</span> 
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2"><div className="bg-[#E5223A1C] p-1 rounded-full"><CircleHelp color="#E5223A" size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /></div></span>  
                  <span className="font-medium">Premium Support –</span> 
                  <span className="font-normal ml-[4px]">Priority customer assistance.</span> 
                </li>
              </ul>

              <Link href="/subscription/payment-method">
              <button className="w-full mt-4 md:mt-6 bg-[#E5223A] text-white font-medium 2xl:py-[25px] py-[15px]  px-4 rounded-xl hover:bg-opacity-90 transition duration-300 text-md lg:text-md 2xl:text-xl cursor-pointer">
                Choose Plan
              </button>
              </Link>

            </div>
          </section>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="relative w-full mb-10 md:mb-16 lg:mb-24">
            <div className="absolute inset-0 z-0 w-full h-full">
              <Image
                src="/images/pinkFrame2.png"
                alt="FAQ Background"
                className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-3xl "
                priority
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>

            <div className="relative z-10 py-6 md:py-12 lg:py-16 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="flex gap-2 md:gap-4 items-center flex-wrap justify-center">
                <Image
                  src="/horizontalRedLine.svg"
                  alt="left arrow"
                  height={0}
                  width={30}
                  className="w-5 md:w-8 lg:w-10"
                />
                <h2 className="text-center text-[#1C1B35] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Frequently Asked Questions
                </h2>
                <Image
                  src="/horizontalRedLine.svg"
                  alt="right arrow"
                  height={0}
                  width={30}
                  className="w-5 md:w-8 lg:w-10"
                />
              </div>

              <p className="mt-3 md:mt-5 text-center text-[#1C1B35] text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-xl mx-auto">
              Discover the Impact of Our Efforts Through Key Statistics.
              </p>

              {/* FAQ Accordion */}
              <div className="mt-8 md:mt-12 lg:mt-16 w-full max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b overflow-hidden transition-all duration-300">
                    <button
                      className="w-full px-4 md:px-6 py-4 md:py-5 flex justify-between items-center gap-4 cursor-pointer transition duration-300"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openFAQ === index}
                    >
                      <span className="text-[#1C1B35] text-left text-sm md:text-lg lg:text-xl font-medium">
                        {index + 1}. {item.question}
                      </span>
                      <ChevronDown 
                        className={`text-[#E5223A] w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div 
                      className={`px-4 md:px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                        openFAQ === index 
                          ? 'max-h-96 py-3 md:py-4 opacity-100' 
                          : 'max-h-0 py-0 opacity-0'
                      }`}
                    >
                      <p className="text-[#1C1B35] text-sm md:text-base lg:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footers />
    </>
  );
};

export default Page;