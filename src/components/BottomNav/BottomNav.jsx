import { Link } from "react-router-dom";
import { IoList } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";


export default function BottomNav() {
    return (
        <div className="border-t-2 fixed bottom-0 right-0 left-0">
            <div className="md:hidden grid grid-cols-4">

                <Link to={'/posts'} className="flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gray-100 py-2 text-center">
                    <BsShopWindow />
                    آگهی ها
                </Link>

                <Link className="flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gray-100 py-2 text-center">
                    <IoList />
                    دسته‌ها
                </Link>

                <Link className="flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gray-100 py-2 text-center">
                    <FaPlusCircle />
                    ثبت آگهی
                </Link>

                <Link className="flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gray-100 py-2 text-center">
                    <FaUser />
                    ویترین من
                </Link>

            </div>
        </div>
    )
}