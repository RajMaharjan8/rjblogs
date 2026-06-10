import { Blog } from "@/src/interfaces";
import BlogCard from "../molecules/BlogCard";

interface BlogListProps {
  blogList: Blog[];
}

export default function BlogList({ blogList }: BlogListProps) {
  return (
    <>
      {blogList.length > 0 ? (
        <div className="grid grid-cols-12 gap-6">
          {blogList.map((blog, index) => (
            <div className="md:col-span-6 col-span-12" key={blog.id}>
              <BlogCard
                title={blog.title}
                excerpt={blog.excerpt}
                tags={blog.tags}
                imgUrl={blog.thumbnailUrl}
                author={blog.author}
                date={blog.date}
                slug={blog.slug}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[50vh] flex items-center justify-center">
          <p className="text-center text-3xl font-extralight">No Blogs Found</p>
        </div>
      )}
    </>
  );
}
