"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import Link from "next/link";
import Script from "next/script";
import { useState, useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { getDarkWebNewsService } from "@/services/user-service";

const Page = () => {
  const [active, setActive] = useState("tools");
  interface NewsItem {
    id: string;
    title: string;
    image?: string;
    category?: { name: string };
    sector?: { name: string };
    threat_actor?: { name: string };
    updatedAt?: string;
    createdAt?: string;
    views?: number;
  }
  
  const [darkNews, setDarkNews] = useState<NewsItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Keep a reference to all items we've fetched so far, across pages
  const [allFetchedNews, setAllFetchedNews] = useState<NewsItem[]>([]);
  const [recentAndPopularNews, setRecentAndPopularNews] = useState<NewsItem[]>([]);
  
  // Fetch additional data for recent and popular items only once at start
  useEffect(() => {
    const fetchInitialSidebarData = async () => {
      try {
        // Only fetch recent/popular data once on component mount
        const response = await getDarkWebNewsService(`/darkweb_news?page=1&limit=10`);
        
        if (response && response.data && response.data.items) {
          setRecentAndPopularNews(response.data.items || []);
          
          // Set total count from the API's total
          if (response.data.pages && response.data.pages.total_count !== undefined) {
            setTotalItems(response.data.pages.total_count);
            // Calculate total pages based on the actual total count and items per page
            setTotalPages(Math.ceil(response.data.pages.total_count / itemsPerPage));
          } else if (response.data.pages?.total) {
            setTotalItems(response.data.pages.total * response.data.items.length);
            setTotalPages(response.data.pages.total);
          } else {
            // Fallback
            setTotalItems(response.data.items.length);
            setTotalPages(1);
          }
        }
      } catch (error) {
        console.error("Error fetching initial sidebar data:", error);
      }
    };
    
    fetchInitialSidebarData();
  }, []);
  
  // Fetch news with server-side pagination for the main content
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        // Make API call with the current page and items per page
        const response = await getDarkWebNewsService(`/darkweb_news?page=${currentPage}&limit=${itemsPerPage}`);
        console.log('response:', response);
        
        if (response && response.data) {
          // Update current page data
          setDarkNews(response.data.items || []);
          
          // Update total count if needed
          if (response.data.pages && response.data.pages.total_count !== undefined) {
            setTotalItems(response.data.pages.total_count);
            setTotalPages(Math.ceil(response.data.pages.total_count / itemsPerPage));
          } else if (response.data.pages?.total) {
            // If total_count isn't available but total pages is
            if (totalItems === 0) { // Only update if we don't have a value yet
              setTotalItems(response.data.pages.total * response.data.items.length);
            }
            setTotalPages(response.data.pages.total);
          }
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPageData();
  }, [currentPage, itemsPerPage]);

  // We're no longer paginating client-side; the API gives us pre-paginated data
  // Just use the darkNews array directly for the main news listing
  const paginatedNewsItems = darkNews;

  // Filter recent and popular posts from our separate dataset for the sidebar
  const recentPosts = useMemo(() => {
    // Get most recent news items based on updatedAt/createdAt
    return [...recentAndPopularNews]
      .sort((a, b) => new Date(b.updatedAt || b.createdAt || "").getTime() - new Date(a.updatedAt || a.createdAt || "").getTime())
      .slice(0, 4);
  }, [recentAndPopularNews]);

  const popularPosts = useMemo(() => {
    // Get most viewed/popular news items
    return [...recentAndPopularNews]
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 4);
  }, [recentAndPopularNews]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleItemsPerPageChange = (e : any) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to page 1 on per-page change
    
    // Recalculate total pages when items per page changes
    if (totalItems > 0) {
      setTotalPages(Math.ceil(totalItems / value));
    }
  };

  // Function to get color based on category name
  const getCategoryColor = (categoryName: string) => {
    const colorMap = {
      "Ransomware": { bg: "#FFDCE0", text: "#E5223A" },
      "Data Breach": { bg: "#E3F5FF", text: "#0078D7" },
      "Malware": { bg: "#FFF4CC", text: "#FF9500" },
      // Add more categories as needed
    } as const;

    return colorMap[categoryName as keyof typeof colorMap] || { bg: "#FFDCE0", text: "#E5223A" }; // Default color
  };

  // Format date for display
  const formatDate = (dateString : any) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      if (diffHours === 0) {
        const diffMins = Math.floor(diffMs / (1000 * 60));
        return `${diffMins} mins ago`;
      }
      return `${diffHours} hours ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  // Calculate pagination display values
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <>
      <div className="bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
        <Headers />

        <div className="container">
          {/* breadcrumbs  */}
          <div className=" mt-[10px] sm:mt-[30px] md:mt-[20px] lg:mt-[50px] text-xl font-medium">
            <Breadcrumb>
              <div>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#727272]">Home</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="w-px h-[11px] bg-[#E5223A]" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#727272]">Recent posts</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="bg-[#E5223A] w-px h-[11px]" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#E5223A]">Search Results</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </div>
            </Breadcrumb>
          </div>

          <div className="flex gap-6 flex-col lg:flex-row mt-[33px]">
            {/* Left Section */}
            <div className="md:mb-[102px] mb-[20px] w-full lg:w-[65%] flex flex-col gap-y-[22px]">
              {loading ? (
                <div className="flex justify-center items-center h-48">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E5223A]"></div>
                </div>
              ) : paginatedNewsItems.length > 0 ? (
                paginatedNewsItems.map((item, index) => {
                  const categoryColor = getCategoryColor(item.category?.name || "Unknown");
                  const timeAgo = formatDate(item.updatedAt || item.createdAt);
                  
                  return (
                    <Link
                      href={`/darkweb/detail/${item.id}`}
                      key={index}
                      className="gap-4 flex flex-col md:flex-row w-full h-auto bg-stone-50 rounded-3xl p-2 sm:p-3 md:p-4"
                    >
                      <div className="md:w-[50%]">
                        <Image
                          src={item.image || "/images/hospital.png"}
                          alt="news image"
                          height={225}
                          width={332}
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      </div>

                      <div className="w-full flex flex-col pr-2">
                        <div className="flex flex-wrap justify-between gap-2 sm:gap-3 mb-3">
                          <div className="flex items-center">
                            <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                              <Image
                                src="/sarah.svg"
                                alt="Author"
                                height={34}
                                width={34}
                                className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                              />

                              <div className="flex justify-center items-center 2xl:text-lg lg:text-md text-sm">
                                <div className="text-[#1C1B35]">
                                  By {item.threat_actor?.name || "Unknown"}
                                  <span className="ml-[4px] text-[#959595]">| {timeAgo}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="px-[13px] py-[3px] rounded-3xl flex items-center justify-center"
                            style={{ backgroundColor: categoryColor.bg }}
                          >
                            <div className="text-base sm:text-base md:text-base px-[14px]" style={{ color: categoryColor.text }}>
                              {item.category?.name}
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-xl font-medium md:text-2xl 2xl:text-3xl text-[#1C1B35]">{item.title}</div>

                          <div className="mt-3 flex justify-between items-center">
                            <div className="text-sm text-[#FF475E] font-bold">{item.sector?.name || "GENERAL WEB"}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="text-center p-8">No news items found.</div>
              )}

              {/* Pagination Controls */}
              {darkNews.length > 0 && (
                <div className="flex flex-col lg:flex-row justify-between lg:justify-center items-center gap-6 lg:gap-[80px] mt-4 px-4">
                  {/* Left side */}
                  <div className="2xl:text-xl sm:text-md text-sm flex sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                    <div className="flex items-center gap-2 relative">
                      <label className="text-neutral-600">News per page:</label>
                      <div className="relative ml-[8px] sm:ml-[16px] mr-[16px] sm:mr-[32px]">
                        <select
                          className="cursor-pointer rounded-md appearance-none 2xl:py-[18px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-10"
                          value={itemsPerPage}
                          onChange={handleItemsPerPageChange}
                        >
                          <option value={4}>4</option>
                          <option value={10}>10</option>
                          <option value={12}>12</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={18} />
                      </div>
                    </div>

                    <div className="flex items-center justify-center h-full min-h-[40px] gap-2">
                      <span className="text-neutral-600">
                        {totalItems > 0 
                          ? `${startItem} - ${endItem} of ${totalItems} News`
                          : "0 News found"}
                      </span>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="2xl:text-xl sm:text-md text-sm flex sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                    <div className="flex items-center gap-3 sm:gap-[25px] relative">
                      <div className="relative">
                        <select
                          className="cursor-pointer rounded-md appearance-none border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 pr-8 2xl:py-[18px] py-[12px] px-[14px]"
                          value={currentPage}
                          onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                        >
                          {Array.from({ length: totalPages }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={16} />
                      </div>
                      <label className="text-neutral-600">of {totalPages} pages</label>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-[17px]">
                      <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="cursor-pointer rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50"
                      >
                        <ChevronLeft className="text-neutral-600" size={18} />
                      </button>

                      <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="cursor-pointer rounded-md 2xl:py-[18px] 2xl:px-[16px] py-[12px] px-[14px] border-[1.39px] border-zinc-200 shadow-[0px_1.3948px_4.1844px_0px_rgba(60,64,67,0.16)] bg-stone-50 disabled:opacity-50"
                      >
                        <ChevronRight className="text-neutral-600" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section */}
            <div className="mb-[25px] w-full lg:w-[35%]">
              <div className="h-auto sm:h-14 bg-stone-50 px-[14px] py-[10px] sm:py-[5px] flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl mb-[19px]">
                <div
                  onClick={() => setActive("tools")}
                  className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
                    active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"
                  }`}
                >
                  <div className={`text-l font-medium ${active === "tools" ? "text-white" : "text-[#727272]"}`}>Recent Posts</div>
                </div>

                <div
                  onClick={() => setActive("education")}
                  className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
                    active === "education" ? "bg-[#E5223A]" : "bg-stone-50"
                  }`}
                >
                  <div className={`text-l font-medium ${active === "education" ? "text-white" : "text-[#727272]"}`}>Popular Posts</div>
                </div>
              </div>

              {/* Recent Posts */}
{active === "tools" && (
  <div className="mt-[30px] md:mt-0 space-y-5">
    {loading ? (
      <div className="text-center p-8">Loading recent posts...</div>
    ) : recentPosts.length > 0 ? (
      recentPosts.map((post, index) => {
        const timeAgo = formatDate(post.updatedAt || post.createdAt);

        return (
          <Link
            href={`/darkweb/detail/${post.id}`}
            key={index}
            className="py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]"
          >
            <div className="2xl:h-[140px] 2xl:min-h-[140px] 2xl:w-[134px] 2xl:min-w-[134px]">
              <Image
                src={post.image || "/images/one.png"}
                alt="news thumbnail"
                height={140}
                width={134}
                unoptimized
                className="w-full h-[140px] md:h-auto sm:w-[134px] rounded-xl object-cover"
              />
            </div>

            <div className="w-full pr-0">
              <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                <Image
                  src="/sarah.svg"
                  alt="Author"
                  height={34}
                  width={34}
                  className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                />
                <div className="flex justify-center items-center 2xl:text-lg lg:text-md text-sm">
                  <div className="text-[#1C1B35]">
                    By {post.threat_actor?.name || "Unknown"}
                    <span className="ml-[4px] text-[#959595]">| {timeAgo}</span>
                  </div>
                </div>
              </div>

              <div className="text-[#1C1B35] text-m sm:text-m md:text-m lg:text-lg">{post.title}</div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-[#FF475E] font-bold">{post.sector?.name || "GENERAL WEB"}</div>
                <Image
                  src="/Arrow.svg"
                  alt="Red Arrow"
                  height={29}
                  width={29}
                  className="xl:w-[29px] xl:h-[29px] w-5 h-5 sm:w-5 sm:h-5 bg-[#E5223A] rounded-full"
                />
              </div>
            </div>
          </Link>
        );
      })
    ) : (
      <div className="text-center p-8">No recent posts found.</div>
    )}
  </div>
)}

{/* Popular Posts */}
{active === "education" && (
  <div className="space-y-5">
    {loading ? (
      <div className="text-center p-8">Loading popular posts...</div>
    ) : popularPosts.length > 0 ? (
      popularPosts.map((post, index) => {
        const timeAgo = formatDate(post.updatedAt || post.createdAt);

        return (
          <Link
            href={`/darkweb/detail/${post.id}`}
            key={index}
            className="py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]"
          >
            <div className="2xl:h-[140px] 2xl:min-h-[140px] 2xl:w-[134px] 2xl:min-w-[134px]">
              <Image
                src={post.image || "/images/one.png"}
                alt="news thumbnail"
                height={140}
                width={134}
                className="w-full h-[140px] md:h-auto sm:w-[134px] rounded-xl object-cover"
              />
            </div>

            <div className="w-full pr-0">
              <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                <Image
                  src="/sarah.svg"
                  alt="Author"
                  height={34}
                  width={34}
                  className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                />
                <div className="flex justify-center items-center 2xl:text-lg lg:text-md text-sm">
                  <div className="text-[#1C1B35]">
                    By {post.threat_actor?.name || "Unknown"}
                    <span className="ml-[4px] text-[#959595]">| {timeAgo}</span>
                  </div>
                </div>
              </div>

              <div className="text-[#1C1B35] text-m sm:text-m md:text-m lg:text-lg">{post.title}</div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-[#FF475E] font-bold">{post.sector?.name || "GENERAL WEB"}</div>
                <Image
                  src="/Arrow.svg"
                  alt="Red Arrow"
                  height={29}
                  width={29}
                  className="xl:w-[29px] xl:h-[29px] w-5 h-5 sm:w-5 sm:h-5 bg-[#E5223A] rounded-full"
                />
              </div>
            </div>
          </Link>
        );
      })
    ) : (
      <div className="text-center p-8">No popular posts found.</div>
    )}
  </div>
)}
            </div>
          </div>
        </div>

        <Footers />
      </div>

      <Script
        id="news-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Cybersecurity News & Updates | Offset7",
            description:
              "Stay informed with the latest cybersecurity news, threat intelligence, data breaches, and security innovations from around the world.",
            url: "https://offset7.com/newss",
            isPartOf: {
              "@type": "WebSite",
              name: "Offset7",
              url: "https://offset7.com",
            },
            about: {
              "@type": "Thing",
              name: "Cybersecurity",
            },
          }),
        }}
      />
    </>
  );
};

export default Page;