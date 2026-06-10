import BlogCard from "../molecules/BlogCard";

interface Tag {
  id: number;
  title: string;
  slug: string;
}
interface Blog {
  id: number;
  title: string;
  excerpt: string;
  tags: Tag[];
  thumbnailUrl: string | null;
  author: string;
  date: string;
  slug: string;
}
interface BlogListProps {
  blogList: Blog[];
}

export default function BlogList({ blogList }: BlogListProps) {
  return (
    <div className="grid grid-cols-12 gap-6">
      {blogList &&
        blogList.map((blog, index) => (
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
  );
}
