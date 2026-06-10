import BlogList from "../components/organisms/BlogList";
import { fetchBlogs } from "@/src/helper";

export default async function Page({params}: PageProps <"/[category_id]">){
const { category_id } = await params;
const blogs = await fetchBlogs(40, null, category_id)
console.log("blogs",blogs);

return (<div className="container mx-auto px-4 mt-12">
    <BlogList blogList={blogs}/>
</div>)
}