"use client";
import React from "react";
import Headers from "@/app/components/headers/page";
import Footers from "@/app/components/footers/page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Download } from "lucide-react";

const InvoiceDetailsPage = () => {
  return (
    <>
      <Headers />
      <div className="mb-10 md:mb-15 min-h-screen w-full bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover">
           <div className="py-6 md:py-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#727272] text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl">
                      Invoice
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="w-px h-[11px] bg-[#E5223A]" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#E5223A] text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl">
                      Invoice Details
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-medium mb-6">Payment: #INV2024XXXX</h1>
            {/* Invoice Content */}

            <div className="bg-[#F9F9F9] py-5 px-2 mb-3 rounded-lg shadow p-6">
              {/* User Info and Download Button */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="bg-gray-700 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl mr-3">
                    M
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl">Michael Welch</p>
                    <p className="text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg">March 5, 2025</p>
                  </div>
                </div>
                <button className="bg-[#E5223A] text-white rounded-md px-3 py-1 md:px-4 md:py-2 flex items-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg">
                  Download <Download className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                </button>
              </div>

              {/* Due Amount */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl">Due Amount:</p>
                  <p className="font-medium">
                    <span className="text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mr-2">Visa **** 4321</span>
                    <span className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">$12.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto">
              <div className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div>
                    <div className="bg-gray-50 rounded-md p-4">
                      <div className="bg-green-100 text-green-800 text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base font-medium px-2.5 py-0.5 rounded inline-block mb-2">
                        Subscription Plan
                      </div>
                      <h3 className="font-medium text-gray-800 mb-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Premium ($9.99/month)</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700">Full Cybersecurity Access</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700">Real-Time Alerts</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700">Advanced Analytics</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700">Priority Support</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-[#F9F9F9] py-4 px-2 rounded-2xl">
                        <p className="text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mb-1">Total Amount:</p>
                        <p className="font-medium text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">$9.99</p>
                      </div>
                      <div className="bg-[#F9F9F9] py-4 px-2 rounded-2xl">
                        <p className="text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mb-1">Billing Cycle:</p>
                        <p className="font-medium text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl">Mar 1 - 31, 2025</p>
                      </div>
                      <div className="bg-[#F9F9F9] py-4 px-2 rounded-2xl">
                        <p className="text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mb-1">Status:</p>
                        <p className="text-green-500 font-medium text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Paid</p>
                      </div>
                      <div className="bg-[#F9F9F9] py-4 px-2 rounded-2xl">
                        <p className="text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mb-1">Invoice Date:</p>
                        <p className="font-medium text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl">Mar 1, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default InvoiceDetailsPage;