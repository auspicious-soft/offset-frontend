"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import Script from "next/script";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Dot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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

const allMentors: Mentor[] = [
  {
    id: 1,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 2,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 3,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 4,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 5,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 6,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 7,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 8,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 9,
    name: "Mark Davidson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  // Adding more mentors for pagination demonstration
  {
    id: 10,
    name: "Emma Johnson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 11,
    name: "David Miller",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 12,
    name: "Sarah Wilson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 13,
    name: "Michael Brown",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 14,
    name: "Jessica Davis",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
  {
    id: 15,
    name: "Christopher Wilson",
    title: "Mentor",
    image: "/images/Ellipse 536.png",
    description:
      "It is a long established fact that a reader will be distr-acted by the readable content of a page when looking at its layout...",
  },
];

const Page = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [displayedMentors, setDisplayedMentors] = useState<Mentor[]>([]);
  const [totalItems] = useState(allMentors.length);

  // Calculate total pages based on items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Update displayed mentors when page or items per page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedMentors(allMentors.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    // Reset to first page when changing items per page
    setCurrentPage(1);
  };

  // Handle go to specific page
  const handleGoToPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPage = parseInt(e.target.value, 10);
    setCurrentPage(newPage);
  };

  // Calculate displayed item range
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page options for dropdown
  const pageOptions = Array.from({ length: totalPages }, (_, i) => i + 1);

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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
              </div>
            </div>

            {/* Mentor Cards Section */}
            <div className="py-10">
              <div className="mx-auto py-6 sm:py-8 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {displayedMentors.map((mentor) => (
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
                      <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
                        {mentor.description}
                      </p>
                      <div
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={() =>
                          router.push(`/mentors/mentor-detail/${mentor.id}`)
                        }
                      >
                        <ArrowUpRight className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pagination Controls */}
              <div className="px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                <div className="flex items-center text-sm text-gray-500 w-full sm:w-auto">
                  <span>Mentors per page:</span>
                  <select 
                    className="ml-2 border border-gray-200 bg-[#F8F8F8] rounded py-3 px-2 text-sm"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                  >
                    <option value={5}>5</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                    <option value={15}>15</option>
                  </select>
                  <span className="ml-4">{startItem}-{endItem} of {totalItems} Mentors</span>
                </div>

                <div className="flex items-center flex-wrap space-x-1 w-full sm:w-auto justify-end">
                  <div className="flex items-center text-sm text-gray-500">
                    <select 
                      className="mr-2 border border-gray-200 bg-[#F8F8F8] rounded py-3 px-2 text-sm"
                      value={currentPage}
                      onChange={handleGoToPage}
                    >
                      {pageOptions.map(page => (
                        <option key={page} value={page}>{page}</option>
                      ))}
                    </select>
                    <span className="mr-4">of {totalPages} pages</span>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 text-gray-500 border cursor-pointer border-[#c6c6c7] "
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={30} color="#4E4F54" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 text-gray-500 border cursor-pointer border-[#c6c6c7]"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight size={30} color="#4E4F54" />
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="my-5 bg-[#FFF3F3] relative py-10 rounded-lg overflow-hidden">
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
              <div className="absolute left-0 bottom-0">
                <Image
                  src="/images/Group 1171275997.png"
                  alt="earth"
                  className="object-contain"
                  priority
                  width={400}
                  height={300}
                />
              </div>
              <div className="absolute right-0 top-0">
                <Image
                  src="/images/Group 1171275998.png"
                  alt="earth"
                  className="object-contain"
                  priority
                  width={400}
                  height={300}
                />
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