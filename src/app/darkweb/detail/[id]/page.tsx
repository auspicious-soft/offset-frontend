"use client";
import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getDarkWebNewsService } from "@/services/user-service";
import { toast } from "react-toastify";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [active, setActive] = useState("tools");

  interface DarkNews {
    sector?: { name: string };
    category?: { name: string };
    image?: string;
    title: string;
    description: string;
    threat_actor?: { name: string; description?: string; website?: string };
    createdAt: string;
    views: number;
    country?: string;
    source?: string;
  }

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

  const [darkNews, setDarkNews] = useState<DarkNews | null>(null);
  const [recentAndPopularNews, setRecentAndPopularNews] = useState<NewsItem[]>([]);
  const [articleLoading, setArticleLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  const [articleError, setArticleError] = useState<string | null>(null);
  const [postsError, setPostsError] = useState<string | null>(null);

  // Format date function
  const formatDate = (dateString?: string): string => {
    if (!dateString) return "Unknown Date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const fetchArticle = async () => {
    if (!id) return;
    try {
      setArticleLoading(true);
      setArticleError(null);
      const response = await getDarkWebNewsService(`/darkweb_news/${id}`);
      setDarkNews(response.data || null);
    } catch (error: any) {
      console.error("Error fetching article:", error);
      setArticleError("Failed to load article. Please try again.");
      toast.error("Failed to load article: " + (error.message || "Unknown error"));
    } finally {
      setArticleLoading(false);
    }
  };

  const fetchRelatedPosts = async () => {
    try {
      setPostsLoading(true);
      setPostsError(null);
      const response = await getDarkWebNewsService(`/darkweb_news?page=1&limit=10`);
      setRecentAndPopularNews(response.data?.items || []);
    } catch (error: any) {
      console.error("Error fetching related posts:", error);
      setPostsError("Failed to load related posts. Please try again.");
      toast.error("Failed to load related posts: " + (error.message || "Unknown error"));
    } finally {
      setPostsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
    fetchRelatedPosts();
  }, [id]);

  const recentPosts = useMemo(() => {
    return [...recentAndPopularNews]
      .sort((a, b) => new Date(b.updatedAt || b.createdAt || "").getTime() - new Date(a.updatedAt || a.createdAt || "").getTime())
      .slice(0, 4);
  }, [recentAndPopularNews]);

  const popularPosts = useMemo(() => {
    return [...recentAndPopularNews]
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 4);
  }, [recentAndPopularNews]);

  const handleRetryArticle = () => {
    fetchArticle();
  };

  const handleRetryPosts = () => {
    fetchRelatedPosts();
  };

  return (
    <>
      <div className="bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
        <Headers />
        <div className="container">
          {/* Breadcrumbs */}
          {articleLoading && !articleError ? (
            <div className="flex items-center justify-center mt-[50px] min-h-[100px]">
              <div className="text-2xl">Loading article...</div>
            </div>
          ) : articleError ? (
            <div className="flex flex-col items-center justify-center mt-[50px] min-h-[100px] text-center">
              <div className="text-xl text-red-500">{articleError}</div>
              <button
                onClick={handleRetryArticle}
                className="mt-4 px-4 py-2 bg-[#E5223A] text-white rounded-lg hover:bg-red-600"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="mt-[10px] sm:mt-[30px] md:mt-[20px] lg:mt-[50px] text-xl font-medium">
              <Breadcrumb>
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
                    <BreadcrumbPage className="text-[#E5223A]">
                      {darkNews?.category?.name || "News Details"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          )}

          <div className="flex gap-6 flex-col lg:flex-row mt-[33px]">
            {/* Left Section */}
            <div className="w-full lg:w-[65%] max-w-[955px] mx-auto">
              {articleLoading && !articleError ? (
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="text-2xl">Loading article content...</div>
                </div>
              ) : articleError ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="text-xl text-red-500">{articleError}</div>
                  <button
                    onClick={handleRetryArticle}
                    className="mt-4 px-4 py-2 bg-[#E5223A] text-white rounded-lg hover:bg-red-600"
                  >
                    Retry
                  </button>
                </div>
              ) : !darkNews ? (
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="text-xl text-red-500">Article not found</div>
                </div>
              ) : (
                <>
                  <Image
                    src={darkNews.image || "/images/hands.png"}
                    alt={darkNews.title || "news image"}
                    width={955}
                    height={425}
                    className="w-full object-cover rounded-xl md:rounded-[30px]"
                    priority
                  />

                  {/* Content */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mt-5 md:mt-14">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap lg:flex-nowrap">
                      <Image
                        src="/sarah.svg"
                        alt="Author"
                        height={34}
                        width={34}
                        className="w-8 h-8 sm:w-5 sm:h-5 md:w-7 md:h-7"
                      />
                      <div className="text-[#1C1B35] text-sm md:text-base 2xl:text-xl">
                        By {darkNews.threat_actor?.name || "Unknown Author"}
                        <span className="ml-1 text-[#959595]">
                          | {formatDate(darkNews.createdAt)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm md:text-base 2xl:text-xl">
                      <span className="text-[#959595]">Threat Name:</span>
                      <div className="text-[#FF475E] font-bold">
                        {darkNews.threat_actor?.name || "Unknown Threat"}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[20px]">
                    <div className="justify-start text-[#1C1B35] text-2xl md:text-2xl lg:text-4xl 2xl:text-5xl font-medium">
                      {darkNews.title}
                    </div>
                    <Image
                      src="/dots.svg"
                      alt="read more"
                      height={80}
                      width={80}
                      className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px]"
                    />
                  </div>

                  <div className="text-[#1C1B35] text-md sm:text-lg md:text-xl 2xl:text-2xl font-normal mt-[20px] md:mt-[46px]">
                    {darkNews.description || "No description available."}
                  </div>

                  <div className="text-[#1C1B35] text-md sm:text-lg md:text-xl 2xl:text-2xl font-normal mt-[20px] md:mt-[46px]">
                    {darkNews.threat_actor?.description || "No additional information is available about this threat actor."}
                  </div>

                  <div className="text-[#1C1B35] text-md sm:text-lg md:text-xl 2xl:text-2xl font-normal mt-[20px] md:mt-[46px]">
                    This attack was reported on {formatDate(darkNews.createdAt)} and has accumulated {darkNews.views || 0} views since then.
                  </div>

                  <div className="mt-[46px]">
                    <Image
                      src="/images/greenBlack.png"
                      alt="laptop"
                      width={955}
                      height={425}
                      className="w-full object-cover rounded-xl md:rounded-[30px]"
                      priority
                    />
                  </div>

                  <div className="mt-[46px] justify-start text-[#1C1B35] text-2xl md:text-4xl font-medium">
                    {darkNews.threat_actor?.name || "Unknown"} Threat Details
                  </div>

                  <div className="text-[#1C1B35] text-md sm:text-lg md:text-xl text-left 2xl:text-2xl font-normal mt-[20px] md:mt-[46px]">
                    The threat actor in this incident is associated with {darkNews.country || "an unknown location"} and operates a website at{" "}
                    <span className="break-all">
                      {darkNews.threat_actor?.website || "an undisclosed location"}
                    </span>. This incident represents a significant security concern for organizations in the {darkNews.sector?.name || "affected"} sector.
                  </div>

                  <div className="mt-[46px] flex flex-wrap items-center justify-center md:justify-start md:items-start text-center gap-x-2 gap-y-2 text-md sm:text-lg md:text-xl 2xl:text-2xl font-medium">
                    <span className="text-[#727272]">GENERAL NEWS SOURCE:</span>
                    <Link href={darkNews.source || "#"} className="text-[#1C1B35] text-left underline break-all cursor-pointer">
                      {darkNews.source || "https://www.example.com"}
                    </Link>
                    <Image
                      src="/redLink.svg"
                      alt="External Link"
                      height={17}
                      width={18}
                      className="ml-[20px] cursor-pointer self-center"
                    />
                  </div>

                  <div className="mt-5 mb-5 lg:mb-[106px] flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center md:items-start justify-center md:justify-start gap-5 text-center text-md sm:text-lg md:text-xl 2xl:text-2xl font-medium">
                    <span className="text-[#727272] self-center md:self-start">SECTOR:</span>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <button
                        type="submit"
                        className="flex items-center justify-center bg-[#E5223A1C] hover:bg-[#E5223A1C] text-[#E5223A] text-sm sm:text-sm md:text-lg 2xl:text-2xl cursor-pointer px-4 py-1 rounded-3xl border-[0.67px] border-rose-600/10"
                      >
                        {darkNews.sector?.name || "Unknown Sector"}
                      </button>
                      {darkNews.category && (
                        <button
                          type="submit"
                          className="flex items-center justify-center bg-[#E5223A1C] hover:bg-[#E5223A1C] text-[#E5223A] text-sm sm:text-sm md:text-lg 2xl:text-2xl cursor-pointer px-4 py-1 rounded-3xl border-[0.67px] border-rose-600/10"
                        >
                          {darkNews.category.name}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[35%]">
              {/* Buttons */}
              <div className="h-auto sm:h-14 bg-stone-50 px-[14px] py-[10px] sm:py-[5px] flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl mb-[19px]">
                <div
                  onClick={() => setActive("tools")}
                  className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
                    active === "tools" ? "bg-[#E5223A]" : "bg-stone-50"
                  }`}
                >
                  <div
                    className={`text-l font-medium ${active === "tools" ? "text-white" : "text-[#727272]"}`}
                  >
                    Recent Posts
                  </div>
                </div>
                <div
                  onClick={() => setActive("education")}
                  className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
                    active === "education" ? "bg-[#E5223A]" : "bg-stone-50"
                  }`}
                >
                  <div
                    className={`text-l font-medium ${active === "education" ? "text-white" : "text-[#727272]"}`}
                  >
                    Popular Posts
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {postsLoading && !postsError ? (
                <div className="flex items-center justify-center mt-[30px] min-h-[200px]">
                  <div className="text-xl">Loading related posts...</div>
                </div>
              ) : postsError ? (
                <div className="flex flex-col items-center justify-center mt-[30px] min-h-[200px] text-center">
                  <div className="text-xl text-red-500">{postsError}</div>
                  <button
                    onClick={handleRetryPosts}
                    className="mt-4 px-4 py-2 bg-[#E5223A] text-white rounded-lg hover:bg-red-600"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <>
                  {/* Recent Posts */}
                  {active === "tools" && (
                    <div className="mt-[30px] md:mt-0 space-y-5">
                      {recentPosts.length > 0 ? (
                        recentPosts.map((post, index) => (
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
                                    <span className="ml-[4px] text-[#959595]">
                                      | {formatDate(post.updatedAt || post.createdAt)}
                                    </span>
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
                        ))
                      ) : (
                        <div className="text-center p-8">No recent posts found.</div>
                      )}
                    </div>
                  )}

                  {/* Popular Posts */}
                  {active === "education" && (
                    <div className="space-y-5">
                      {popularPosts.length > 0 ? (
                        popularPosts.map((post, index) => (
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
                                    <span className="ml-[4px] text-[#959595]">
                                      | {formatDate(post.updatedAt || post.createdAt)}
                                    </span>
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
                        ))
                      ) : (
                        <div className="text-center p-8">No popular posts found.</div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <Footers />
      </div>
    </>
  );
};

export default Page;