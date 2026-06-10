import Link from "next/link";
import Button from "../atoms/Button";
import Tag from "../atoms/Tag";
import { convertDateFormat } from "@/src/helper";
import { Author, TagInterface } from "@/src/interfaces";

interface BlogCardProps {
  tags: TagInterface[] | null | [];
  title: string;
  excerpt: string;
  imgUrl: string | null;
  author: Author;
  date: string;
  slug: string;
}
export default function BlogCard({
  title,
  tags,
  excerpt,
  imgUrl,
  author,
  date,
  slug,
}: BlogCardProps) {
  const href = `/blog/${slug}`;
  return (
    <Link href={href}>
      <div className="w-full h-auto cursor-pointer mb-24">
        <div className="md:aspect-16/5.5 aspect-2/2 overflow-hidden">
          {imgUrl ? (
            <img
              src={imgUrl}
              alt="blogimg"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="bg-black w-full h-full text-white flex items-center justify-center">
              {title}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 mb-4 mt-6 px-[10%]">
          {tags && (
            <div className="flex gap-4 overflow-auto">
              {tags.map((tag, index) => (
                <Tag title={tag.title} key={tag.id} />
              ))}
            </div>
          )}

          <h3 className="text-3xl font-extrabold hover:text-primary transition-colors ease-in-out">
            {title}
          </h3>
          {author?.name && (
            <p>
              by <span className="text-primary">{author?.name}</span> | {" "}
              {convertDateFormat(date)}
            </p>
          )}
          <p className="line-clamp-2">{excerpt}</p>
          <Button title="+ Read More" />
        </div>
      </div>
    </Link>
  );
}
