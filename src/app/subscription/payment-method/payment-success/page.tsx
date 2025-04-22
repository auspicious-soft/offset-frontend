'use client';

import React, { useState } from "react";
import Headers from "@/app/components/headers/page";
import Footers from "@/app/components/footers/page";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Page = () => {



  return (
    <>
      <Headers />
      <div className="mb-10 md:mb-15">
      <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 relative"
          >
           <div className="flex items-center justify-center">
      {/* Outermost light green circle */}
      <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-[#59CE5010]">
        {/* Middle light green circle */}
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#59CE5018]">
          {/* Inner light green circle */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#59CE5021]">
            {/* Green checkmark image */}
            <Image
  src="/paymentSuccessful.svg"
  alt="Checkmark"
  width={363}
  height={363}
  className="h-[363px] w-[363px] 2xl:h-[480px] 2xl:w-[480px]"
/>
          </div>
        </div>
      </div>
    </div>
          </motion.div>
          

          <motion.h1 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="2xl:text-5xl xl:text-3xl md:text-xl text-md font-medium text-gray-900 mb-[17px] text-center whitespace-nowrap"
>
  Payment Successful!
</motion.h1>

          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-gray-600 mb-8 text-center"
          >
            Your payment has been processed successfully!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-full flex flex-col gap-3"
          >

          <Link href="/homepage">
            <Button 
              className="w-full bg-[#E5223A] hover:bg-[#E5223A] cursor-pointer text-white    
               mt-4 md:mt-6   font-medium 2xl:py-[25px] py-[25px]  px-4 rounded-xl  text-md lg:text-md 2xl:text-xl "
              // onClick={() => setShowSuccess(false)}
            >
              Go to Home
            </Button>
            </Link>
            
            <Link href="/subscription/payment-method/payment-success/invoice-detail">
            <Button 
              variant="ghost"
              className=" w-full text-[#1C1B35] border border-[#7C7C7C4A] cursor-pointer hover:text-[#1C1B35]                   font-medium 2xl:py-[25px] py-[25px]  px-4 rounded-xl  text-md lg:text-md 2xl:text-xl "
              onClick={() => console.log('View invoice')}
            >
              View Invoice
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
        </div>
     
      <Footers />
    </>
  );
};

export default Page;