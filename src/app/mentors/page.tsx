"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import Script from "next/script";
import { Check, ChevronDown, ChevronUp, ArrowUpRight, Dot } from "lucide-react";
import { useRouter } from "next/navigation";

interface FaqItem {
  _id: string;
  question: string;
  answer: string;
}

interface Mentor {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
}

const mentors: Mentor[] = [
  { id: 1, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
  { id: 2, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
  { id: 3, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
  { id: 4, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
  { id: 5, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
  { id: 6, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
  { id: 7, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
  { id: 8, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
  { id: 9, name: "Mark Davidson", title: "Mentor", image: "/images/Ellipse 536.png", description: "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout..." },
];

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Headers />
      <div className="mb-10 lg:mb-25">
      <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
        <div className="lg:mt-16">
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
                <div className="text-center text-white text-3xl sm:text-3xl 2xl:text-4xl font-bold">
                  Mentors
                </div>
                <Image
                  src="/horizontalRedLine.svg"
                  alt="right arrow"
                  height={0}
                  width={30}
                  className="w-5 sm:w-7 md:w-10"
                />
              </div>
              <div className="mt-2 sm:mt-3 md:mt-4 text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal max-w-[90%] sm:max-w-[80%] md:max-w-[600px]">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>

          {/* Mentor Cards Section */}
          <div className="py-10">
            <div className="mx-auto py-6 sm:py-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="relative bg-stone-50 rounded-lg p-4"
                  >
                    <Image
                      src={mentor.image}
                      alt={`${mentor.name} profile`}
                      width={100}
                      height={100}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-2"
                    />
                    <div className="flex items-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1C1B35]">
                        {mentor.name}
                      </h3>
                      <Dot size={30} color="#D9D9D9" />
                      <p className="text-sm sm:text-base text-[#E5223A]">
                        {mentor.title}
                      </p>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mt-2">{mentor.description}</p>
                    <div className="absolute top-4 right-4 cursor-pointer"
                    onClick={()=> router.push(`/mentors/mentor-detail/${1}`)}
                    >
                      <ArrowUpRight className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="my-10 bg-[url('/images/pinkFrame2.png')] bg-size-[100%] py-10 rounded-lg overflow-hidden">
            <div className="relative z-10 text-center px-4 sm:px-6">
              <h2 className="text-3xl sm:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-4">
                Become a Mentor & Share{" "}
                <span className="text-[#E5223A]">Your Knowledge</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-xl mx-auto">
                Be a part of the community and empower others by sharing your
                expertise and experiences. Help aspiring professionals grow in
                the field of cybersecurity.
              </p>
              <button className="bg-[#E5223A] text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-[#E5223A] transition-colors">
                Become a Mentor
              </button>
            </div>
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