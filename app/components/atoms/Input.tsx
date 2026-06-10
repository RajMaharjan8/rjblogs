interface InputProps {
  placeholder: string | null;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ placeholder, type, onChange }: InputProps) {
  return (
    <input
      className="p-4 w-full border border-primary-text"
      placeholder={placeholder ? placeholder : "Search Blogs"}
      type={type}
      onChange={onChange}
    />
  );
}
