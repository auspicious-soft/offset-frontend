"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import Script from "next/script";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  _id: string;
  question: string;
  answer: string;
}



const Page = () => {

  return (
    <>
      <Headers />
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className=" lg:mt-16">
          {/* Top Section */}
          <div className="relative w-full">
            <Image
              src="/images/contactUs.png"
              alt="earth"
              width={1580}
              height={415}
              className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[415px] object-cover rounded-xl"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                <Image
                  src="/horizontalRedLine.svg"
                  alt="left arrow"
                  height={0}
                  width={30}
                  className="w-5 sm:w-7 md:w-10"
                />
                <div className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  About Us
                </div>
                <Image
                  src="/horizontalRedLine.svg"
                  alt="right arrow"
                  height={0}
                  width={30}
                  className="w-5 sm:w-7 md:w-10"
                />
              </div>
              <div className="mt-2 sm:mt-3 md:mt-4 text-center text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal max-w-[90%] sm:max-w-[80%] md:max-w-[600px]">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 my-10 sm:my-16 md:my-20">
            {/* Left Section */}
            <div className="col-span-1 md:col-span-6">
              <Image
                src="/images/Rectangle 34625634.png"
                alt="earth"
                width={1580}
                height={415}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
            </div>

            {/* Right Section */}
            <div className="col-span-1 md:col-span-6">
              <div className="p-4 sm:p-6 md:p-8 h-full space-y-4 sm:space-y-6 bg-stone rounded-[20px] sm:rounded-[30px] overflow-hidden">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-1 h-6 sm:h-8 bg-rose-600 rounded-full" />
                  <div className="text-[#1C1B35] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                    Who We Are
                  </div>
                </div>
                <div className="text-[#727272] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                  OffSet7 - ThreatIntel is a free and comprehensive threat
                  intelligence platform that helps organizations defend against
                  modern cyber threats. We specialize in tracking interstellar
                  malware logs, analyzing leaked credentials, monitoring data
                  breaches, and mapping dark web market activities.
                </div>
                <div className="text-[#727272] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                  Our platform also serves as a hub for the latest news about the
                  dark web and emerging cybersecurity threats, ensuring users stay
                  informed and prepared.
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3 items-center text-[#1C1B35] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                    <span className="text-[#15B639]">
                      <Check className="w-4 sm:w-5" />
                    </span>
                    Real-time threat intelligence
                  </li>
                  <li className="flex gap-2 sm:gap-3 items-center text-[#1C1B35] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                    <span className="text-[#15B639]">
                      <Check className="w-4 sm:w-5" />
                    </span>
                    In-depth reports on cyber attacks
                  </li>
                  <li className="flex gap-2 sm:gap-3 items-center text-[#1C1B35] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                    <span className="text-[#15B639]">
                      <Check className="w-4 sm:w-5" />
                    </span>
                    Coverage of global security trends
                  </li>
                </ul>
                <div className="mt-6 sm:mt-8">
                  <button
                    type="button"
                    className="w-full sm:w-48 md:w-56 h-10 sm:h-12 rounded-xl bg-[#E5223A] hover:bg-[#C91E33] text-white text-sm sm:text-base md:text-lg font-medium"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Vision and Mission Cards */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-10 sm:mb-16">
            {/* Dark Navy Card */}
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 flex-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white border-l-2 border-pink-500 pl-2">
                Our Vision
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                OffSet7 - ThreatIntel is a free and comprehensive threat
                intelligence platform that helps organizations defend against
                modern cyber threats. We specialize in tracking interstellar
                malware logs, analyzing leaked credentials, monitoring data
                breaches, and mapping dark web market activities.
              </p>
              <div className="flex justify-center mt-6 sm:mt-10">
                <Image
                  src="/images/Group 1261157054.png"
                  alt="vision"
                  width={150}
                  height={150}
                  className="w-32 sm:w-40 md:w-48 h-auto object-cover rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* Red Card */}
            <div className="bg-red-500 rounded-lg p-4 sm:p-6 flex-1">
              <div className="flex justify-center mt-4 mb-6 sm:mb-10">
                <Image
                  src="/images/Group123.png"
                  alt="mission"
                  width={150}
                  height={150}
                  className="w-32 sm:w-40 md:w-48 h-auto object-cover rounded-xl"
                  priority
                />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white border-l-2 border-white pl-2">
                Our Mission
              </h2>
              <p className="text-white text-xs sm:text-sm md:text-base">
                OffSet7 - ThreatIntel is a free and comprehensive threat
                intelligence platform that helps organizations defend against
                modern cyber threats. We specialize in tracking interstellar
                malware logs, analyzing leaked credentials, monitoring data
                breaches, and mapping dark web market activities.
              </p>
            </div>
          </div>

          {/* Why Choose Offset 7 */}
          <div className="w-full my-10 sm:my-16">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                <Image
                  src="/horizontalRedLine.svg"
                  alt="left arrow"
                  height={0}
                  width={30}
                  className="w-5 sm:w-7 md:w-10"
                />
                <div className="text-center text-[#1C1B35] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  Why Choose Offset 7?
                </div>
                <Image
                  src="/horizontalRedLine.svg"
                  alt="right arrow"
                  height={0}
                  width={30}
                  className="w-5 sm:w-7 md:w-10"
                />
              </div>
              <div className="mt-2 sm:mt-3 md:mt-4 text-center text-[#1C1B35] text-xs sm:text-sm md:text-base lg:text-lg font-normal max-w-[90%] sm:max-w-[80%]">
                Discover the Impact of Our Efforts Through Key Statistics.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex gap-3 sm:gap-4 items-center">
                <Image
                  src="/images/Frame 1261157088.png"
                  alt="Feature One"
                  width={60}
                  height={60}
                  className="w-12 sm:w-16 md:w-20 h-auto object-cover rounded-xl"
                  priority
                />
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold">
                    Trusted Source
                  </p>
                  <p className="text-xs sm:text-sm">
                    Verified & accurate intelligence.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <Image
                  src="/images/Frame 1261157085.png"
                  alt="Feature Two"
                  width={60}
                  height={60}
                  className="w-12 sm:w-16 md:w-20 h-auto object-cover rounded-xl"
                  priority
                />
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold">
                    Real-Time Alerts
                  </p>
                  <p className="text-xs sm:text-sm">
                    24/7 cyber threat monitoring.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <Image
                  src="/images/Frame 12611570851.png"
                  alt="Feature Three"
                  width={60}
                  height={60}
                  className="w-12 sm:w-16 md:w-20 h-auto object-cover rounded-xl"
                  priority
                />
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold">
                    Easy to Understand
                  </p>
                  <p className="text-xs sm:text-sm">
                    Simplified security reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          

          {/* Email Check Section */}
          <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 rounded-2xl bg-[url('/images/pinkFrame.png')] bg-cover bg-center my-10 sm:my-16">
            <div className="col-span-1 md:col-span-7">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-1 h-6 sm:h-8 bg-red-600 rounded-full" />
                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                  Check Your Email for Leaks
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 ml-4 sm:ml-5">
                Enter your email address below to check if it has been compromised
                in malware leaks or cyber incidents.
              </p>
            </div>
            <div className="col-span-1 md:col-span-5 flex flex-col gap-3 sm:gap-4">
              <div className="relative">
                <Image
                  src="/Message.svg"
                  alt="Message box"
                  height={20}
                  width={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5"
                />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-[#7E7F91] rounded-xl border border-[#7E7F91] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 sm:py-3 rounded-xl bg-[#E5223A] hover:bg-[#C91E33] text-white text-sm sm:text-base md:text-lg font-medium"
              >
                Check Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footers />
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us | Offset7 Cybersecurity",
            description:
              "Get in touch with the Offset7 team for cybersecurity solutions, threat intelligence services, or technical support.",
            url: "https://offset7.com/contact-us",
            mainEntity: {
              "@type": "Organization",
              name: "Offset7",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-OFFSET7",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />
    </>
  );
};

export default Page;