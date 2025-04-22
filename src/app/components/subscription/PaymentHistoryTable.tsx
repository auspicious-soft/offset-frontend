"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ChevronsLeft, 
  ChevronsRight, 
  Calendar,
  ChevronDown
} from "lucide-react";

interface Payment {
  id: string;
  date: string;
  invoiceNumber: string;
  status: "Paid" | "Pending" | "Failed";
  amount: string;
}

interface PaymentHistoryTableProps {
  payments: Payment[];
  initialItemsPerPage?: number;
  initialPage?: number;
}

const PaymentHistoryTable: React.FC<PaymentHistoryTableProps> = ({
  payments,
  initialItemsPerPage = 4,
  initialPage = 1
}) => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [displayedPayments, setDisplayedPayments] = useState<Payment[]>([]);
  
  // Calculate total pages
  const totalItems = payments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Update displayed payments when page or items per page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    setDisplayedPayments(payments.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, payments, totalItems]);
  
  // Ensure current page is valid after changing items per page
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Pagination handlers
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-[#0BA932] ";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 pl-0 md:p-6">
        <h2 className="2xl:text-3xl lg:text-2xl md:text-lg text-base font-semibold text-gray-900">Payment History</h2>
        <Button 
          variant="link" 
          size="sm" 
          className="text-[#E5223A] p-0 h-auto flex items-center space-x-1"
        >
          <span>Export</span>
          <Download size={16} />
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[#7E7F91] 2xl:text-3xl lg:text-xl md:text-md text-sm font-medium">
              <th className="py-3 px-4 text-left">Payment Date</th>
              <th className="py-3 px-4 text-left">Invoice Number</th>
              <th className="py-3 px-4 text-left">Payment Status</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedPayments.map((payment) => (
              <tr key={payment.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-lg xl:text-xl 2xl:text-2xl gap-2 text-gray-700 flex items-center">
                  <Calendar color="red" />
                  {payment.date}
                </td>
                <td className="py-3 px-4 text-lg xl:text-xl 2xl:text-2xl text-gray-700">{payment.invoiceNumber}</td>
                <td className="py-3 px-4 text-lg xl:text-xl 2xl:text-2xl">
                  <span className={`inline-block px-[30px] py-[5px] rounded-full text-lg xl:text-xl 2xl:text-2xl font-bold ${getStatusColor(payment.status)}`}>
                    {payment.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-lg xl:text-xl 2xl:text-2xl text-gray-700">${payment.amount}</td>
                <td className="py-3 px-4 text-lg xl:text-xl 2xl:text-2xl">
                  <Download color="red" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between  items-center gap-6 lg:gap-[80px] mt-4 px-4 py-6">
        {/* Left side: Items per page + Current position */}
        <div className="2xl:text-xl sm:text-md text-sm flex sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 relative">
            <label className="text-neutral-600">Mentors per page:</label>
            <div className="relative ml-[8px] sm:ml-[16px] mr-[16px] sm:mr-[32px]">
              <select
                className="cursor-pointer rounded-md appearance-none 2xl:py-[18px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-10"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={4}>4</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={18} />
            </div>
          </div>

          <div className="flex items-center justify-center h-full min-h-[40px] gap-2">
            <span className="text-neutral-600">
              {totalItems === 0 ? '0' : (currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} Mentor
            </span>
          </div>
        </div>

        {/* Right side: Page selection and navigation */}
        <div className="2xl:text-xl sm:text-md text-sm flex sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-[25px] relative">
            <div className="relative">
              <select
                className="cursor-pointer rounded-md appearance-none border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-8 2xl:py-[18px] py-[12px] px-[14px]"
                value={currentPage}
                onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                disabled={totalPages === 0}
              >
                {Array.from({ length: totalPages || 1 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={16} />
            </div>
            <label className="text-neutral-600">of {totalPages || 1} pages</label>
          </div>

          <div className="flex items-center gap-3 sm:gap-[17px]">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1 || totalPages === 0}
              className="cursor-pointer rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50"
            >
              <ChevronLeft className="text-neutral-600" size={18} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
              className="cursor-pointer rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50"
            >
              <ChevronRight className="text-neutral-600" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;