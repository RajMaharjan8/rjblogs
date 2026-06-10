import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white bg-black px-12 py-8 mt-12">
      <div className="container mx-auto md:px-12 px-4 pt-4">
        <div className="grid grid-cols-12 border-b border-primary-text pb-12 cursor-pointer">
          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 items-start md:mt-0 mt-12">
            <h6 className="text-xl font-extrabold">Quick Links</h6>
            <ul>
              <li className="mb-2 hover:text-primary transition-colors ease-in-out">
                <Link href="#">Test</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 items-start md:mt-0 mt-12">
            <h6 className="text-xl font-extrabold">Categories</h6>
            <ul>
              <li className="mb-2 hover:text-primary transition-colors ease-in-out">
                <Link href="#">Test</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-4 items-start md:mt-12 mt-12">
            <h6 className="text-xl font-extrabold">
              Subscribe to Our News Letter
            </h6>
          </div>
        </div>

        <div className="pt-8">
          <p>© 2026 RJ. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
