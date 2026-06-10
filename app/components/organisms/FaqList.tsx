import { FaqInterface } from "@/src/interfaces";
import FaqCard from "../molecules/FaqCard";


interface FaqListProps {
  faqList: FaqInterface[];
}

export default function FaqList({ faqList }: FaqListProps) {
  return (
    <div className="w-full my-4">
      {faqList &&
        faqList.map((faq, index) => (
          <FaqCard question={faq.question} answer={faq.answer} key={faq.id} />
        ))}
    </div>
  );
}
