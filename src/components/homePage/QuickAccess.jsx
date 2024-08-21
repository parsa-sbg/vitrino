import { Link } from "react-router-dom";

export default function QuickAccess() {
    return (
        <div className="flex justify-around items-center pb-4 border-b-2 w-full text-xs gap-3">
            <Link>ثبت آگهی</Link>
            <Link>دربارهٔ ویترینو</Link>
            <Link>دریافت برنامه</Link>
            <Link>اتاق خبر</Link>
            <Link>پشتیبانی</Link>
        </div>)
}
