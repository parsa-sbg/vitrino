import MyVitrinMenuItem from "./MyVitrinMenuItem";
import { FaUserAlt } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { RxCountdownTimer } from "react-icons/rx";

import { MdLogout } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import LogOutBtn from "./LogOutBtn";



export default function MyVitrinMenu() {

    const { userName } = useAuth()

    return (
        <div className="h-full font-semibold text-md">

            <div className="flex flex-col border-b pb-3 dark:border-gray-500">
                <span className="flex gap-2 items-center">
                    <FaUserAlt />
                    <span className="pb-1">کاربر ویترینو</span>
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-200 font-light">تلفن {userName}</span>
            </div>

            <div className="flex flex-col gap-2 my-2">
                <MyVitrinMenuItem href={'/myvitrin/posts'} name={'آگهی‌های من'} Icon={RiFilePaper2Line} />
                <MyVitrinMenuItem href={'/myvitrin/bookmarks'} name={'نشان‌ها'} Icon={FaRegBookmark} />
                <MyVitrinMenuItem href={'/myvitrin/notes'} name={'یادداشت‌ها'} Icon={GrNotes} />
                <MyVitrinMenuItem href={'/myvitrin/recent-seens'} name={'بازدیدهای اخیر'} Icon={RxCountdownTimer} />
            </div>

            <LogOutBtn />
        </div>
    )
}
