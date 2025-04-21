"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

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

   <div className="flex flex-col lg:flex-row min-h-screen">
    {/* Left Image */}
    <div className="w-full lg:w-[40%] h-auto lg:h-auto relative object-contain">
     <Image src="/images/loginBG.png" alt="Login Image" width={829} height={1217} className="w-full max-h-[1000px] h-full object-cover" />

     <div className="absolute top-[20px] left-[45px] md:top-[50px] md:left-[45px]">
      <Link href="/homepage" aria-label="Offset7 Home">
       <Image src="/images/offset.png" alt="Offset7 Logo" height={129} width={129} className="w-[80px] h-[80px] md:w-[129px] md:h-[129px]" priority />
      </Link>
     </div>

     <div className="absolute top-[100px] md:top-[200px] left-0 w-full px-4 md:px-6 max-w-[90%] mx-auto font-['Jost'] ">
      <div className="text-white text-sm md:text-md xl:text-xl 2xl:text-2xl font-medium w-full">Welcome to Offset7 👋</div>
      <div className="py-[8px] md:py-[11px] text-white text-lg md:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight">Stay Secure with Real-Time Threat Intelligence.</div>
      <div className="text-white text-xs md:text-sm xl:text-md 2xl:text-lg font-normal leading-relaxed">Join Offset7 to monitor threats, safeguard your data, and take control of your cybersecurity.</div>
     </div>
    </div>

    {/* Right Form Section */}
    <div className="w-full lg:w-[60%] bg-[url('/images/dotsBGImage.png')] bg-cover py-16 px-8 md:py-15 md:px-16 2xl:py-[189px] 2xl:px-[128px] font-['Jost']">
     <div className="px-4 py-6 md:px-8 md:py-10 bg-white rounded-[39.18px] outline-1 outline-offset-[-1px] outline-stone-300/20">
      <div className="text-[#1C1B35] text-xl 2xl:text-4xl xl:text-3xl md:text-2xl font-semibold">Sign Up</div>

      <div className="mt-4 text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal">Create your Offset7 account to access real-time threat intelligence, secure your data, and stay ahead of cyber threats.</div>

      <div className="mt-[30px] mb-[15px] text-[#1C1B35] text-md 2xl:text-2xl">Account Type</div>

      <div className="h-auto sm:h-14 bg-stone-50 px-[14px] py-[10px] sm:py-[5px] flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl mb-[19px]">
       <div onClick={() => setActive("tools")} className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"}`}>
        <div className={`text-l font-medium ${active === "tools" ? "text-white" : "text-[#727272]"}`}>Personal</div>
       </div>

       <div onClick={() => setActive("education")} className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${active === "education" ? "bg-[#E5223A]" : "bg-stone-50"}`}>
        <div className={`text-l font-medium ${active === "education" ? "text-white" : "text-[#727272]"}`}>Business</div>
       </div>
      </div>

      {active === "tools" ? (
       <>
        {/* Personal Account Form */}
        <div className="flex flex-col md:flex-row gap-[22px] mt-6">
         <div className="w-full md:w-1/2">
          <div className="text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">First Name</div>
          <div className="relative">
           <div className="flex items-center border border-[#7C7C7C40] rounded-2xl w-full mt-3 px-5 py-3 gap-3">
            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent" />
           </div>
          </div>
         </div>

         <div className="w-full md:w-1/2">
          <div className="text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Last Name</div>
          <div className="relative">
           <div className="flex items-center border border-[#7C7C7C40] rounded-2xl w-full mt-3 px-5 py-3 gap-3">
            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent" />
           </div>
          </div>
         </div>
        </div>

        <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Email Address</div>
        <div className="relative">
         <div className="flex items-center border border-[#7C7C7C40] rounded-2xl w-full mt-3 px-5 py-3 gap-3">
          <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent" />
         </div>
        </div>

        <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Country</div>
        <div className="relative">
         <div onClick={() => selectRef.current?.focus()} className="cursor-pointer border flex items-center border-[#7C7C7C40] rounded-2xl w-full mt-3 px-5 py-3 gap-3">
          <select ref={selectRef} name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="text-[#7E7F91] bg-transparent text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none appearance-none cursor-pointer">
           <option value="" disabled>
            Select Country
           </option>
           <option value="India">India</option>
           <option value="United States">United States</option>
           <option value="Canada">Canada</option>
           <option value="United Kingdom">United Kingdom</option>
           <option value="Australia">Australia</option>
          </select>
          <Image src="/downredarrow.svg" alt="Dropdown Arrow" width={18} height={10} className="h-[8px] w-[12px] md:h-[10px] md:w-[18px]" />
         </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[22px] w-full">
         <div className="flex-1">
          <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Password</div>
          <div className="mt-[15px] flex items-center border border-[#7C7C7C40] rounded-2xl px-5 py-3 gap-3 w-full">
           <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent" />
           <Image src={showPassword ? "/eyeClose.svg" : "/images/redEye.png"} alt="Toggle visibility" width={18} height={10} className="h-[8px] w-[12px] md:h-[10px] md:w-[18px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)} />
          </div>
         </div>

         <div className="flex-1">
          <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Confirm Password</div>
          <div className="mt-[15px] flex items-center border border-[#7C7C7C40] rounded-2xl px-5 py-3 gap-3 w-full">
           <input
            type={showPasswordd ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent"
           />
           <Image src={showPasswordd ? "/eyeClose.svg" : "/images/redEye.png"} alt="Toggle visibility" width={18} height={10} className="h-[8px] w-[12px] md:h-[10px] md:w-[18px] cursor-pointer" onClick={() => setShowPasswordd((prev) => !prev)} />
          </div>
         </div>
        </div>

        <div className="my-[28px] flex flex-row gap-3 sm:gap-[15px] text-base font-normal items-start sm:items-center">
         <input type="checkbox" id="terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="w-[27px] h-[27px] accent-[#E5223A] mt-1 rounded-lg border-[1.52px] border-Colorstroke" />
         <label htmlFor="terms" className="cursor-pointer leading-snug">
          <span className="text-gray-500">By using </span>
          <span className="text-[#E5223A]">Offset7</span>
          <span className="text-gray-500"> you agree to our </span>
          <span className="text-slate-600 underline">Terms & Conditions</span>
         </label>
        </div>

        <div className="relative w-full min-h-[80px]">
         <button onClick={handleSubmit} type="submit" className="w-full rounded-xl absolute right-0 left-0 top-1/2 -translate-y-1/2 px-6 py-3 md:py-4 bg-[#E5223A] hover:bg-[#E5223A] text-white text-sm 2xl:text-xl xl:text-lg md:text-md font-semibold cursor-pointer">
          Sign Up
         </button>
        </div>

        <div className="flex justify-center text-sm 2xl:text-lg xl:text-md md:text-sm font-medium">
         <span className="text-[#1C1B35]">Already have an account?</span>
         <Link href="/">
          <span className="text-[#E5223A] underline cursor-pointer ml-1">Sign in</span>
         </Link>
        </div>
       </>
      ) : (
       <>

        {/* Business Account Form */}
        <div className="w-full ">
         <div className="text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"> Name</div>
         <div className="relative">
          <div className="flex items-center border border-[#7C7C7C40] rounded-2xl w-full mt-3 px-5 py-3 gap-3">
           <input type="text" name="firstName" placeholder="Enter  Name" className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent" />
          </div>
         </div>
        </div>

        <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Email Address</div>
        <div className="relative">
         <div className="flex items-center border border-[#7C7C7C40] rounded-2xl w-full mt-3 px-5 py-3 gap-3">
          <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent" />
         </div>
        </div>

        <div className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium">Password</div>
        <div className="mt-[15px] flex items-center border border-[#7C7C7C40] rounded-2xl px-5 py-3 gap-3 w-full">
         <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent" />
         <Image src={showPassword ? "/eyeClose.svg" : "/images/redEye.png"} alt="Toggle visibility" width={18} height={10} className="h-[8px] w-[12px] md:h-[10px] md:w-[18px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)} />
        </div>

        <div className="my-[28px] flex flex-row gap-3 sm:gap-[15px] text-base font-normal items-start sm:items-center">

         <input type="checkbox" id="terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="w-[27px] h-[27px] accent-[#E5223A] mt-1 rounded-lg border-[1.52px] border-Colorstroke" />
         <label htmlFor="terms" className="cursor-pointer leading-snug">
          <span className="text-gray-500">By using </span>
          <span className="text-[#E5223A]">Offset7</span>
          <span className="text-gray-500"> you agree to our </span>
          <span className="text-slate-600 underline">Terms & Conditions</span>
         </label>
        </div>

        <div className="relative w-full min-h-[80px]">
         <button onClick={handleSubmit} type="submit" className="w-full rounded-xl absolute right-0 left-0 top-1/2 -translate-y-1/2 px-6 py-3 md:py-4 bg-[#E5223A] hover:bg-[#E5223A] text-white text-sm 2xl:text-xl xl:text-lg md:text-md font-semibold cursor-pointer">
          Sign Up
         </button>
        </div>

        <div className="flex justify-center text-sm mt-[28px] 2xl:text-lg xl:text-md md:text-sm font-medium">
         <span className="text-[#1C1B35]">Already have an account?</span>
         <Link href="/">
          <span className="text-[#E5223A] underline cursor-pointer ml-1">Sign in</span>
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
