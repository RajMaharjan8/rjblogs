interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return <button className="bg-transparent border border-primary text-black font-light py-[0.5rem] px-[0.85rem] hover:bg-primary hover:text-white max-w-fit transition-all ease-in-out">
    {title}
    </button>;
}
