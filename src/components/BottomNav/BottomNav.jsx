import { Link, useNavigate } from "react-router-dom";
import { IoList } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { memo, useState } from "react";
import { useLoginValidation } from '../../hooks/useLoginValidation'
import MobileCatSelectorModal from "../MobileCatSelectorModal/MobileCatSelectorModal";


export default memo(function BottomNav() {

    const [isMobileCatSelectorModalShow, setIsMobileCatSelectorModalShow] = useState(false)

    const runWithLoginCheck = useLoginValidation()

    const navigate = useNavigate()

    return (
        <div className="border-t-2 z-50 fixed bottom-0 right-0 left-0 bg-white dark:bg-[#222]">
            <div className="md:hidden grid grid-cols-4">

                <Link to={'/posts'} className="dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gray-100 py-2 text-center">
                    <BsShopWindow />
                    آگهی ها
                </Link>

                <button
                    onClick={ () => {
                        setIsMobileCatSelectorModalShow(true)
                    }}
                    className="dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gray-100 py-2 text-center">
                    <IoList />
                    دسته‌ها
                </button>

                <Link className="dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gray-100 py-2 text-center">
                    <FaPlusCircle />
                    ثبت آگهی
                </Link>

                <button onClick={() => { runWithLoginCheck(() => { navigate('/myvitrin') }) }} className="dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gray-100 py-2 text-center">
                    <FaUser />
                    ویترین من
                </button>

                <MobileCatSelectorModal setIsMobileCatSelectorModalShow={setIsMobileCatSelectorModalShow} isMobileCatSelectorModalShow={isMobileCatSelectorModalShow} />
            </div>
        </div>
    )
})
