
interface TagProps{
    title: string
}
export default function Tag({
    title
}: TagProps){
    return(<div className="max-w-fit bg-primary text-white px-[0.85rem] py-[0.5rem] font-light">
        {title}
    </div>);
}