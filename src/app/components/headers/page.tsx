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
    <div className="flex items-center gap-[12px]">
      {icon}
      <span>{label}</span>
    </div>
    <ChevronRight className="w-4 h-4 text-[#7E7F91]" />
  </DropdownMenuItem>
);

export default function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

  // Common Icons Component for reusability
  const Icons = () => (
    <div className="flex items-center gap-3">
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
          className="rounded-[30px] shadow-[0px_4px_30px_0px_rgba(136,136,136,0.20)] pt-[34px] pb-[25px] px-[18px] bg-white text-[#7E7F91] min-w-[200px] z-[100] mr-2 lg:mr-10"
          sideOffset={5}
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

          <DropdownItem icon={<LogOut />} label="Logout" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <>
      <header className="w-full">
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
                    <Icons />
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-label="Toggle Menu"
                    >
                      <Menu className="w-6 h-6" />
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
                  pathname === "/" ? "text-[#E5223A] font-semibold" : ""
                }
              >
                Home
              </Link>

              <Link
                href="/newss"
                className={
                  pathname === "/newss" ? "text-[#E5223A] font-semibold" : ""
                }
              >
                News
              </Link>

              <Link
                href="/darkweb"
                className={
                  pathname === "/darkweb" ? "text-[#E5223A] font-semibold" : ""
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
              <Icons />
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {menuOpen && (
            <div className="h-full fixed z-50 left-0 right-0 top-0 backdrop-blur-xs">
              <div className="sticky top-0 z-50 bg-white">
                {/* Top Row */}
                <div className="ml-4 py-[17px] flex justify-between">
                <div>
                  <Link href="/" aria-label="Offset7 Home">
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
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:hidden p-4 text-[#1C1B35] text-base bg-white rounded-b-[20px] overflow-y-auto max-h-[calc(100vh-80px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "text-[#E5223A] font-semibold" : ""
                    }
                  >
                    Home
                  </Link>
                  <Link
                    href="/newss"
                    className={
                      pathname === "/newss" ? "text-[#E5223A] font-semibold" : ""
                    }
                  >
                    News
                  </Link>
                  <Link href="/darkweb">Darkweb Incidents</Link>
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
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/images/country.png"
                      alt="Language Selection"
                      height={32}
                      width={32}
                      className="h-auto w-auto"
                    />
                    <span className="text-[#1C1B35]">EN</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}