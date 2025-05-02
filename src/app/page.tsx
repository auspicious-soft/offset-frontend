"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Jost } from "next/font/google";
import { useRouter } from "next/navigation";
import { loginService } from "@/services/user-service";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const suggestions = [
    "example@gmail.com",
    "user@domain.com",
    "admin@site.com",
  ];

  const handleSelect = (value : any) => {
    setEmail(value);
    setShowDropdown(false);
  };

  const handleSubmit = async () => {
    // Validation
    if (!email) {
      toast.error("Please enter email");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!password) {
      toast.error("Please enter password");
      return;
    }

    try {
      // Call loginService with email and password
      const response = await loginService({ email, password });
      const { token, refreshToken } = response.data;

      // Store tokens in localStorage
      if(response.status === 200) {
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);

      // Show success message and redirect
      toast.success("Login successful!");
      router.push("/homepage"); // Adjust the route as needed
      }
    } catch (error) {
      
      // Handle errors with specific message from API or fallback
      const errorMessage =
        (error as any)?.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className={`${jost.className} flex flex-col lg:flex-row min-h-screen`}>
        <div className="w-full lg:w-[45%] 2xl:w-[40%] h-auto lg:mn-h-full relative object-contain">
          <Image
            src="/images/loginBG.png"
            alt="Login Image"
            width={829}
            height={1217}
            className="w-full h-full object-cover object-top absolute top-[0px]"
          />
          <div className="relative z-10 md:h-full p-[30px] md:p-[45px] 2xl:p-[55px]">
            <div className="w-full mx-auto flex gap-20 flex-col md:h-full justify-between">
              <div className="max-w-[660px] w-full mx-auto">
                <Link href="/homepage" aria-label="Offset7 Home">
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
                  className="self-stretch justify-start text-white text-[16px] 2xl:text-lg font-normal"
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

        <div className="w-full lg:w-[55%] 2xl:w-[60%] bg-[url('/images/dotsBGImage.png')] bg-cover py-[30px] px-[20px] md:py-[35px] md:px-[80px] 2xl:px-[128px] flex justify-center items-center">
          <div className="bg-white rounded-[20px] md:rounded-[39px] outline-1 outline-offset-[-1px] outline-[#cdc8c8]/20 px-[20px] py-[30px] lg:py-[35px] 2xl:px-[45px]">
            <div
              className="text-[#1c1b35] text-[30px] md:text-[36px] 2xl:text-[41px] font-semibold capitalize mb-3.5"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Login
            </div>
            <div
              className="text-[#7E7F91] text-[16px] md:text-[18px] 2xl:text-[20px] font-normal capitalize leading-[1.6]"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Access your account to monitor threats, manage security insights,
              and stay protected.
            </div>

            <div
              className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Email Address
            </div>
            <div className="relative">
              <div className="flex items-center border border-[#7C7C7C40] rounded-xl w-full mt-3 gap-3 relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3 pr-14 rounded-xl"
                  style={{ fontFamily: "Jost, sans-serif" }}
                />
                <Image
                  src="/downred-arrow.svg"
                  alt="Arrow"
                  width={18}
                  height={10}
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="h-[44px] xl:h-[52px] w-[40px] cursor-pointer absolute right-0 top-0 px-3 py-3 object-contain"
                />
              </div>
              {showDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {suggestions.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect(item)}
                      className="px-5 py-3 text-sm text-[#1C1B35] hover:bg-gray-100 cursor-pointer"
                      style={{ fontFamily: "Jost, sans-serif" }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="mt-6 text-[#1C1B35] text-md 2xl:text-2xl xl:text-xl md:text-lg font-medium"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Password
            </div>
            <div className="flex items-center border border-[#7C7C7C40] rounded-xl w-full mt-3 gap-3 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-[#7E7F91] text-sm 2xl:text-xl xl:text-lg md:text-md font-normal w-full focus:outline-none bg-transparent px-5 py-3 pr-14 rounded-xl"
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

            <div
              className="mt-6 mb-6 text-right underline text-[#7E7F91] text-sm 2xl:text-lg xl:text-md md:text-sm font-normal cursor-pointer"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Forgot your password?
            </div>

            <div className="relative w-full min-h-[60px]">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full rounded-xl absolute right-0 left-0 top-1/2 -translate-y-1/2 px-6 py-3 md:py-4 bg-[#E5223A] hover:bg-[#E5223A] text-white text-sm 2xl:text-xl xl:text-lg md:text-md font-semibold cursor-pointer"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                Login
              </button>
            </div>

            <div className="flex items-center gap-4 my-[28px]">
              <div className="w-full h-px bg-[#615F7740]" />
              <div
                className="text-center text-[#7E7F91] text-sm 2xl:text-lg xl:text-md md:text-sm font-normal"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                Or
              </div>
              <div className="w-full h-px bg-[#615F7740]" />
            </div>

            <div
              className="mb-12 text-center text-[#7E7F91] text-sm 2xl:text-lg xl:text-md font-medium underline cursor-pointer"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              Continue as guest
            </div>

            <div className="flex justify-center text-sm 2xl:text-lg xl:text-md md:text-sm font-medium">
              <span
                className="text-[#1C1B35]"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                Don’t have an account?
              </span>
              <Link href="/signup">
                <span
                  className="text-[#E5223A] underline cursor-pointer ml-1"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;