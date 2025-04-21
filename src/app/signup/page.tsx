"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HomePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordd, setShowPasswordd] = useState(false);
  const [active, setActive] = useState("tools");
  const [country, setCountry] = useState("");
  const selectRef = useRef<HTMLSelectElement>(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    if (!firstName.trim()) {
      toast.error("Please enter first name");
      return;
    }

    if (!lastName.trim()) {
      toast.error("Please enter last name");
      return;
    }

    if (!email) {
      toast.error("Please enter email");
      return;
    }

    if (!country) {
      toast.error("Please enter country");
      return;
    }

    if (!password) {
      toast.error("Please enter password");
      return;
    }

    if (!confirmPassword) {
      toast.error("Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!checked) {
      toast.error("You must agree to the Terms & Conditions");
      return;
    }

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Country:", country);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Agreed to Terms:", checked);

    toast.success("Form submitted!");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setCountry("");
    setChecked(false);
  };

  return (
    <>
      <ToastContainer />

      <div
        className={`${jost.className} flex flex-col lg:flex-row min-h-screen`}
      >
        <div className=" w-full lg:w-[45%]  2xl:w-[40%] h-auto  lg:mn-h-full relative object-contain">
          {/* Background Image */}
          <Image
            src="/images/loginBG.png"
            alt="Login Image"
            width={829}
            height={1217}
            className="w-full h-full object-cover object-top absolute top-[0px]"
          />
          <div className="relative z-10 md:h-full p-[30px] md:p-[45px] 2xl:p-[55px]">
            <div className="w-full  mx-auto flex gap-20 flex-col md:h-full justify-between">
              <div className="max-w-[660px] w-full mx-auto">
                <Link href="/homepage" aria-label="Offset7 Home" className="">
                  <Image
                    src="/images/offset.png"
                    alt="Offset7 Logo"
                    height={129}
                    width={129}
                    className="w-[80px] h-[80px] md:w-[129px] md:h-[129px] mb-4 md:mb-10 relative left-[-12px]"
                    priority
                  />
                </Link>
                <div
                  className="text-white text-[18px] md:text-[22px] 2xl:text-[26px] font-medium"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  Welcome to Offset7 👋
                </div>
                <div
                  className="justify-start text-white text-[34px] md:text-[46px] 2xl:text-[58px] font-medium my-3"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  Stay Secure with Real-Time Threat Intelligence.
                </div>

                <div
                  className="self-stretch justify-start text-white text-[16px] 2xl:text-lg font-normal "
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  Join Offset7 to monitor threats, safeguard your data, and take
                  control of your cybersecurity.
                </div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src="computer.svg"
                  alt="Computer"
                  height={520}
                  width={520}
                  className="m-auto w-[84%] 2xl:w-full 2xl:max-w-[520px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className=" w-full lg:w-[55%] 2xl:w-[60%] bg-[url('/images/dotsBGImage.png')] bg-cover py-[30px] px-[20px] md:py-[35px] md:px-[80px] 2xl:px-[128px] flex justify-center items-center ">
          <div className="bg-white rounded-[20px] md:rounded-[39px]  outline-1 outline-offset-[-1px] outline-[#cdc8c8]/20 px-[20px] py-[30px] lg:py-[35px] 2xl:px-[45px]">
            <div
              className="text-[#1c1b35] text-[30px] md:text-[36px] 2xl:text-[41px] font-semibold capitalize mb-3.5"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Sign Up
            </div>

            <div
              className="text-[#7E7F91] text-[16px] md:text-[18px] 2xl:text-[20px] font-normal capitalize leading-[1.6]"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Create your Offset7 account to access real-time threat
              intelligence, secure your data, and stay ahead of cyber threats.
            </div>

            <div
              className="mt-[30px] mb-[15px] text-[#1C1B35] text-md 2xl:text-2xl"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Account Type
            </div>

            <div className="h-auto bg-stone-50 flex sm:flex-rowrounded-3xl mb-[24px] rounded-2xl outline-[1.31px] outline-offset-[-1.31px] outline-Colorstroke">
              <div
                onClick={() => setActive("tools")}
                className={`w-full sm:w-1/2  rounded-2xl flex justify-center items-center gap-2 cursor-pointer py-2 lg:py-4 text-[20px] ${
                  active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"
                }`}
              >
                <div
                  className={`${
                    active === "tools" ? "text-white" : "text-[#727272]"
                  }`}
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  Personal
                </div>
              </div>

              <div
                onClick={() => setActive("education")}
                className={`w-full sm:w-1/2 rounded-2xl flex justify-center items-center gap-2 cursor-pointer py-2 lg:py-4 text-[20px] ${
                  active === "education" ? "bg-[#E5223A]" : "bg-stone-50"
                }`}
              >
                <div
                  className={` ${
                    active === "education" ? "text-white" : "text-[#727272]"
                  }`}
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  Business
                </div>
              </div>
            </div>

            {active === "tools" ? (
              <>
                {/* Personal Account Form */}
                <div className="flex flex-col md:flex-row gap-[22px] mt-6">
                  <div className="w-full md:w-1/2">
                    <div className="text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                     style={{ fontFamily: "Jost, sans-serif" }}>
                      First Name
                    </div>
                    <div className="relative">
                      <div className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative">
                        <input
                          type="text"
                          name="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Enter First Name"
                          className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3 rounded-2xl"
                          style={{ fontFamily: "Jost, sans-serif" }}
                       />
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                     style={{ fontFamily: "Jost, sans-serif" }}>
                      Last Name
                    </div>
                    <div className="relative">
                    <div className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative">
                        <input
                          type="text"
                          name="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Enter Last Name"
                           className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3 rounded-2xl"
                           style={{ fontFamily: "Jost, sans-serif" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                 style={{ fontFamily: "Jost, sans-serif" }}>
                  Email Address
                </div>
                <div className="relative">
                <div className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                       className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3 rounded-2xl"
                       style={{ fontFamily: "Jost, sans-serif" }}
                    />
                  </div>
                </div>

                <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                 style={{ fontFamily: "Jost, sans-serif" }}>
                  Country
                </div>
                <div className="relative">
                  <div
                    onClick={() => selectRef.current?.focus()}
                    className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative"
                  >
                    <select
                      ref={selectRef}
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full  bg-transparent px-5 py-3 pr-14 rounded-2xl focus:outline-none appearance-none"
                      style={{ fontFamily: "Jost, sans-serif" }}
                  >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                    <Image
                      src="/downred-arrow.svg"
                      alt="Arrow"
                      width={18}
                      height={10}
                      className="h-[44px] xl:h-[52px] w-[40px] cursor-pointer absolute right-0 top-0 px-3 py-3 object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-[22px] w-full">
                  <div className="flex-1">
                    <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                     style={{ fontFamily: "Jost, sans-serif" }}>
                      Password
                    </div>
                    <div className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3 pr-14 rounded-2xl"
                     
                        style={{ fontFamily: "Jost, sans-serif" }}/>
                      <Image
                        src={
                          showPassword ? "/images/eyeClose.svg" : "/images/redEye.svg"
                        }
                        alt="Toggle visibility"
                        width={18}
                        height={10}
                        className="h-[44px] xl:h-[52px] w-[52px] cursor-pointer absolute right-0 top-0 px-4 xl:px-3.5 py-3 object-contain"
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                     style={{ fontFamily: "Jost, sans-serif" }}>
                      Confirm Password
                    </div>
                    <div className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative">
                      <input
                        type={showPasswordd ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                       className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3 pr-14 rounded-2xl"
                       style={{ fontFamily: "Jost, sans-serif" }}
                     />
                      <Image
                        src={
                          showPasswordd ? "/images/eyeClose.svg" : "/images/redEye.svg"
                        }
                        alt="Toggle visibility"
                        width={18}
                        height={10}
                       className="h-[44px] xl:h-[52px] w-[52px] cursor-pointer absolute right-0 top-0 px-4 xl:px-3.5 py-3 object-contain"
                        onClick={() => setShowPasswordd((prev) => !prev)}
                      />
                    </div>
                  </div>
                </div>

                <div className="my-[28px] flex flex-row gap-3 sm:gap-[15px] text-base font-normal items-start sm:items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    className="w-[27px] h-[27px] accent-[#E5223A] mt-1 rounded-lg border-[1.52px] border-Colorstroke focus:outline-none appearance-none"
                  />
                  <label
                    htmlFor="terms"
                    className="cursor-pointer leading-snug"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    <span className="text-gray-500">By using </span>
                    <span className="text-[#E5223A]">Offset7</span>
                    <span className="text-gray-500"> you agree to our </span>
                    <span className="text-slate-600 underline">
                      Terms & Conditions
                    </span>
                  </label>
                </div>

                <div className="relative w-full min-h-[60px]">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full rounded-xl absolute right-0 left-0 top-1/2 -translate-y-1/2 px-6 py-3 md:py-4 bg-[#E5223A] hover:bg-[#E5223A] text-white text-sm 2xl:text-xl xl:text-lg md:text-md font-semibold cursor-pointer"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Sign Up
                  </button>
                </div>

                <div className="flex justify-center text-[16px] 2xl:text-lg font-medium mt-[28px]">
                  <span className="text-[#1C1B35]"
                   style={{ fontFamily: "Jost, sans-serif" }}>
                    Already have an account?
                  </span>
                  <Link href="/">
                    <span className="text-[#E5223A] underline cursor-pointer ml-1"
                     style={{ fontFamily: "Jost, sans-serif" }}>
                      Sign in
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Business Account Form */}
                <div className="w-full ">
                  <div className="text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                   style={{ fontFamily: "Jost, sans-serif" }}>
                    {" "}
                    Name
                  </div>
                  <div className="relative">
                  <div className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter  Name"
                        className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3  rounded-2xl"
                        style={{ fontFamily: "Jost, sans-serif" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                 style={{ fontFamily: "Jost, sans-serif" }}>
                  Email Address
                </div>
                <div className="relative">
                   <div className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3  rounded-2xl"
                      style={{ fontFamily: "Jost, sans-serif" }}
                    />
                  </div>
                </div>

                <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
                 style={{ fontFamily: "Jost, sans-serif" }}>
                  Password
                </div>
                <div className="flex items-center border border-[#7C7C7C40] rounded-2xl  w-full mt-3  gap-3 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3 pr-14 rounded-2xl"
                style={{ fontFamily: "Jost, sans-serif" }}
                  />
                  <Image
                    src={showPassword ? "/images/eyeClose.svg" : "/images/redEye.svg"}
                    alt="Toggle visibility"
                    width={18}
                    height={10}
                    className="h-[44px] xl:h-[52px] w-[52px] cursor-pointer absolute right-0 top-0 px-4 xl:px-3.5 py-3 object-contain"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                </div>

                <div className="my-[28px] flex flex-row gap-3 sm:gap-[15px] text-base font-normal items-start sm:items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    className="w-[27px] h-[27px] accent-[#E5223A] mt-1 rounded-lg border-[1.52px] border-Colorstroke focus:outline-none appearance-none"
                    
                  />
                  <label
                    htmlFor="terms"
                    className="cursor-pointer leading-snug"
                  >
                    <span className="text-gray-500"
                     style={{ fontFamily: "Jost, sans-serif" }}>By using </span>
                    <span className="text-[#E5223A]"
                     style={{ fontFamily: "Jost, sans-serif" }}>Offset7</span>
                    <span className="text-gray-500"
                     style={{ fontFamily: "Jost, sans-serif" }}> you agree to our </span>
                    <span className="text-slate-600 underline"
                     style={{ fontFamily: "Jost, sans-serif" }}>
                      Terms & Conditions
                    </span>
                  </label>
                </div>

                <div className="relative w-full min-h-[60px]"> 
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full rounded-xl absolute right-0 left-0 top-1/2 -translate-y-1/2 px-6 py-3 md:py-4 bg-[#E5223A] hover:bg-[#E5223A] text-white text-sm 2xl:text-xl xl:text-lg md:text-md font-semibold cursor-pointer"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Sign Up
                  </button>
                </div>

                <div className="flex justify-center text-sm mt-[28px] text-[16px] 2xl:text-lg font-medium ">
                  <span className="text-[#1C1B35]"
                   style={{ fontFamily: "Jost, sans-serif" }}>
                    Already have an account? 
                  </span>
                  <Link href="/">
                    <span className="text-[#E5223A] underline cursor-pointer ml-1"
                     style={{ fontFamily: "Jost, sans-serif" }}>
                      Sign in
                    </span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
