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
      <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')]  bg-size-[100%]">
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
                  Privacy Policy
                </div>
                <Image
                  src="/horizontalRedLine.svg"
                  alt="right arrow"
                  height={0}
                  width={30}
                  className="w-5 sm:w-7 md:w-10"
                />
              </div>
              <div className="mt-2 sm:mt-3 md:mt-4 text-center text-white text-sm sm:text-xl md:text-xl lg:text-lg xl:text-xl font-normal max-w-[90%] sm:max-w-[80%] md:max-w-[600px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>
          <div className="min-h-screen w-full">
            <div className=" py-10 ">
              <div className=" mx-auto bg-white py-6 sm:py-8 rounded-lg  border-gray-200">
                {/* 1. Purpose */}
                <section className="mb-8">
                  <h2 className="text-lg sm:text-xl xl:text-3xl 2xl:text-5xl font-semibold text-gray-800 mb-4">
                    1. Purpose
                  </h2>
                  <p className="text-gray-600 text-xl font-normal lg:text-2xl  2xl:text-4xl">
                    Lorem ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                </section>

                {/* 2. Scope */}
                <section className="mb-8">
                 <h2 className="text-lg sm:text-xl xl:text-3xl 2xl:text-5xl font-semibold text-gray-800 mb-4">
                    2. Scope
                  </h2>
                  <p className="text-gray-600 text-xl font-normal lg:text-2xl  2xl:text-4xl">
                    Lorem ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </section>

                {/* 3. Data Collection */}
                <section className="mb-8">
                 <h2 className="text-lg sm:text-xl xl:text-3xl 2xl:text-5xl font-semibold text-gray-800 mb-4">
                    3. Data Collection
                  </h2>
                  <p className="text-gray-600 text-xl font-normal lg:text-2xl  2xl:text-4xl">
                    Lorem ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </section>

                {/* 4. How We Use Your Information */}
                <section className="mb-8">
                 <h2 className="text-lg sm:text-xl xl:text-3xl 2xl:text-5xl font-semibold text-gray-800 mb-4">
                    4. How We Use Your Information
                  </h2>
                  <p className="text-gray-600 text-xl font-normal lg:text-2xl  2xl:text-4xl">
                    Lorem ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </section>

                {/* 5. Legal Compliance */}
                <section className="mb-8">
                 <h2 className="text-lg sm:text-xl xl:text-3xl 2xl:text-5xl font-semibold text-gray-800 mb-4">
                    5. Legal Compliance
                  </h2>
                  <p className="text-gray-600 text-xl font-normal lg:text-2xl  2xl:text-4xl">
                    Lorem ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </section>

                {/* 6. Data Deletion */}
                <section className="mb-8">
                 <h2 className="text-lg sm:text-xl xl:text-3xl 2xl:text-5xl font-semibold text-gray-800 mb-4">
                    6. Data Deletion
                  </h2>
                  <p className="text-gray-600 text-xl font-normal lg:text-2xl  2xl:text-4xl">
                    Lorem ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </section>

                {/* 7. Data Portability */}
                <section className="mb-8">
                 <h2 className="text-lg sm:text-xl xl:text-3xl 2xl:text-5xl font-semibold text-gray-800 mb-4">
                    7. Data Portability
                  </h2>
                  <p className="text-gray-600 text-xl font-normal lg:text-2xl  2xl:text-4xl">
                    Lorem ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </section>
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
