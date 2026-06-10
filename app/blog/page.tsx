"use client";
import { fetchBlogs } from "@/src/helper";
import Input from "../components/atoms/Input";
import BlogList from "../components/organisms/BlogList";
import { useEffect, useState } from "react";
import { Blog } from "@/src/interfaces";

export default function Page() {
  const [keyword, setKeyword] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    if (!keyword) {
      fetchBlogs(40, keyword, null).then(setBlogs);
    }
    const timer = setTimeout(() => {
      fetchBlogs(40, keyword, null).then(setBlogs);
    }, 1000);
    return () => clearTimeout(timer);
  }, [keyword]);
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold">Blogs</h1>

      <div className="w-full flex items-center justify-center mt-12">
        <div className="overflow-hidden w-1/2 ">
          <Input
            type="text"
            placeholder={null}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-12">
        <BlogList blogList={blogs} />
      </div>
    </div>
  );
}
