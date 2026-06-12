import FaqList from "@/app/components/organisms/FaqList";
import {
  convertDateFormat,
  dastToText,
  fetchSingleBlog,
  getReadStats,
} from "@/src/helper";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredText } from "react-datocms";
import Facebook from "../../../public/social/brand-facebook.svg";
import Linkedin from "../../../public/social/brand-linkedin.svg";
import Twitter from "../../../public/social/brand-x.svg";
import CopyLinkButton from "@/app/components/molecules/CopyLinkButton";

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const data = await fetchSingleBlog(slug);
  if (!data) {
    notFound();
  }
  const faqs = data?.faqs ?? [];
  const { wordCount, readTime } = getReadStats(data?.description);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = `${siteUrl}/blog/${slug}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
  return (
    <div>
      <div className="flex gap-2 flex-col md:items-center items-start mt-24 container mx-auto md:px-24 px-4">
        <p className="font-semilight">
          <Link href="/">Home</Link>
          <span> / </span>
          <Link href="/blog">Blog</Link>
          <span> / </span>
          <span className="text-primary-text font-light">{data?.title}</span>
        </p>

        <h1 className="font-extrabold text-4xl text-primary-text">
          {data?.title}
        </h1>

        <p className="text-primary font-extralight text-sm">
          {convertDateFormat(data?._createdAt ?? "")}
        </p>
      </div>

      <div className="aspect-5/2 w-full overflow-hidden mt-10">
        <img
          src={data?.thumbnail?.url}
          className="w-full h-full object-cover"
          alt={data?.thumbnail?.title ?? data?.title}
        />
      </div>

      <div className="container mx-auto md:px-24 px-4 mt-14">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12">
            <div className="flex gap-4">
              <div className="w-18 h-18 overflow-hidden rounded-full shrink-0">
                {data?.author?.profile?.url ? (
                  <img
                    src={data.author.profile.url}
                    className="w-full h-full object-cover"
                    alt={data.author.profile.title ?? data.title}
                  />
                ) : (
                  <div className="bg-primary text-white font-bold text-3xl w-full h-full flex items-center justify-center">
                    {data?.author?.name?.charAt(0) ?? "A"}
                  </div>
                )}
              </div>

              {data?.author && (
                <div className="flex flex-col h-full my-auto ">
                  <p className="text-primary-text text-md">Written By</p>
                  <span className="text-primary text-lg font-extrabold">
                    {data?.author?.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-4 col-span-12 md:mx-auto md:my-auto md:mt-0 mt-8">
            <div className="text-xl font-bold text-primary-text">Read Time</div>
            {readTime ?? 0} Minutes
          </div>

          <div className="md:col-span-4 col-span-12 md:mx-auto md:my-auto md:mt-0 mt-8">
            <div className="text-xl font-bold text-primary-text">
              Word Count
            </div>
            {wordCount ?? 0}
          </div>
        </div>

        <div className="mt-8 text-justify font-light blog-content">
          <StructuredText data={data.description} />
        </div>

        {data?.quote && (
          <div className="my-12 bg-[#F5F2E9] p-8 w-full rounded-xl font-light border border-primary shadow-lg">
            <p className="mb-8">{data?.quote?.quote}</p>
            {data?.quote?.author && (
              <span className="text-primary italic">
                - {data?.quote?.author}
              </span>
            )}
          </div>
        )}

        {faqs.length > 0 && (
          <>
            <h2 className="text-3xl font-light text-extrabold mt-8">
              <strong>Faqs</strong>
            </h2>
            <FaqList faqList={faqs} />
          </>
        )}

        <div className="">
          <h2 className="text-xl font-light text-extrabold mt-8">
            <strong>Share this blog</strong>
          </h2>

          <div className="flex gap-4 py-4 cursor-pointer text-primary">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
              <Facebook />
            </a>
            <a href={linkedinShare} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
              <Linkedin />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
