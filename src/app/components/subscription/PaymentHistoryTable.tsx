"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ChevronsLeft, 
  ChevronsRight 
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
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaymentHistoryTable: React.FC<PaymentHistoryTableProps> = ({
  payments,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900">Payment History</h2>
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
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Payment Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Invoice Number</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Payment Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Amount</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-sm text-gray-700 flex items-center">
                  <span className="h-4 w-4 mr-2 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5223A]"></span>
                  </span>
                  {payment.date}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">{payment.invoiceNumber}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                    {payment.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">${payment.amount}</td>
                <td className="py-3 px-4 text-sm">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0 text-gray-500 hover:text-[#E5223A]"
                  >
                    <Download size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100 bg-gray-50">
        <div className="flex items-center text-sm text-gray-500">
          <span>Showing per page:</span>
          <select className="ml-2 border border-gray-200 rounded p-1 text-sm">
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
          <span className="ml-4">1-5 of 100 items</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-gray-500" 
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            <ChevronsLeft size={16} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-gray-500" 
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-gray-500" 
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-gray-500" 
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;