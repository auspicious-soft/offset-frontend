"use client";
import React, { useState } from "react";
import Headers from "@/app/components/headers/page";
import Footers from "@/app/components/footers/page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CreditCard, Palette as PayPal, Apple, CreditCardIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const Page = () => {
 const [selectedFrequency, setSelectedFrequency] = useState<"monthly" | "yearly">("yearly");
 const [selectedPayment, setSelectedPayment] = useState<"credit" | "paypal" | "apple" | "google">("credit");

 return (
  <>
   <Headers />
   <div className="mb-10 md:mb-15">
    <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover min-h-screen">
     <div className="mt-[10px] sm:mt-[30px] md:mt-[20px] lg:mt-[50px] text-xl font-medium">
      <Breadcrumb>
       <BreadcrumbList>
        <BreadcrumbItem>
         <BreadcrumbPage className="text-[#727272]">Subscription</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="w-px h-[11px] bg-[#E5223A]" />
        <BreadcrumbItem>
         <BreadcrumbPage className="text-[#E5223A]">Payment Method</BreadcrumbPage>
        </BreadcrumbItem>
       </BreadcrumbList>
      </Breadcrumb>
     </div>

     <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-[120px] gap-[50px]">
      <div className="lg:col-span-2">
       {/* Billing Frequency Section */}
       <div className="md:mb-[51px] mb-[25px]  ">
        <h2 className="2xl:text-3xl lg:text-xl text-lg font-medium mb-4">Billing Frequency:</h2>
        <div className=" flex-wrap gap-4 grid grid-cols-1 md:grid-cols-2  ">

         <div
          className={`border rounded-2xl  outline-[1.50px] outline-offset-[-1.50px] outline-stone-300/30  md:pt-[35px] md:pb-[29px] md:px-[28px] p-4 flex flex-col w-full cursor-pointer relative ${selectedFrequency === "monthly" ? "border-[#E5223A]" : "border-gray-200"}`}
          onClick={() => setSelectedFrequency("monthly")}
         >
          <p className="font-semibold mb-1 text-[#7E7F91] 2xl:text-lg lg:text-md text-sm">Pay Monthly</p>
          <p className="text-xl font-bold">$239/month</p>
          {selectedFrequency === "monthly" &&  <Image height={20} width={20} src="/images/redTick.png" alt="check" className="absolute top-9 right-3" />}
         </div>

         <div
          className={`border rounded-2xl  outline-[1.50px] outline-offset-[-1.50px] md:pt-[35px] md:pb-[29px] md:px-[28px] p-4  w-full flex flex-col cursor-pointer relative ${selectedFrequency === "yearly" ? "border-[#E5223A]" : "border-gray-200"}`}
          onClick={() => setSelectedFrequency("yearly")}
         >
          <div className="flex justify-between items-center">
           <p className="font-semibold mb-1 text-[#7E7F91] 2xl:text-lg lg:text-md text-sm">Pay Yearly</p>
          </div>
          <div className="flex justify-start gap-2 items-center">
           <p className="text-xl font-bold ">$199/month</p>
           <span className="bg-[#00CF46] text-white 2xl:text-lg lg:text-md text-sm md:p-[10px] p-[5px] rounded-lg ml-[18px]">Save 20%</span>
          </div>
          {selectedFrequency === "yearly" && <Image height={20} width={20} src="/images/redTick.png" alt="check" className="absolute top-9 right-3" />}
         </div>

        </div>
       </div>

       {/* Payment Method Section */}
       <div className="mb-[51px] ">
        <h2 className="2xl:text-3xl lg:text-xl text-lg font-medium mb-4">Payment Method:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 gap-4">
         {/* Credit / Debit Card */}
         <div key="credit" className={`border rounded-2xl px-4 h-16 relative cursor-pointer ${selectedPayment === "credit" ? "border-[#E5223A]" : "border-gray-200"}`} onClick={() => setSelectedPayment("credit" as any)}>
          <div className="flex items-center justify-center gap-2 h-full w-full">
           <Image src="/images/credit-card (2) 1.png" alt="Google Pay" width={41} height={41} />
           <span className="2xl:text-2xl lg:text-md text-sm font-medium">Credit / Debit Card</span>
          </div>

          {selectedPayment === "credit" && <Image height={20} width={20} src="/images/redTick.png" alt="check" className="absolute top-5 right-3" />}
         </div>

         {/* PayPal */}
         <div
          key="paypal"
          className={`border rounded-2xl outline-[1.5px] outline-offset-[-1.5px] outline-stone-300/30 p-4 py-[29px]  flex items-center justify-center cursor-pointer h-16 relative ${selectedPayment === "paypal" ? "border-[#E5223A]" : "border-gray-200"}`}
          onClick={() => setSelectedPayment("paypal" as any)}
         >
          <div className="flex items-center ">
           <Image src="/images/image 1.png" alt="Google Pay" width={122} height={32} />
          </div>

          {selectedPayment === "paypal" && <Image height={20} width={20} src="/images/redTick.png" alt="check" className="absolute top-5 right-3" />}
         </div>

         {/* Apple Pay */}
         <div
          key="apple"
          className={`border rounded-2xl  outline-[1.50px] outline-offset-[-1.50px] outline-stone-300/30 p-4 py-[29px]   flex items-center justify-center cursor-pointer h-16 relative ${selectedPayment === "apple" ? "border-[#E5223A]" : "border-gray-200"}`}
          onClick={() => setSelectedPayment("apple" as any)}
         >
          <div className="flex items-center gap-2">
           <Image src="/images/image 3.png" alt="Google Pay" width={93} height={54} />
          </div>
          {selectedPayment === "apple" && <Image height={20} width={20} src="/images/redTick.png" alt="check" className="absolute top-5 right-3" />}
         </div>

         {/* Google Pay */}
         <div
          key="google"
          className={`border rounded-2xl  outline-[1.50px] outline-offset-[-1.50px] outline-stone-300/30 p-4 py-[29px]  flex items-center justify-center cursor-pointer h-16 relative ${selectedPayment === "google" ? "border-[#E5223A]" : "border-gray-200"}`}
          onClick={() => setSelectedPayment("google" as any)}
         >
          <div className="flex items-center gap-2">
           <Image src="/images/image 6.png" alt="Google Pay" width={69} height={69} />
          </div>
          {selectedPayment === "google" &&  <Image height={20} width={20} src="/images/redTick.png" alt="check" className="absolute top-5 right-3" />}
         </div>
        </div>
       </div>

       {/* Payment Information Section */}
       <div className="mb-8">
        <h2 className="2xl:text-3xl lg:text-xl md:text-lg text-lg font-medium mb-4">Payment Information:</h2>
        <div className="space-y-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-[53px] mt-[20px]">
          <div>
           <Label htmlFor="cardNumber " className="2xl:text-2xl lg:text-lg md:text-md text-md font-medium">
            Card Number
           </Label>
           <Input id="cardNumber" placeholder="4242 4242 4242 4242" className=" mt-1 lg:px-[20px] lg:py-[24px] pl-[20px] py-[24px] rounded-xl outline-1 outline-offset-[-0.97px] outline-neutral-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
           <div className="w-full">
            <Label htmlFor="expiryDate" className="2xl:text-2xl lg:text-lg md:text-md text-md font-medium">
             Expiry Date
            </Label>

            <div className="relative w-full">
             <Input id="expiryDate" placeholder="MM/YY" className="mt-1 lg:px-[36px] lg:py-[24px] pl-[52px] py-[24px] rounded-xl outline-1 outline-offset-[-0.97px] outline-neutral-400" />
             <div className="absolute top-1/2 left-[15px] -translate-y-1/2">
              <Image src="/calender.svg" alt="Calendar" width={20} height={20} className="h-[17px] w-[17px] md:h-[20px] md:w-[20px]" />
             </div>
            </div>
           </div>

           <div>
            <Label htmlFor="cvv" className="2xl:text-2xl lg:text-lg md:text-md text-md font-medium">
             CVV
            </Label>
            <Input id="cvv" placeholder="123" className="mt-1 lg:px-[20px] lg:py-[24px] pl-[20px] py-[24px] rounded-xl outline-1 outline-offset-[-0.97px] outline-neutral-400" />
           </div>
          </div>
         </div>
         <div>
          <Label htmlFor="cardName" className="2xl:text-2xl lg:text-lg md:text-md text-md font-medium">
           Card Holder Name
          </Label>

          <div className="relative w-full">
           <Input id="cardName" placeholder="John Smith" className="mt-1 lg:px-[36px] lg:py-[24px] pl-[52px] py-[24px] rounded-xl outline-1 outline-offset-[-0.97px] outline-neutral-400" />
           <div className="absolute top-1/2 left-[15px] -translate-y-1/2">
            <Image src="/Profile.svg" alt="Profile" width={19} height={24} className="h-[20px] w-[15px] md:h-[24px] md:w-[19px]" />
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="flex items-center gap-2">
        <Checkbox className="border border-[#7E7F91]" />
        <p className="2xl:text-2xl lg:text-lg md:text-md text-sm ">Saved Card Details for future payments.</p>
       </div>
      </div>

      {/* Summary Section */}
      <div className="lg:col-span-1">
       <div className="bg-gray-50 p-6 rounded-[30px] ">
        <h2 className="2xl:text-3xl lg:text-xl text-lg font-medium mb-[20px]">Upgrade your plan:</h2>
        <p className="2xl:text-7xl lg:text-5xl md:text-3xl text-xl font-medium mb-3">$2,268.00</p>
        <p className="text-[#7E7F91] 2xl:text-xl lg:text-md text-sm ">We will bill you $189.00 monthly + taxes, unless you cancel.</p>
        <div className="self-stretch border-t border-black/10 mb-[26px] mt-[26px]" />

        <div className="">
         <div className="flex justify-between 2xl:text-3xl lg:text-lg text-md font-medium">
          <strong>
           {" "}
           <span>Premium Subscription</span>
          </strong>
          <strong>
           <span>$199.00</span>
          </strong>
         </div>
         <div className="text-[#7E7F91] mt-[22px] 2xl:text-xl lg:text-md text-sm">
          <p>Up to 5 users in Offset 7. Ideal for small teams, agencies, and startups.</p>
         </div>
        </div>

        <Link href="/subscription/payment-method/payment-success">
         <Button
          className=" w-full bg-[#E5223A] hover:bg-[#E5223A] cursor-pointer text-white    
               mt-5 md:mt-6   font-medium 2xl:py-[25px] py-[25px]  px-4 rounded-xl  text-md lg:text-md 2xl:text-xl "
         >
          Pay Now
         </Button>
         
        </Link>


        <div className="flex justify-between mt-[25px] border-t py-4 font-medium 2xl:text-3xl lg:text-xl md:text-md text-md ">
         <span>Subtotal:</span>
         <span>$199.00</span>
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

export default Page;
