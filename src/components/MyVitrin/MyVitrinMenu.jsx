import MyVitrinMenuItem from "./MyVitrinMenuItem";
import { FaUserAlt } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { RxCountdownTimer } from "react-icons/rx";

import { MdLogout } from "react-icons/md";






export default function MyVitrinMenu() {
    return (
        <div className="h-full font-semibold text-md">

            <div className="flex flex-col border-b pb-3 dark:border-gray-500">
                <span className="flex gap-2 items-center">
                    <FaUserAlt />
                    <span className="pb-1">کاربر ویترینو</span>
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-200 font-light">تلفن 09021230222</span>
            </div>

            <MyVitrinMenuItem href={'/myvitrin/posts'} name={'آگهی‌های من'} Icon={RiFilePaper2Line} />
            <MyVitrinMenuItem href={'/myvitrin/bookmarks'} name={'نشان‌ها'} Icon={FaRegBookmark} />
            <MyVitrinMenuItem href={'/myvitrin/notes'} name={'یادداشت‌ها'} Icon={GrNotes} />
            <MyVitrinMenuItem href={'/myvitrin/recent-seens'} name={'بازدیدهای اخیر'} Icon={RxCountdownTimer} />

            <div className="border-t mt-5 pt-3 dark:border-gray-500">
                <button className="flex items-center gap-2 w-full text-right">
                    <MdLogout />
                    <span className="pb-1">خروج</span>
                </button>
            </div>
        </div>
    )
}
