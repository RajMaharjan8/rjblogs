import { fetchCategories, fetchQuickLinks } from "@/src/helper";
import Link from "next/link";
import Github from "../../public/social/brand-github.svg";
import Instagram from "../../public/social/brand-instagram.svg";
import LinkedIn from "../../public/social/brand-linkedin.svg";


export default async function Footer() {
  const categories = (await fetchCategories()) ?? [];
  const quicklinks = (await fetchQuickLinks()) ?? [];
  console.log("quickL", quicklinks);
  return (
    <footer className="text-white bg-black px-12 py-8 mt-12">
      <div className="container mx-auto md:px-12 px-4 pt-4">
        <div className="grid grid-cols-12 border-b border-primary-text pb-12 cursor-pointer">
          {quicklinks?.length > 0 && (
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 items-start md:mt-0 mt-12">
              <h6 className="text-xl font-extrabold">Quick Links</h6>
              <ul>
                {quicklinks.map((quicklink, index) => (
                  <li
                    key={quicklink?.id ?? index}
                    className="mb-2 hover:text-primary transition-colors ease-in-out"
                  >
                    <a href={quicklink?.link ?? "#"} target="_blank">
                      {quicklink?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {categories?.length > 0 && (
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 items-start md:mt-0 mt-12">
              <h6 className="text-xl font-extrabold">Categories</h6>
              <ul>
                {categories.map((cat, index) => (
                  <li
                    key={cat?.id}
                    className="mb-2 hover:text-primary transition-colors ease-in-out"
                  >
                    <Link href={`/${cat.id}`}>{cat.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 items-start md:mt-12 mt-12">
            <h6 className="text-xl font-extrabold">Follow Me On:</h6>

            <div className="flex gap-2">
              <a href="https://github.com/RajMaharjan8" target="_blank">
                <Github/>
              </a>
              <a href="https://www.linkedin.com/in/raj-maharjan-a408b7229/" target="_blank">
                <LinkedIn/>
              </a>
              <a href="https://www.instagram.com/mr_rajm8/" target="_blank">
                <Instagram/>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <p>© {new Date().getFullYear()} RJ. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
