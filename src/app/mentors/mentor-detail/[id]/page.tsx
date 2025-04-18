"use client";
import React from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link2, Linkedin } from "lucide-react";

const Page = () => {
  return (
    <>
      <Headers />
      <div className="mb-10 lg:mb-25">
        <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover min-h-screen">
          <div className="mt-7 text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[#727272]">
                    Mentors
                  </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="bg-[#E5223A] w-px h-[11px]" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[#E5223A]">
                    Mentor Detail
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="mt-5">
            <h2 className="text-3xl sm:text-3xl 2xl:text-4xl font-semibold text-[#1C1B35]">
              Mentor Profile:
            </h2>
          </div>
          <div className="bg-[#F9F9F9] p-6 mt-5 rounded-lg shadow-md">
            <div className="flex items-center mt-4 border-b py-5">
              <Image
                src="/images/Ellipse 536.png"
                alt="Mark Davidson"
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="sm:text-lg md:text-xl lg:text-2xl font-medium">
                  Mark Davidson <span className="text-[#D9D9D9]">•</span>{" "}
                  <span className="text-[#E5223A]">Mentor</span>
                </h3>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here,' making it look like readable English.
                </p>
              </div>
            </div>

            <div className="mt-6 border-b py-5">
              <h3 className="text-lg sm:text-xl font-medium text-[#1C1B35]">
                Contact & Socials:
              </h3>
              <div className="mt-4 flex flex-wrap gap-5">
                <div className="flex items-center bg-[#FFDCE05C] py-2 px-4 gap-2 rounded-full">
                  <Linkedin size={20} color="#36324E" fill="#36324E" />
                  <a
                    href="https://linkedin.com"
                    className="text-[#36324E] text-base sm:text-lg md:text-xl lg:text-2xl mr-4"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex flex-wrap items-center  justify-center bg-[#FFDCE05C] py-2 px-4 gap-2 rounded-full">
                  <h2 className="text-[#727272] text-base sm:text-lg md:text-xl lg:text-2xl">
                    FORUMS:
                  </h2>
                  <a
                    href="https://forum.offset7.com/general-discussions"
                    className="text-[#36324E] text-base sm:text-lg md:text-xl lg:text-2xl underline"
                  >
                    forum.offset7.com/general-discussions
                  </a>
                  <Link2
                    className="rotate-[-400deg]"
                    size={20}
                    color="#E5223A"
                  />
                </div>
              </div>
            </div>

            <div className="my-6">
              <h3 className="text-lg sm:text-xl font-medium text-[#1C1B35]">
                Skills & Expertise:
              </h3>
              <div className="mt-2 flex flex-wrap gap-4">
                <span className="inline-block bg-[#FFDCE05C] text-[#36324E] text-base sm:text-lg md:text-xl lg:text-2xl px-3 py-1 rounded-full">
                  Cyber Security
                </span>
                <span className="inline-block bg-[#FFDCE05C] text-[#36324E] text-base sm:text-lg md:text-xl lg:text-2xl px-3 py-1 rounded-full">
                  Ethical Hacking
                </span>
                <span className="inline-block bg-[#FFDCE05C] text-[#36324E] text-base sm:text-lg md:text-xl lg:text-2xl px-3 py-1 rounded-full">
                  Network Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
};

export default Page;
