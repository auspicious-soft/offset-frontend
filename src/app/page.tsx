// import { Metadata } from "next";
// import HomePage from "./components/HomePage";

// export const metadata: Metadata = {
//   title: "Offset7 - Cybersecurity Monitoring & Threat Intelligence",
//   description: "Stay ahead of cyber threats with Offset7. Get real-time monitoring, threat intelligence, and actionable insights to protect your organization from evolving digital risks.",
//   keywords: "cybersecurity, threat intelligence, cyber threats, data protection, ransomware, phishing, darkweb monitoring",
//   alternates: {
//     canonical: "/",
//   },
// };

// export default function Page() {
//   // return <HomePage />;
// }





"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const HomePage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // add this state


  const [showDropdown, setShowDropdown] = useState(false);

  // Sample dropdown items (you can replace these)
  const suggestions = ["example@gmail.com", "user@domain.com", "admin@site.com"];

  const handleSelect = (value: string) => {
    setEmail(value);
    setShowDropdown(false);
  };




  const handleSubmit = () => {
    if (!email) {
      toast.error('Please enter email');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    if (!password) {
      toast.error('Please enter password');
      return;
    }

      // ✅ Log to console
  console.log("Email:", email);
  console.log("Password:", password);

    // Proceed with form logic
    toast.success('Form submitted!');

      // ✅ Reset the input fields
  setEmail('');
  setPassword('');
  };


 return (
  <>
    <ToastContainer />

  <div className="flex flex-col lg:flex-row min-h-screen">
  {/* Left Image */}
  <div className="w-full lg:w-[40%] h-auto  lg:h-auto relative object-contain">
  {/* Background Image */}
  <Image
    src="/images/loginBG.png"
    alt="Login Image"
    width={829}
    height={1217}
    className="w-full h-full object-cover"
  />

  {/* Overlayed logo in top-left */}
  <div className="absolute top-[20px] left-[45px] md:top-[50px] md:left-[45px] ">
    <Link href="/dashboard" aria-label="Offset7 Home">
      <Image
        src="/images/offset.png"
        alt="Offset7 Logo"
        height={129}
        width={129}
        className="w-[80px] h-[80px] md:w-[129px] md:h-[129px]"
        priority
      />
    </Link>
  </div>

  {/* Full width welcome text */}
  <div className="absolute top-[100px] md:top-[200px] left-0 w-full px-4 md:px-6 max-w-[90%] mx-auto">
    <div className="text-white text-sm md:text-md xl:text-xl 2xl:text-2xl font-medium w-full">
      Welcome to Offset7 👋
    </div>
    <div className="py-[8px] md:py-[11px] text-white text-lg md:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight">
      Stay Secure with Real-Time Threat Intelligence.
    </div>
    <div className="text-white text-xs md:text-sm xl:text-md 2xl:text-lg font-normal leading-relaxed">
      Join Offset7 to monitor threats, safeguard your data, and take control of your cybersecurity.
    </div>
  </div>
</div>



  {/* Right Form Section */}
  <div className="w-full lg:w-[60%] bg-[url('/images/dotsBGImage.png')] bg-cover py-16 px-8 md:py-15 md:px-16 
  2xl:py-[189px] 2xl:px-[128px]">
    <div className="px-4 py-6 md:px-8 md:py-10 bg-white rounded-[39.18px]  outline-1 outline-offset-[-1px] outline-stone-300/20 ">
      <div className="text-[#1C1B35] text-xl 2xl:text-4xl xl:text-3xl md:text-2xl font-semibold">Login</div>

      <div className="mt-4 text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md  font-normal">
        Access your account to monitor threats, manage security insights, and stay protected.
      </div>

      {/* Email */}
    
        <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Email Address</div>
    
       <div className="relative">
      <div className="flex items-center border border-[#7C7C7C40] rounded-2xl w-full mt-3 px-5 py-3 gap-3">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent"
        />
        <Image
          src="/downredarrow.svg"
          alt="Arrow"
          width={18}
          height={10}
          onClick={() => setShowDropdown(prev => !prev)}
          className="h-[8px] w-[12px] md:h-[10px] md:w-[18px] cursor-pointer"
        />
      </div>

      {showDropdown && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="px-5 py-3 text-sm text-[#1C1B35] hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>

      {/* Password */}

    <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Password</div>

    <div className="flex items-center border border-[#7C7C7C40] rounded-2xl w-full mt-3 px-5 py-3 gap-3">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent"
  />
  <Image
    src={showPassword ? "/images/redEye.png" : "/images/redEye.png"} // change icon based on state
    alt="Toggle visibility"
    width={18}
    height={10}
    className="h-[8px] w-[12px] md:h-[10px] md:w-[18px] cursor-pointer"
    onClick={() => setShowPassword(prev => !prev)} // toggle on click
  />
</div>






      <div className="mt-6 mb-6 text-right underline text-[#7E7F91] text-sm 2xl:text-lg xl:text-md md:text-sm  font-normal   cursor-pointer">
        Forgot your password?
      </div>

      <div className="relative w-full min-h-[80px]">
        <button
         onClick={handleSubmit}
          type="submit"
          className="w-full rounded-xl absolute right-0 left-0 top-1/2 -translate-y-1/2 px-6 py-3 md:py-4 bg-[#E5223A] hover:bg-[#E5223A] text-white text-sm 2xl:text-xl xl:text-lg md:text-md  font-semibold cursor-pointer"
        >
          Login
        </button>
      </div>

      <div className="flex items-center gap-4 my-8">
        <div className="w-full h-px bg-[#615F7740]" />
        <div className="text-center text-[#7E7F91] text-sm 2xl:text-lg xl:text-md md:text-sm  font-normal ">Or</div>
        <div className="w-full h-px bg-[#615F7740]" />
      </div>

      <div className="mb-12 text-center text-[#7E7F91] text-sm 2xl:text-lg xl:text-md md:text-sm  font-medium  underline cursor-pointer">
        Continue as guest
      </div>

      <div className="flex justify-center text-sm 2xl:text-lg xl:text-md md:text-sm font-medium">
        <span className="text-[#1C1B35]">Don’t have an account?</span>
        <Link href="/signup">
        <span className="text-[#E5223A] underline cursor-pointer ml-1">Sign Up</span>
        </Link>
      </div>
    </div>
  </div>
</div>

  </>
 );
};

export default HomePage;
