import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import BlogList from "../components/organisms/BlogList";

export default function Page() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 IT Companies in Kathmandu",
      excerpt:
        "The demand for skilled IT professionals and reliable tech solutions in Nepal has never been higher. Many Nepali IT companies are now competing on a global scale, offering high-quality software, web, and mobile solutions. In this article, we’ve listed the top IT companies in Nepal that are leading the way in innovation, service quality, and client satisfaction.",
      thumbnailUrl:
        "https://blog.arjunjhukal.com.np/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F142196%2F1757092930-modern-office-design-with-computer-equipment-inside-generated-by-ai.jpg&w=1920&q=75",
      tags: [
        {
          id: 1,
          title: "Technology",
          slug: "tech",
        },
        {
          id: 2,
          title: "Tour",
          slug: "tour",
        },
      ],
      author: "Arjun Jhukal",
      date: "5 Sept, 2025",
      slug: "top-10",
    },
    {
      id: 2,
      title: "Top 10 IT Companies in Kathmandu",
      excerpt:
        "Nepal that are leading the way in innovation, service quality, and client satisfaction.",
      thumbnailUrl:
        "https://blog.arjunjhukal.com.np/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F142196%2F1757092930-modern-office-design-with-computer-equipment-inside-generated-by-ai.jpg&w=1920&q=75",
      tags: [
        {
          id: 1,
          title: "Technology",
          slug: "tech",
        },
      ],
      author: "Arjun Jhukal",
      date: "5 Sept, 2025",
      slug: "top-10",
    },
    {
      id: 3,
      title: "Top 10 IT Companies in Kathmandu",
      excerpt:
        "The demand for skilled IT professionals and reliable tech solutions in Nepal has never been .",
      thumbnailUrl:
        "https://blog.arjunjhukal.com.np/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F142196%2F1757092930-modern-office-design-with-computer-equipment-inside-generated-by-ai.jpg&w=1920&q=75",
      tags: [
        {
          id: 1,
          title: "Technology",
          slug: "tech",
        },
      ],
      author: "Arjun Jhukal",
      date: "5 Sept, 2025",
      slug: "top-10",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold">Blogs</h1>

      <div className="w-full flex items-center justify-center mt-12">
        <div className="overflow-hidden w-1/2 ">
          <Input type="text" placeholder={null} />
        </div>
      </div>

      <div className="mt-12">
        <BlogList blogList={blogs} />
      </div>
    </div>
  );
}
