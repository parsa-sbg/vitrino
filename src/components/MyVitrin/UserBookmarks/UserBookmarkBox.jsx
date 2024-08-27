import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";



export default function UserBookmarkBox() {
    return (
        <Link className="col-span-6 lg:col-span-3 h-fit p-3 rounded-lg border dark:border-gray-500">
            <div className="flex gap-2">
                <div className="flex flex-col justify-between w-full">
                    <h4 className="line-clamp-2 dark:text-white text-[#333] font-semibold">انواع محافظ صفحه تلویزیون و براکت و محافظ برق</h4>
                    <span className="text-sm">۱۵ هفته پیش در مشکین‌دشت</span>
                </div>

                <div className="overflow-hidden h-full min-w-[86.57px] rounded-lg">
                    <img className="object-cover h-full" src="https://s100.divarcdn.com/static/photo/neda/thumbnail/zsQnP7yo2FTbfLXKdQc6Sg/7f6165fa-73d2-44b1-9936-00ae9cb73903.jpg" alt="" />
                </div>
            </div>
            <div className="flex justify-between gap-2 mt-5">
                <button className="flex items-center gap-2 w-full felx justify-center py-1 border dark:border-gray-500 rounded-lg">
                    <FaShareAlt />
                    اشتراک گذاری
                </button>
                <button className="flex items-center gap-2 w-full felx justify-center py-1 border dark:border-gray-500 rounded-lg">
                    <FaTrashAlt />
                    حذف نشان
                </button>
            </div>
        </Link>)
}
