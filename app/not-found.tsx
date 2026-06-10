import Link from "next/link";
import Button from "./components/atoms/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center px-4 py-32">
      <p className="text-7xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold text-primary-text">
        Page not found
      </h1>
      <p className="mt-2 font-extralight text-primary-text mb-12">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
      >
        <Button title="Back to Home"/>
      </Link>
    </div>
  );
}
