interface InputProps{
    placeholder: string | null;
    type: string;
}
export default function Input({
    placeholder,
    type
}:InputProps){
    return(
    <input className="p-4 w-full border border-primary-text" placeholder={placeholder?placeholder:"Search Blogs"} type={type}/>
    
    )
}