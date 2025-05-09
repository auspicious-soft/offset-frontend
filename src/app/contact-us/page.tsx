"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "../components/headers/page";
import Script from "next/script";
import toast, { Toaster } from "react-hot-toast";
import { contactUs } from "@/services/user-service";

interface FaqItem {
  _id: string;
  question: string;
  answer: string;
}
type DropdownKeys = "isOpen1" | "isOpen2" | "isOpen3" | "isOpen4" | "isOpen5";

const Page = () => {
  const [dropdownState, setDropdownState] = useState<{
    [key in DropdownKeys]: boolean;
  }>({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
  });

  const toggleDropdown = (key: DropdownKeys) => {
    setDropdownState((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, curr) => {
        acc[curr as DropdownKeys] = curr === key ? !prevState[key] : false;
        return acc;
      }, {} as { [key in DropdownKeys]: boolean });
      return newState;
    });
  };

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      if (!form.fullName.trim()) return toast.error("fullName is required");
      if (!form.email.trim()) return toast.error("Email is required");
      if (!form.email.includes("@")) return toast.error("Please enter a valid email address");
      if (!form.phone.trim()) return toast.error("Phone is required");

      if (form.phone.length !== 10) {
        return toast.error("Please enter a correct 10-digit phone number");
      }

      if (!form.message.trim()) return toast.error("Message is required");

      const response = await contactUs("/help", form);
      if (response.status === 201) {
        toast.success(response.data.message);
        setForm({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error as any);
    }
  };


  return (
    <>
      <div className=" bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
        <Headers />
        <div className="container">
          <div className="lg:mt-[59px]">
            {/* top  */}
            <div className="relative w-full ">
              <Image
                src="/images/contactUs.png"
                alt="earth"
                width={1580}
                height={415}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[415px] object-cover rounded-xl"
                priority
              />

              <div className="absolute inset-0 flex  flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex gap-[10px] sm:gap-[12px] md:gap-[14px] items-center">
                  <Image
                    src="/horizontalRedLine.svg"
                    alt="left arrow"
                    height={4}
                    width={30}
                    className="w-[20px] sm:w-[30px] md:w-[41px]"
                  />

                  <div className="text-center text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    Contact Us
                  </div>

                  <Image
                    src="/horizontalRedLine.svg"
                    alt="right arrow"
                    height={0}
                    width={30}
                    className="w-[20px] sm:w-[30px] md:w-[41px]"
                  />
                </div>

                <div className="mt-4 sm:mt-5 text-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-[90%] md:max-w-[600px]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
              </div>
            </div>

            {/* middle  */}
            <div className="flex flex-col lg:flex-row my-[46px] md:my-[126px]  gap-[102px]">
              {/* Left Section */}
              <div className="w-full lg:w-[50%]">
                <div className="mt-[20px]  lg:mt-[43px] self-stretch justify-start text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl ">
                  <span className="text-[#1C1B35]  ">We are</span>
                  <span className="text-[#E5223A] "> always ready</span>
                  <span className="text-[#1C1B35]">
                    {" "}
                    to help you and answer your questions
                  </span>
                </div>

                <div className="mt-[21px] justify-start text-[#1C1B35] text-lg sm:text-lg md:text-xl 2xl:text-2xl font-normal">
                  If you have any inquiries or need assistance, feel free to
                  reach out to us. Our team is available 24/7 to support you.
                </div>

                {/* top  */}
                <div className="mt-[40px] mb-[42px]  lg:mt-[80px] lg:mb-[80px]  grid grid-cols-2 md:grid-cols-2 gap-[42px] md:gap-[49px]">
                  <div className="flex justify-center md:justify-start">
                    <div>
                      <div className="self-stretch justify-center text-[#1C1B35] text-2xl sm:text-3xl 2xl:text-4xl font-medium">
                        Call Center
                      </div>
                      <div className="mt-[15px] justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">
                        +1 (800) 123-4567
                      </div>
                      <div className="justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">
                        +1 (800) 987-6543
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <div>
                      <div className="self-stretch justify-center text-[#1C1B35] text-2xl sm:text-3xl 2xl:text-4xl font-medium">
                        Our Location
                      </div>
                      <div className="mt-[15px] justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">
                        USA, New York – 10001
                      </div>
                      <div className="justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">
                        1st Avenue, Cyber Tower
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom  */}
                <div className="grid grid-cols-2 md:grid-cols-2  gap-[49px]">
                  <div className="flex justify-center md:justify-start">
                    <div>
                      <div className="self-stretch justify-center text-[#1C1B35] text-2xl sm:text-3xl 2xl:text-4xl font-medium">
                        Email Address
                      </div>
                      <div className="mt-[15px] justify-start text-[#1C1B35] text-lg 2xl:text-2xl font-normal">
                        support@offset7.com
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <div>
                      <div className="self-stretch justify-center text-[#1C1B35] text-2xl sm:text-3xl 2xl:text-4xl font-medium">
                        Follow Us
                      </div>

                      <div className="mt-[15px] justify-start text-[#1C1B35] text-md 2xl:text-2xl font-normal">
                        <div className="flex gap-2 sm:gap-3 justify-start">
                          <div className="bg-[#CF201F] flex items-center justify-center rounded-lg cursor-pointer">
                            <Image
                              src="/yt.svg"
                              alt="YouTube"
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="bg-[#18B8EA] flex items-center justify-center rounded-lg cursor-pointer">
                            <Image
                              src="/v.svg"
                              alt="Twitter/X Profile"
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="bg-[#3E599C] flex items-center justify-center rounded-lg cursor-pointer">
                            <Image
                              src="/fb.svg"
                              alt="Facebook Page"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-[50%]">
                <div className="p-[10px] md:p-[42px]  relative bg-stone-50 rounded-[30px] overflow-hidden">
                  <div className="flex gap-[16px]">
                    <div className="w-[10px] h-10 bg-rose-600 rounded-full" />
                    <div>
                      <div className="justify-start text-[#1C1B35] text-xl sm:text-4xl 2xl:text-5xl font-bold">
                        Get in Touch
                      </div>
                      <div className="mt-[9px] justify-start text-[#727272] text-sm sm:text-lg 2xl:text-xl font-normal">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </div>
                    </div>
                  </div>

                  <div className=" mt-[20px] md:mt-[30px] 2xl:mt-[45px]">
                    <form onSubmit={handleSubmit}>
                      <Toaster position="top-right" />

                      <div className="rounded-xl relative w-full py-[9px] sm:px-0">
                        <Image
                          src="/user.svg"
                          alt="Message box"
                          height={20}
                          width={20}
                          className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                        />
                        <input
                          type="text"
                          name="fullName"
                          placeholder="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          className="rounded-xl text-[#7E7F91] w-full text-sm sm:text-lg sm:py-4 border border-[#7C7C7C40] focus:outline-none py-3.5 pl-15 pr-3.5"
                        />
                      </div>

                      <div className="rounded-xl relative w-full py-[9px] sm:px-0">
                        <Image
                          src="/contact-Message.svg"
                          alt="Message box"
                          height={20}
                          width={20}
                          className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                        />

                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          value={form.email}
                          onChange={handleChange}
                          className="rounded-xl text-[#7E7F91] w-full text-sm sm:text-lg sm:py-4 border border-[#7C7C7C40] focus:outline-none pl-15 pr-3.5 py-3.5"
                        />
                      </div>

                      <div className="rounded-xl relative w-full py-[9px] sm:px-0">
                        <Image
                          src="/images/phone.png"
                          alt="Message box"
                          height={20}
                          width={20}
                          className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Please Enter Phone"
                          value={form.phone}
                          onChange={handleChange}
                          onKeyDown={(e) => {
                            if (
                              !/[0-9]/.test(e.key) &&
                              e.key !== "Backspace" &&
                              e.key !== "Delete" &&
                              e.key !== "ArrowLeft" &&
                              e.key !== "ArrowRight" &&
                              e.key !== "Tab"
                            ) {
                              e.preventDefault();
                            }
                          }}
                          onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.replace(/\D/g, "");
                            handleChange(e);
                          }}
                          onBlur={(e) => {
                            const value = e.target.value;
                            if (value.length !== 10) {
                              toast.error(
                                "Please enter a correct 10-digit phone number"
                              );
                            }
                          }}
                          className="rounded-xl text-[#7E7F91] w-full text-sm sm:text-lg sm:py-4 border border-[#7C7C7C40] focus:outline-none pl-15 pr-3.5 py-3.5"
                        />
                      </div>

                      <div className="rounded-xl relative w-full py-[9px] sm:px-0">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={form.message}
                          onChange={handleChange}
                          className="h-40 rounded-xl text-[#7E7F91] w-full pl-[15px] text-sm sm:text-lg pt-4 border border-[#7C7C7C40] focus:outline-none resize-none"
                        />
                      </div>

                      <div className="relative w-full mt-[5px] sm:px-0 min-h-[80px] ">
                        <button
                          type="submit"
                          className=" w-full rounded-xl absolute right-1 top-1/2 -translate-y-1/2 px-[36px] py-[14px] md:py-[17px] bg-[#E5223A] hover:bg-[#E5223A] text-white text-lg 2xl:text-2xl cursor-pointer"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq  */}
        <div className=" bg-[url('/images/dotsBGImage.png')]  bg-no-repeat bg-size-[100%]">
          <div className="container">
            <div className="relative w-full mb-[46px] md:mb-[126px] ">
              <div className="absolute  inset-0 z-0 w-full h-full">
                <Image
                  src="/images/pinkFrame2.png"
                  alt="earth"
                  className="w-full h-full object-cover rounded-[30px]  2xl:max-h-[841px]"
                  priority
                  width={0}
                  height={0}
                  sizes="100vw "
                />
              </div>

              <div className="relative z-10 py-[20px] md:py-[86px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex gap-[10px] sm:gap-[12px] md:gap-[14px] items-center flex-wrap justify-center">
                  <Image
                    src="/horizontalRedLine.svg"
                    alt="left arrow"
                    height={0}
                    width={30}
                    className="w-[20px] sm:w-[30px] md:w-[41px]"
                  />
                  <div className="text-center text-[#1C1B35] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    Frequently Asked Questions
                  </div>
                  <Image
                    src="/horizontalRedLine.svg"
                    alt="right arrow"
                    height={0}
                    width={30}
                    className="w-[20px] sm:w-[30px] md:w-[41px]"
                  />
                </div>

                <div className="mt-4 sm:mt-5 text-center text-[#1C1B35] text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-[90%] md:max-w-[600px]">
                  Discover the Impact of Our Efforts Through Key Statistics.
                </div>

                {/* Dropdowns */}
                <div className="mt-[20px] md:mt-[83px] w-full max-w-[1000px] px-4 sm:px-[50px] md:px-[87px] flex flex-col gap-2">
                  {[
                    {
                      q: "1. What is Offset 7?",
                      a: "Offset 7 is a cybersecurity company that specializes in...",
                      key: "isOpen1" as DropdownKeys, // Explicitly type the key
                    },
                    {
                      q: "2. How can I report a security incident?",
                      a: "Offset 7 provides tailored cybersecurity solutions to protect businesses...",
                      key: "isOpen2" as DropdownKeys,
                    },
                    {
                      q: "3. Do you offer cybersecurity consultation?",
                      a: "Offset 7 serves industries including healthcare, finance, and technology...",
                      key: "isOpen3" as DropdownKeys,
                    },
                    {
                      q: "4. How can I subscribe to Offset 7 updates?",
                      a: "You can contact us via email at contact@offset7.com or visit our website...",
                      key: "isOpen4" as DropdownKeys,
                    },
                    {
                      q: "5. Where can I follow Offset 7 for updates?",
                      a: "Offset 7 stands out by providing innovative cybersecurity solutions combined with personalized service...",
                      key: "isOpen5" as DropdownKeys,
                    },
                  ].map(({ q, a, key }, i) => (
                    <div key={i}>
                      <div
                        className="px-[1px] md:px-[21px] py-[21px] flex justify-between items-center gap-4 cursor-pointer"
                        onClick={() => toggleDropdown(key)}
                      >
                        <div className="text-[#1C1B35] text-md md:text-xl 2xl:text-3xl font-medium">
                          {q}
                        </div>
                        <Image
                          src="/RedDownArrow.svg"
                          alt="toggle dropdown"
                          height={14}
                          width={24}
                          className={`transform transition-transform duration-300 ease-in-out ${
                            dropdownState[key] ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                      {dropdownState[key] && (
                        <div className="mb-[15px] px-[1px] md:px-[21px] text-[#1C1B35] text-sm md:text-md 2xl:text-xl">
                          {a}
                        </div>
                      )}
                      <div className="border-b border-[#7C7C7C40]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* map address  */}
      <div className="w-full max-w-full rounded-lg shadow-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.83262432781277!2d76.69078367000331!3d30.699812987885444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef4541577f9%3A0x7607b392be136748!2sAuspicious%20Soft%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1744782338676!5m2!1sen!2sin"
          className="w-full h-[400px] rounded-lg"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AuspiciousSoft Office Location"
        />
      </div>

      <Footers />
    </>
  );
};

export default Page;

{
  /* Structured data for contact page */
}
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
/>;
