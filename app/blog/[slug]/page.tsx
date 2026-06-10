import FaqCard from "@/app/components/molecules/FaqCard";
import FaqList from "@/app/components/organisms/FaqList";
import Link from "next/link";

export default function Page({ params }: PageProps<"/blog/[slug]">) {
  const faqs = [
    {
      id: 1,
      question: "Where is Kirtipur?",
      answer: "In a place Where people cannot go.",
    },
    {
      id: 2,
      question: "Where is Kirtipur?",
      answer: "In a place Where people cannot go.",
    },
    {
      id: 3,
      question: "Where is Kirtipur?",
      answer: "In a place Where people cannot go.",
    },
  ];
  return (
    <div>
      <div className="flex gap-2 flex-col md:items-center items-start mt-24 container mx-auto md:px-24 px-4">
        <p className="font-semilight">
          <Link href="/">Home</Link>
          <span> / </span>
          Travel
          <span> / </span>
          <span className="text-primary-text font-light">
            Latarambeshwor Mahadev Hike from Kathmandu [Updated 2026]
          </span>
        </p>

        <h1 className="font-extrabold text-4xl text-primary-text">
          Learn Next Maybe
        </h1>

        <p className="text-primary font-extralight text-sm">Mar 22, 2025</p>
      </div>

      <div className="aspect-5/2 w-full overflow-hidden mt-10">
        <img
          src={
            "https://blog.arjunjhukal.com.np/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F142196%2F1742710004-img_4025.jpg&w=3840&q=75"
          }
          className="w-full h-full object-cover"
          alt="imgtext"
        />
      </div>

      <div className="container mx-auto md:px-24 px-4 mt-14">
        <div className="flex gap-4">
          <div className="aspect-2/2 overflow-hidden rounded-full max-w-18">
            <img
              src={
                "https://blog.arjunjhukal.com.np/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F142196%2F1725784127-72668.jpg&w=3840&q=75"
              }
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="flex flex-col h-full my-auto ">
            <p className="text-primary-text text-md">Written By</p>
            <span className="text-primary text-lg font-extrabold">
              Arjun Jhukal
            </span>
          </div>
        </div>

        <div className="mt-8 text-justify">
          <p className="font-extralight">
            Come along with me on a peaceful journey to Nepal's secret treasure,
            Latarambeshwor Mahadev hike. My trip from Kathmandu to
            Latarambeshwor Mahadev will be covered in this blog, along with the
            best route to take, the mileage traveled, and stunning images of the
            temple and its surrounds. This book will assist you in organizing
            your trip to this hallowed location, regardless of your level of
            spirituality or interest in travel!
          </p>
        </div>

        <FaqList faqList={faqs} />
      </div>
    </div>
  );
}
