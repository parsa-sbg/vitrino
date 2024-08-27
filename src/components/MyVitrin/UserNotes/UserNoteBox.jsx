import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


export default function UserNoteBox() {
    return (
        <Link className="col-span-6 xl:col-span-3 h-36 flex gap-2 p-3 rounded-lg border dark:border-gray-500">
            <div className="overflow-hidden h-full min-w-[118.57px] rounded-lg">
                <img className="object-cover h-full" src="https://s100.divarcdn.com/static/photo/neda/thumbnail/zsQnP7yo2FTbfLXKdQc6Sg/7f6165fa-73d2-44b1-9936-00ae9cb73903.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-between w-full">
                <h4 className="line-clamp-1 dark:text-white text-[#333] font-semibold">انواع محافظ صفحه تلویزیون و براکت و محافظ برق</h4>
                <span className="text-sm">۱۵ هفته پیش در مشکین‌دشت</span>
                <p className="line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <button className="mr-auto transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-2"><FaTrashAlt /></button>
            </div>
            
        </Link>
    )
}
