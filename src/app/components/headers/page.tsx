"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Settings,
  CreditCard,
  LogOut,
  FileText,
  ChevronRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { logoutService } from "@/services/user-service";

// Define DropdownItem component using Radix's DropdownMenuItem
const DropdownItem = ({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}) => (
  <DropdownMenuItem
    className={`mt-[10px] mb-[10px] flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer focus:bg-gray-100 focus:outline-none ${
      className || ""
    }`}
  >
    <div className="flex items-center text-lg gap-[12px]">
      {icon}
      <span className="">{label}</span>
    </div>
    <ChevronRight className="w-4 h-4 text-[#7E7F91]" />
  </DropdownMenuItem>
);

export default function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<string>("en"); // Default to English

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      localStorage.setItem("language", "en"); // Default to English
    }
  }, []);

  // Manage body overflow when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  // Keep scrollbar visible but prevent scrolling when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  const handleLogout = async () => {
    try {
      const response = await logoutService("/auth/logout");

      if (response.status === 204) {
        console.log("Logout successful");
        toast.success("Logout successful");
        
        // Clear localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        
        // Clear cookies
        document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        console.error("Logout failed:", response.data);
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error((error as any).response?.data?.message);
    }
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.location.reload(); // Reload the page to recall APIs with the new language
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white">
        {!menuOpen && (
          <div className="bg-white">
            <div className="container">
              {/* Top Row */}
              <div className="py-[17px] flex justify-between">
                <div>
                  <Link href="/homepage" aria-label="Offset7 Home">
                    <Image
                      src="/logo.svg"
                      alt="Offset7 Logo"
                      height={72}
                      width={57}
                      priority
                      className="h-[50px] sm:h-[50px] lg:h-[72px] w-auto"
                    />
                  </Link>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Social icons (hidden on small & medium screens) */}
                  <div className="hidden lg:flex gap-2 sm:gap-3 justify-center items-center">
                    <div className="bg-[#CF201F] flex items-center justify-center rounded cursor-pointer">
                      <Image
                        src="/yt.svg"
                        alt="YouTube"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="bg-[#18B8EA] flex items-center justify-center rounded cursor-pointer">
                      <Image
                        src="/v.svg"
                        alt="Twitter/X Profile"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="bg-[#3E599C] flex items-center justify-center rounded cursor-pointer">
                      <Image
                        src="/fb.svg"
                        alt="Facebook Page"
                        width={36}
                        height={36}
                      />
                    </div>
                  </div>

                  {/* Icons and Hamburger (visible on small & medium screens) */}
                  <div className="flex items-center gap-2 lg:hidden">
                    <Image
                      src="/notification.svg"
                      alt="Notifications"
                      height={24}
                      width={24}
                      className="h-auto w-auto"
                    />
                    <DropdownMenu open={isMobileDropdownOpen} onOpenChange={setIsMobileDropdownOpen}>
                      <DropdownMenuTrigger asChild>
                        <button
                          className="flex items-center gap-2 cursor-pointer focus:outline-none"
                          aria-label="User menu"
                        >
                          <div className="h-8 w-8 bg-[#37474F] rounded-full flex items-center justify-center">
                            <Image
                              src="/images/G.png"
                              alt="User Profile"
                              height={20}
                              width={20}
                              className="h-auto w-auto"
                            />
                          </div>
                          <Image
                            src="/downredarrow.svg"
                            alt="Dropdown Arrow"
                            height={7}
                            width={14}
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="rounded-[30px] shadow-[0px_4px_30px_0px_rgba(136,136,136,0.20)] pt-[34px] pb-[25px] px-[18px] bg-white text-[#7E7F91] min-w-[200px] z-[100] lg:mr-10"
                        sideOffset={5}
                        avoidCollisions={true}
                        collisionPadding={10}
                      >
                        <Link href="/settings">
                          <DropdownItem
                            icon={<Settings />}
                            label="Account Settings"
                            className="border-b border-gray-200"
                          />
                        </Link>

                        <Link href="/subscription">
                          <DropdownItem
                            icon={<CreditCard />}
                            label="Payment Details"
                            className="border-b border-gray-200"
                          />
                        </Link>

                        <Link href="/subscription/payment-history">
                          <DropdownItem
                            icon={<FileText />}
                            label="Canceling Subscription"
                            className="border-b border-gray-200"
                          />
                        </Link>

                        <Button className="w-full h-10 px-1" variant={"ghost"} onClick={handleLogout}>
                          <DropdownItem icon={<LogOut />} label="Logout" className="w-full h-full" />
                        </Button>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-label="Toggle Menu"
                    >
                      <Menu className="w-6 h-6 cursor-pointer" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navbar Links - Show only on lg+ */}
        <div className="container">
          <div className="hidden px-5 sticky z-50 bg-white h-auto py-[22.5px] lg:flex justify-between rounded-[20px] shadow-[0px_4px_30px_0px_rgba(178,178,178,0.20)]">
            <nav className="hidden lg:flex items-center gap-6 text-[#1C1B35] text-md xl:text-lg 2xl:text-xl">
              <Link
                href="/homepage"
                className={
                  pathname === "/homepage" ? "text-[#E5223A] font-semibold" : ""
                }
              >
                Home
              </Link>

              <Link
                href="/newss"
                className={
                  pathname === "/newss" || pathname === "/newss/general-news"
                    ? "text-[#E5223A] font-semibold"
                    : ""
                }
              >
                News
              </Link>

              <Link
                href="/darkweb"
                className={
                  pathname === "/darkweb" || pathname === "/darkweb/detail"
                    ? "text-[#E5223A] font-semibold"
                    : ""
                }
              >
                Darkweb Incidents
              </Link>

              <Link href="#">Cve Engine</Link>
              <Link href="#">Risk Assets</Link>
              <Link href="#">My Library</Link>
              <Link
                href="/contact-us"
                className={
                  pathname === "/contact-us"
                    ? "text-[#E5223A] font-semibold"
                    : ""
                }
              >
                Contact Us
              </Link>
            </nav>

            {/* Socials & Icons (hidden on mobile) */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-3">
                <button onClick={handleLanguageToggle} className="flex items-center gap-1 cursor-pointer">
                  <Image
                    src={language === "en" ? "/images/country.png" : "/images/arabic.svg"}
                    alt="Language Selection"
                    height={40}
                    width={40}
                    className=""
                  />
                  <span className="text-[#1C1B35]">{language.toUpperCase()}</span>
                </button>

                <Image
                  src="/notification.svg"
                  alt="Notifications"
                  height={24}
                  width={24}
                  className="h-auto w-auto"
                />
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center gap-2 cursor-pointer focus:outline-none"
                      aria-label="User menu"
                    >
                      <div className="h-8 w-8 bg-[#37474F] rounded-full flex items-center justify-center">
                        <Image
                          src="/images/G.png"
                          alt="User Profile"
                          height={20}
                          width={20}
                          className="h-auto w-auto"
                        />
                      </div>
                      <Image
                        src="/downredarrow.svg"
                        alt="Dropdown Arrow"
                        height={7}
                        width={14}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="rounded-[30px] shadow-[0px_4px_30px_0px_rgba(136,136,136,0.20)] pt-[34px] pb-[25px] px-[18px] bg-white text-[#7E7F91] min-w-[200px] z-[100] lg:mr-10"
                    sideOffset={5}
                    avoidCollisions={true}
                    collisionPadding={10}
                  >
                    <Link href="/settings">
                      <DropdownItem
                        icon={<Settings />}
                        label="Account Settings"
                        className="border-b border-gray-200"
                      />
                    </Link>

                    <Link href="/subscription">
                      <DropdownItem
                        icon={<CreditCard />}
                        label="Payment Details"
                        className="border-b border-gray-200"
                      />
                    </Link>

                    <Link href="/subscription/payment-history">
                      <DropdownItem
                        icon={<FileText />}
                        label="Canceling Subscription"
                        className="border-b border-gray-200"
                      />
                    </Link>

                    <Button className="w-full h-10 px-1" variant={"ghost"} onClick={handleLogout}>
                      <DropdownItem icon={<LogOut />} label="Logout" className="w-full h-full" />
                    </Button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {menuOpen && (
            <div className="fixed inset-0 z-50 bg-white transform-gpu">
              <div className="h-screen overflow-y-auto">
                <div className="sticky top-0 z-50 bg-white">
                  {/* Top Row */}
                  <div className="ml-4 py-[17px] flex justify-between">
                    <div>
                      <Link href="/homepage" aria-label="Offset7 Home">
                        <Image
                          src="/logo.svg"
                          alt="Offset7 Logo"
                          height={72}
                          width={57}
                          priority
                          className="h-[50px] sm:h-[50px] lg:h-[72px] w-auto"
                        />
                      </Link>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Social icons (hidden on small & medium screens) */}
                      <div className="hidden lg:flex gap-2 sm:gap-3 justify-center items-center">
                        <div className="bg-[#CF201F] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
                          <Image
                            src="/images/youtube.png"
                            alt="YouTube Channel"
                            width={24}
                            height={24}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                          />
                        </div>
                        <div className="bg-[#18B8EA] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
                          <Image
                            src="/images/v.png"
                            alt="Twitter/X Profile"
                            width={12}
                            height={12}
                            className="h-auto w-auto"
                          />
                        </div>
                        <div className="bg-[#3E599C] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded cursor-pointer">
                          <Image
                            src="/images/facebook.png"
                            alt="Facebook Page"
                            width={36}
                            height={36}
                            className="h-auto w-auto"
                          />
                        </div>
                      </div>

                      {/* Hamburger */}
                      <button
                        className="flex lg:hidden mr-3"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                      >
                        <X className="w-6 h-6 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden p-4 text-[#1C1B35] text-base bg-white rounded-b-[20px] overflow-y-auto max-h-[calc(100vh-80px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/homepage"
                      className={
                        pathname === "/homepage"
                          ? "text-[#E5223A] font-semibold"
                          : ""
                      }
                    >
                      Home
                    </Link>
                    <Link
                      href="/newss"
                      className={
                        pathname === "/newss" ||
                        pathname === "/newss/general-news"
                          ? "text-[#E5223A] font-semibold"
                          : ""
                      }
                    >
                      News
                    </Link>
                    <Link
                      href="/darkweb"
                      className={
                        pathname === "/darkweb" ||
                        pathname === "/darkweb/detail"
                          ? "text-[#E5223A] font-semibold"
                          : ""
                      }
                    >
                      Darkweb Incidents
                    </Link>
                    <Link href="#">Cve Engine</Link>
                    <Link href="#">Risk Assets</Link>
                    <Link href="#">My Library</Link>
                    <Link
                      href="/contact-us"
                      className={
                        pathname === "/contact-us"
                          ? "text-[#E5223A] font-semibold"
                          : ""
                      }
                    >
                      Contact Us
                    </Link>
                    <button onClick={handleLanguageToggle} className="flex gap-2 items-center">
                      <Image
                        src={language === "en" ? "/images/country.png" : "/images/arabic.svg"}
                        alt="Language Selection"
                        height={40}
                        width={40}
                        className=""
                      />
                      <span className="text-[#1C1B35]">{language.toUpperCase()}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Add a spacer div after the header to prevent content jump */}
      <div className="h-[120px] md:h-[140px] lg:h-[160px]"></div>
    </>
  );
}
