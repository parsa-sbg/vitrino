import { Link } from "react-router-dom";

export default function UserPostBox() {
  return (
    <Link className="col-span-6 flex flex-col sm:h-28 sm:gap-7 lg:gap-10 sm:flex-row justify-between gap-2 p-3 rounded-lg border dark:border-gray-500">

      <div className="flex gap-2 h-full">
        <div className="overflow-hidden h-full min-w-[86.57px] rounded-lg">
          <img className="object-cover h-full w-full" src="https://s100.divarcdn.com/static/photo/neda/thumbnail/zsQnP7yo2FTbfLXKdQc6Sg/7f6165fa-73d2-44b1-9936-00ae9cb73903.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-between w-full">
          <h4 className="line-clamp-1 dark:text-white text-[#333] font-semibold">انواع محافظ صفحه تلویزیون و براکت و محافظ برق</h4>
          <span className="text-sm">۱۵ هفته پیش در مشکین‌دشت</span>
          <span className="text-sm">12,000 تومان</span>
        </div>
      </div>

      <div className="flex items-center sm:flex-col  justify-between">
        <p className="text-nowrap text-sm">
          وضعیت آگهی:
          <span className="text-green-500"> منتشر شده</span>
        </p>
        <button className="w-full max-w-28 border rounded-lg py-1 border-opacity-50 hover:border-opacity-100 transition-colors duration-200 hover:bg-main hover:bg-opacity-10 px-2 border-main mr-auto">مدیریت آگهی</button>
      </div>

    </Link>)
}
