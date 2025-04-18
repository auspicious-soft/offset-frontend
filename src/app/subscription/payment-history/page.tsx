"use client";

import React, { useState } from "react";
import Headers from "@/app/components/headers/page";
import Footers from "@/app/components/footers/page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SubscriptionCard from "@/app/components/subscription/SubscriptionCard";
import NextPayment from "@/app/components/subscription/NextPayment";
import PaymentHistoryTable from "@/app/components/subscription/PaymentHistoryTable";

// Sample payment data
const PAYMENT_DATA = [
  {
    id: "1",
    date: "Mar 5, 2025",
    invoiceNumber: "INV20240XXXX",
    status: "Paid" as const,
    amount: "9.99",
  },
  {
    id: "2",
    date: "Mar 5, 2025",
    invoiceNumber: "INV20240XXXX",
    status: "Paid" as const,
    amount: "9.99",
  },
  {
    id: "3",
    date: "Mar 5, 2025",
    invoiceNumber: "INV20240XXXX",
    status: "Paid" as const,
    amount: "9.99",
  },
  {
    id: "4",
    date: "Mar 5, 2025",
    invoiceNumber: "INV20240XXXX",
    status: "Paid" as const,
    amount: "9.99",
  },
  {
    id: "5",
    date: "Mar 5, 2025",
    invoiceNumber: "INV20240XXXX",
    status: "Paid" as const,
    amount: "9.99",
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20; // Example value

  return (
    <>
      <Headers />
      <div className="mb-10 md:mb-15 min-h-screen bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover">
          <div className="py-6 md:py-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-6 md:mb-10">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#727272]">
                      Subscription
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="w-px h-[11px] bg-[#E5223A]" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#E5223A]">
                      Payment History
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6 md:gap-8">
  {/* Subscription Information Row */}
  <div className="col-span-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Subscription Card */}
      <div>
        <SubscriptionCard 
          planPrice="19.99" 
          planFrequency="month" 
          status="Active" 
        />
      </div>
      
      {/* Next Payment Info */}
      <div>
        <NextPayment 
          date="On November 20, 2025" 
          additionalInfo="We will bill you $189.00 monthly + taxes, unless you cancel." 
        />
      </div>
    </div>
  </div>

  {/* Payment History Row - Full Width */}
  <div className="col-span-12">
    <PaymentHistoryTable 
      payments={PAYMENT_DATA}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
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