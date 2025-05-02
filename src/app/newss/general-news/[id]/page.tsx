"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Footers from "@/app/components/footers/page";
import Headers from "@/app/components/headers/page";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { getGeneralNewsService } from "@/services/user-service";

const Page = () => {
  const [active, setActive] = useState("tools");
  const params = useParams();

  interface Post {
    boardImg: string;
    avatarImg: string;
    author: string;
    time: string;
    title: string;
    tag: string;
  }

  interface Article {
    title: string;
    mainImage: string;
    author: string;
    authorImage: string;
    publishedTime: string;
    content: { text: string }[];
    secondaryImage?: string;
    secondaryHeading?: string;
    sourceUrl: string;
    category: string;
  }

  const [article, setArticle] = useState<Article | null>(null);
  const [toolPosts, setToolPosts] = useState<Post[]>([]);
  const [educationPosts, setEducationPosts] = useState<Post[]>([]);
  const [articleLoading, setArticleLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  const [articleError, setArticleError] = useState<string | null>(null);
  const [postsError, setPostsError] = useState<string | null>(null);

  const fetchData = async () => {
    const articleId = params.id as string;

    // Fetch single post data
    try {
      setArticleLoading(true);
      setArticleError(null);
      const articleResponse = await getGeneralNewsService(`/news/${articleId}`);
      const articleData = articleResponse.data;
      setArticle({
        title: articleData.title || "Untitled",
        mainImage: articleData.image || "/images/mainnews.png",
        author: articleData.author || "Unknown Author",
        authorImage: articleData.authorImage || "/sarah.svg",
        publishedTime: articleData.createdAt ? new Date(articleData.createdAt).toLocaleDateString() : "Unknown Date",
        content: articleData.description
          ? articleData.description.split("\n\n").map((text: string) => ({ text }))
          : [{ text: "No content available" }],
        secondaryImage: articleData.image || "/images/keys.png",
        secondaryHeading: "Related Insights",
        sourceUrl: articleData.source || "https://www.gmail.com",
        category: articleData.category?.name || "General",
      });
    } catch (error) {
      console.error("Error fetching article:", error);
      setArticleError("Failed to load article. Please try again.");
    } finally {
      setArticleLoading(false);
    }

    // Fetch related posts
    try {
      setPostsLoading(true);
      setPostsError(null);
      const currentPage = 1;
      const itemsPerPage = 10;
      const newsResponse = await getGeneralNewsService(`/news?page=${currentPage}&limit=${itemsPerPage}`);
      const newsItems = newsResponse.data.items || [];

      // Filter and map posts for Tools (Technology category)
      const fetchedToolPosts = newsItems
        .filter((item: any) => item.category?.name === "Technology")
        .map((item: any) => ({
          boardImg: item.image || "/images/one.png",
          avatarImg: item.authorImage || "/sarah.svg",
          author: item.author || "Unknown Author",
          time: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Unknown Date",
          title: item.title || "Untitled",
          tag: item.category?.name || "Technology",
        }))
        .slice(0, 4);

      // Filter and map posts for Education (Lifestyle or Financial categories)
      const fetchedEducationPosts = newsItems
        .filter((item: any) => item.category?.name === "Lifestyle" || item.category?.name === "Financial")
        .map((item: any) => ({
          boardImg: item.image || "/images/mobile.png",
          avatarImg: item.authorImage || "/sarah.svg",
          author: item.author || "Unknown Author",
          time: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Unknown Date",
          title: item.title || "Untitled",
          tag: item.category?.name || "General",
        }))
        .slice(0, 4);

      // Sort by views for popularity
      const sortByPopularity = (posts: any) => posts.sort((a: any, b: any) => (b.views || 0) - (a.views || 0));

      setToolPosts(sortByPopularity(fetchedToolPosts));
      setEducationPosts(sortByPopularity(fetchedEducationPosts));
    } catch (error) {
      console.error("Error fetching related posts:", error);
      setPostsError("Failed to load related posts. Please try again.");
    } finally {
      setPostsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const handleRetry = () => {
    fetchData();
  };

  return (
    <>
      <div className="bg-[url('/images/dotsBGImage.png')] bg-no-repeat bg-size-[100%]">
        <Headers />
        <div className="container">
          {/* Breadcrumbs */}
          {articleLoading && !articleError ? (
            <div className="flex justify-center items-center mt-[50px]">
              <div className="text-xl">Loading article...</div>
            </div>
          ) : articleError ? (
            <div className="flex flex-col justify-center items-center mt-[50px] text-center">
              <div className="text-xl text-red-500">{articleError}</div>
              <button
                onClick={handleRetry}
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
                    <BreadcrumbPage className="text-[#727272]">{article?.category}</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="bg-[#E5223A] w-px h-[11px]" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#E5223A]">
                      {article?.title || "Article"}
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
                <div className="flex justify-center items-center">
                  <div className="text-xl">Loading article content...</div>
                </div>
              ) : articleError ? (
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="text-xl text-red-500">{articleError}</div>
                  <button
                    onClick={handleRetry}
                    className="mt-4 px-4 py-2 bg-[#E5223A] text-white rounded-lg hover:bg-red-600"
                  >
                    Retry
                  </button>
                </div>
              ) : !article ? (
                <div className="flex justify-center items-center">
                  <div className="text-xl text-red-500">Article not found</div>
                </div>
              ) : (
                <>
                  <Image
                    src={article.mainImage}
                    alt={article.title}
                    width={955}
                    height={425}
                    className="w-full object-cover rounded-xl md:rounded-[30px]"
                    priority
                  />

                  {/* Content */}
                  <div className="flex items-center mt-[20px] md:mt-[59px]">
                    <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                      <Image
                        src={article.authorImage}
                        alt="Author"
                        height={34}
                        width={34}
                        className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                      />
                      <div className="flex justify-center items-center 2xl:text-lg lg:text-md text-sm">
                        <div className="text-[#1C1B35]">
                          By {article.author}
                          <span className="ml-[4px] text-[#959595]">| {article.publishedTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[20px]">
                    <div className="justify-start text-[#1C1B35] text-2xl md:text-2xl lg:text-4xl 2xl:text-5xl font-medium">
                      {article.title}
                    </div>
                    <Image
                      src="/dots.svg"
                      alt="read more"
                      height={80}
                      width={80}
                      className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px]"
                    />
                  </div>

                  {/* Primary content */}
                  {article.content.map((paragraph, index) => (
                    <div
                      key={index}
                      className="text-[#1C1B35] text-md sm:text-lg md:text-xl 2xl:text-2xl font-normal mt-[20px] md:mt-[46px]"
                    >
                      {paragraph.text}
                    </div>
                  ))}

                  {/* Secondary image */}
                  {article.secondaryImage && (
                    <div className="mt-[46px]">
                      <Image
                        src={article.secondaryImage}
                        alt="Article image"
                        width={955}
                        height={425}
                        className="w-full object-cover rounded-xl md:rounded-[30px]"
                        priority
                      />
                    </div>
                  )}

                  {/* Secondary heading */}
                  {article.secondaryHeading && (
                    <div className="mt-[46px] justify-start text-[#1C1B35] text-2xl md:text-4xl font-medium">
                      {article.secondaryHeading}
                    </div>
                  )}

                  {/* Source information */}
                  <div className="mt-[46px] lg:mb-[119px] mb-[20px] flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-start md:items-start text-center gap-x-2 gap-y-2 text-md sm:text-lg md:text-xl 2xl:text-2xl font-medium">
                    <span className="text-[#727272]">GENERAL NEWS SOURCE:</span>
                    <a
                      href={article.sourceUrl}
                      className="text-[#1C1B35] underline break-words cursor-pointer"
                    >
                      {article.sourceUrl}
                    </a>
                    <Image
                      src="/link.svg"
                      alt="Link"
                      height={17}
                      width={18}
                      className="ml-[20px] cursor-pointer self-center"
                    />
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
                  <div className={`text-l font-medium ${active === "tools" ? "text-white" : "text-[#727272]"}`}>Tools Posts</div>
                </div>
                <div
                  onClick={() => setActive("education")}
                  className={`w-full sm:w-1/2 h-11 py-[10px] sm:py-[17px] rounded-lg flex justify-center items-center gap-2 cursor-pointer ${
                    active === "education" ? "bg-[#E5223A]" : "bg-stone-50"
                  }`}
                >
                  <div className={`text-l font-medium ${active === "education" ? "text-white" : "text-[#727272]"}`}>Education Posts</div>
                </div>
              </div>

              {/* Related Posts */}
              {postsLoading && !postsError ? (
                <div className="flex justify-center items-center mt-[30px]">
                  <div className="text-xl">Loading related posts...</div>
                </div>
              ) : postsError ? (
                <div className="flex flex-col justify-center items-center mt-[30px] text-center">
                  <div className="text-xl text-red-500">{postsError}</div>
                  <button
                    onClick={handleRetry}
                    className="mt-4 px-4 py-2 bg-[#E5223A] text-white rounded-lg hover:bg-red-600"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <>
                  {/* Tools Posts */}
                  {active === "tools" && (
                    <div className="mt-[30px] md:mt-0 space-y-5 2xl:space-y-14">
                      {toolPosts.length > 0 ? (
                        toolPosts.map((cards, index) => (
                          <div
                            key={index}
                            className="py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]"
                          >
                            <div>
                              <Image
                                src={cards.boardImg}
                                alt="board"
                                height={140}
                                width={134}
                                unoptimized
                                className="w-full h-[140px] md:h-auto sm:w-[134px] rounded-xl object-cover"
                              />
                            </div>
                            <div className="w-full pr-0">
                              <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                                <Image
                                  src={cards.avatarImg}
                                  alt="Author"
                                  height={34}
                                  width={34}
                                  className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                                />
                                <div className="flex justify-center items-center 2xl:text-lg lg:text-md text-sm">
                                  <div className="text-[#1C1B35]">
                                    By {cards.author}
                                    <span className="ml-[4px] text-[#959595]">| {cards.time}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-[#1C1B35] text-m sm:text-m md:text-m lg:text-lg">{cards.title}</div>
                              <div className="flex justify-between items-center">
                                <div className="text-sm text-[#FF475E] font-bold">{cards.tag}</div>
                                <Image
                                  src="/Arrow.svg"
                                  alt="Red Arrow"
                                  height={29}
                                  width={29}
                                  className="xl:w-[29px] xl:h-[29px] w-5 h-5 sm:w-5 sm:h-5 bg-[#E5223A] rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-[#1C1B35] text-center">No tools posts available</div>
                      )}
                    </div>
                  )}

                  {/* Education Posts */}
                  {active === "education" && (
                    <div className="space-y-5 2xl:space-y-14">
                      {educationPosts.length > 0 ? (
                        educationPosts.map((cards, index) => (
                          <div
                            key={index}
                            className="py-[12px] px-[15px] w-full flex flex-col sm:flex-row bg-stone-50 rounded-[20.65px] gap-[19px]"
                          >
                            <div>
                              <Image
                                src={cards.boardImg}
                                alt="board"
                                height={140}
                                width={134}
                                className="w-full h-[140px] md:h-auto sm:w-[134px] rounded-xl object-cover"
                              />
                            </div>
                            <div className="w-full pr-0">
                              <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
                                <Image
                                  src={cards.avatarImg}
                                  alt="Author"
                                  height={34}
                                  width={34}
                                  className="sm:h-[20px] sm:w-[20px] md:h-[30px] md:w-[30px] w-8 h-8"
                                />
                                <div className="flex justify-center items-center 2xl:text-lg lg:text-md text-sm">
                                  <div className="text-[#1C1B35]">
                                    By {cards.author}
                                    <span className="ml-[4px] text-[#959595]">| {cards.time}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-[#1C1B35] text-m sm:text-m md:text-m lg:text-lg">{cards.title}</div>
                              <div className="flex justify-between items-center">
                                <div className="text-sm text-[#FF475E] font-bold">{cards.tag}</div>
                                <Image
                                  src="/Arrow.svg"
                                  alt="Red Arrow"
                                  height={29}
                                  width={29}
                                  className="xl:w-[29px] xl:h-[29px] w-5 h-5 sm:w-5 sm:h-5 bg-[#E5223A] rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-[#1C1B35] text-center">No education posts available</div>
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