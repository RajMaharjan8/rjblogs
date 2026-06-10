"use client";
import { useState } from "react";

interface FaqProps {
  question: string;
  answer: string;
}

export default function FaqCard({ question, answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border border-[#D1D5DB] rounded-md p-4 mb-2">
      <div
        className="flex gap-2 justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5 className="text-primary-text font-semibold">
          {question}
        </h5>
        <span>
        {isOpen?("-"):("+")}
            
        </span>
      </div>

      {isOpen && (
        <p className="font-extralight mt-4">
          {answer}
        </p>
      )}
    </div>
  );
}
