import BlogCard from "./components/molecules/BlogCard";
import BlogList from "./components/organisms/BlogList";
import { fetchBlogs } from "@/src/helper";

// This machine goes to DatoCMS, fetches the blogs, and hands them back.

export default async function Home() {
  const blogs = await fetchBlogs(40, null, null);
  const featured = blogs[0];

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mt-24">
          <BlogCard
            title={featured.title}
            excerpt={featured.excerpt}
            imgUrl={featured.thumbnailUrl}
            tags={featured.tags}
            author={featured.author}
            date={featured.date}
            slug={featured.slug}
          />
        </div>

        {blogs.length > 0 ? (
          <>
            <h2 className="text-4xl font-extrabold mb-12">Other Blogs</h2>
            <BlogList blogList={blogs.splice(1)} />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
