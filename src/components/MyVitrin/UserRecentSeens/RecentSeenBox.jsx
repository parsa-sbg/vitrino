import { Link } from "react-router-dom";

export default function RecentSeenBox() {
    return (
        <Link className="col-span-6 lg:col-span-3 h-28 flex gap-2 p-3 rounded-lg border dark:border-gray-500">
            <div className="overflow-hidden h-full min-w-[86.57px] rounded-lg">
                <img className="object-cover h-full" src="https://s100.divarcdn.com/static/photo/neda/thumbnail/zsQnP7yo2FTbfLXKdQc6Sg/7f6165fa-73d2-44b1-9936-00ae9cb73903.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-between w-full">
                <h4 className="line-clamp-1 dark:text-white text-[#333] font-semibold">انواع محافظ صفحه تلویزیون و براکت و محافظ برق</h4>
                <span className="text-sm">۱۵ هفته پیش در مشکین‌دشت</span>
                <button className="w-full max-w-60 text-center m-auto rounded-lg text-white bg-green-700">مشاهده</button>
            </div>
        </Link>
    )
}
