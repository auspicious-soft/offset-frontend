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
import {
  CreditCard,
  Palette as PayPal,
  Apple,
  CreditCardIcon,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const Page = () => {
  const [selectedFrequency, setSelectedFrequency] = useState<
    "monthly" | "yearly"
  >("yearly");
  const [selectedPayment, setSelectedPayment] = useState<
    "credit" | "paypal" | "apple" | "google"
  >("credit");

  return (
    <>
      <Headers />
      <div className="mb-10 md:mb-15">
        <div className="container px-4 sm:px-6 lg:px-8 bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-cover min-h-screen">
          <div className="mt-[10px] sm:mt-[30px] md:mt-[20px] lg:mt-[50px] text-xl font-medium">
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
                    Payment Method
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Billing Frequency Section */}
              <div className="mb-8 ">
                <h2 className="text-lg font-medium mb-4">Billing Frequency:</h2>
                <div className=" flex-wrap gap-4 grid grid-cols-1 md:grid-cols-2  ">
                  <div
                    className={`border rounded-lg p-4 flex flex-col w-full cursor-pointer relative ${
                      selectedFrequency === "monthly"
                        ? "border-[#E5223A]"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedFrequency("monthly")}
                  >
                    <p className="font-semibold mb-1">Pay Monthly</p>
                    <p className="text-xl font-bold">$239/month</p>
                    {selectedFrequency === "monthly" && (
                      <CheckCircle2
                         className="w-5 h-5 text-[white] bg-[#E5223A] rounded-full absolute top-9 right-3"
                        fill="#E5223A"
                        fillOpacity={0.1}
                      />
                    )}
                  </div>
                  <div
                    className={`border rounded-lg p-4 w-full flex flex-col cursor-pointer relative ${
                      selectedFrequency === "yearly"
                        ? "border-[#E5223A]"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedFrequency("yearly")}
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-semibold mb-1">Pay Yearly</p>
                    </div>
                    <div className="flex justify-start gap-2 items-center">
                      <p className="text-xl font-bold">$199/month</p>
                      <span className="bg-[#00CF46] text-white text-xs px-2 py-1 rounded-full">
                        Save 20%
                      </span>
                    </div>
                    {selectedFrequency === "yearly" && (
                      <CheckCircle2
                        className="w-5 h-5 text-[white] bg-[#E5223A] rounded-full absolute top-9 right-3"
                        fill="#E5223A"
                        fillOpacity={0.1}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Payment Method:</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* Credit / Debit Card */}
                  <div
                    key="credit"
                    className={`border rounded-lg p-4 flex items-center justify-center cursor-pointer h-16 relative ${
                      selectedPayment === "credit"
                        ? "border-[#E5223A]"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedPayment("credit" as any)}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/credit-card (2) 1.png"
                        alt="Google Pay"
                        width={50}
                        height={50}
                      />
                      <span className="text-sm font-medium">
                        Credit / Debit Card
                      </span>
                    </div>
                    {selectedPayment === "credit" && (
                      <CheckCircle2
                        className="w-5 h-5 text-[white] bg-[#E5223A] rounded-full absolute top-5 right-3"
                        fill="#E5223A"
                        fillOpacity={0.1}
                      />
                    )}
                  </div>

                  {/* PayPal */}
                  <div
                    key="paypal"
                    className={`border rounded-lg p-4 flex items-center justify-center cursor-pointer h-16 relative ${
                      selectedPayment === "paypal"
                        ? "border-[#E5223A]"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedPayment("paypal" as any)}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/image 1.png"
                        alt="Google Pay"
                        width={80}
                        height={80}
                      />
                    </div>
                    {selectedPayment === "paypal" && (
                      <CheckCircle2
                        className="w-5 h-5 text-[white] bg-[#E5223A] rounded-full absolute top-5 right-3"
                        fill="#E5223A"
                        fillOpacity={0.1}
                      />
                    )}
                  </div>

                  {/* Apple Pay */}
                  <div
                    key="apple"
                    className={`border rounded-lg p-4 flex items-center justify-center cursor-pointer h-16 relative ${
                      selectedPayment === "apple"
                        ? "border-[#E5223A]"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedPayment("apple" as any)}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/image 3.png"
                        alt="Google Pay"
                        width={80}
                        height={80}
                      />
                    </div>
                    {selectedPayment === "apple" && (
                      <CheckCircle2
                        className="w-5 h-5 text-[white] bg-[#E5223A] rounded-full absolute top-5 right-3"
                        fill="#E5223A"
                        fillOpacity={0.1}
                      />
                    )}
                  </div>

                  {/* Google Pay */}
                  <div
                    key="google"
                    className={`border rounded-lg p-4 flex items-center justify-center cursor-pointer h-16 relative ${
                      selectedPayment === "google"
                        ? "border-[#E5223A]"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedPayment("google" as any)}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/image 6.png"
                        alt="Google Pay"
                        width={80}
                        height={80}
                      />
                    </div>
                    {selectedPayment === "google" && (
                      <CheckCircle2
                        className="w-5 h-5 text-[white] bg-[#E5223A] rounded-full absolute top-5 right-3"
                        fill="#E5223A"
                        fillOpacity={0.1}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Information Section */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">
                  Payment Information:
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="4242 4242 4242 4242"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Card Holder Name</Label>
                    <Input
                      id="cardName"
                      placeholder="John Smith"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="border border-[#7E7F91]" />
                <p>Saved Card Details for future payments.</p>
              </div>
            </div>

            {/* Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">
                  Upgrade your plan:
                </h2>
                <p className="text-2xl font-bold mb-3">$2,268.00</p>
                <p className="text-[#7E7F91] text-sm mb-6">
                  We will bill you $189.00 monthly + taxes, unless you cancel.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <strong>
                      {" "}
                      <span>Premium Subscription</span>
                    </strong>
                    <strong>
                      <span>$199.00</span>
                    </strong>
                  </div>
                  <div className="text-[#7E7F91] ">
                    <p>
                      Up to 5 users in Offset 7. Ideal for small teams,
                      agencies, and startups.
                    </p>
                  </div>
                </div>

                <Link href="/subscription/payment-method/payment-success">
                <Button className=" cursor-pointer w-full mt-6 bg-[#E5223A] hover:bg-[#E5223A]">
                  Pay Now
                </Button>'
                </Link>

                <div className="flex justify-between mt-3 border-t py-4 font-semibold">
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
