"use client";
import Link from "next/link";
import logo from "../../public/logo.png";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/connect", label: "Connect" },
  ];
  const isActive = (href: string) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };
  return (
    <nav className="flex justify-between  md:px-12 px-4 cursor-pointer shadow-md/5">
      <div className="aspect-2/2 max-h-24 ">
        <Link href="/">
          <img src={logo.src} alt="" />
        </Link>
      </div>

      <ul className="flex gap-4 h-full my-auto">
        {links.map((link) => (
          <li
            key={link.href}
            className={`${isActive(link.href) ? "text-primary" : "hover:text-primary"} transition-colors ease-in-out`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
