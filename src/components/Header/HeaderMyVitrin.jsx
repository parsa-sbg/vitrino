import { useAuth } from "../../hooks/useAuth"
import { useLoginValidation } from "../../hooks/useLoginValidation"
import { useState } from "react"
import Cover from "../Cover"
import LogOutModal from "../MyVitrin/LogOutModal"
import { useLogOut } from "../../hooks/useLogOut"
import { FaRegBookmark, FaUserAlt } from "react-icons/fa"
import MyVitrinMenuItem from "../MyVitrin/MyVitrinMenuItem"
import { RiFilePaper2Line } from "react-icons/ri"
import { GrNotes } from "react-icons/gr"
import { RxCountdownTimer } from "react-icons/rx"
import { MdLogout } from "react-icons/md"

export default function HeaderMyVitrin() {

    const { isLogOutModalShow, showLogOutModal, hideLogOutModal, logOut } = useLogOut()
    const { userName } = useAuth()

    const logOutBtnClickHandler = () => {
        showLogOutModal()
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const runWithLoginCheck = useLoginValidation()


    const buttonClickHandler = () => {
        runWithLoginCheck(() => { setIsMenuOpen(true) })
    }

    return (
        <div className="relative w-full" >
            <button onClickCapture={buttonClickHandler} className="block header-menu-btn dark:hover:bg-gray-700 outline-none text-nowrap transition-colors duration-300 hover:bg-gray-100 py-2 px-4 rounded-lg w-full" placeholder="جستجو در همهٔ آگهی‌ها" type="text" >
                ویترین من
            </button>

            <div onClick={() => { setIsMenuOpen(false) }} className={`${isMenuOpen && '!opacity-100 !visible'} absolute invisible opacity-0 transition-all duration-200 top-5 left-0 right-0`}>
                <div className="absolute z-40 bg-white dark:bg-[#242424] w-52 p-2 rounded-lg my-10">
                    <div className="flex flex-col border-b pb-3 dark:border-gray-500">
                        <span className="flex gap-2 items-center">
                            <FaUserAlt />
                            <span className="pb-1">کاربر ویترینو</span>
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-200 font-light">تلفن {userName}</span>
                    </div>

                    <div className="flex flex-col gap-1 my-2">
                        <MyVitrinMenuItem href={'/myvitrin/posts'} name={'آگهی‌های من'} Icon={RiFilePaper2Line} />
                        <MyVitrinMenuItem href={'/myvitrin/bookmarks'} name={'نشان‌ها'} Icon={FaRegBookmark} />
                        <MyVitrinMenuItem href={'/myvitrin/notes'} name={'یادداشت‌ها'} Icon={GrNotes} />
                        <MyVitrinMenuItem href={'/myvitrin/recent-seens'} name={'بازدیدهای اخیر'} Icon={RxCountdownTimer} />
                    </div>

                    <div className="border-t pt-3 dark:border-gray-500">
                        <button onClick={logOutBtnClickHandler} className="flex items-center gap-2 w-full text-right hover:bg-red-600 border border-transparent hover:border-red-600 !bg-opacity-20 py-2 px-1 rounded-md transition-colors">
                            <MdLogout />
                            <span className="pb-1">خروج</span>
                        </button>
                    </div>
                </div>

                <Cover onClickCallBack={() => {
                    setIsMenuOpen(false)
                }} />
            </div>
            <LogOutModal logOut={logOut} hideLogOutModal={hideLogOutModal} isLogOutModalShow={isLogOutModalShow} />

        </div>
    )
}
