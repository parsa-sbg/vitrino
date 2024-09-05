import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import propTypes from 'prop-types'
const baseUrl = import.meta.env.VITE_APP_BASE_URL;




export default function UserBookmarkBox({ bookMarkItem, showModal }) {

    return (
        <div className="col-span-6 p-3 lg:col-span-3 rounded-lg h-fit border dark:border-gray-500">

            <Link to={`/post/?${bookMarkItem._id}`} className=" h-fit">
                <div className="flex gap-2">
                    <div className="flex flex-col justify-between w-full">
                        <h4 className="line-clamp-2 dark:text-white text-[#333] font-semibold">{bookMarkItem.title}</h4>
                        <span className="text-sm">۱۵ هفته پیش در مشکین‌دشت</span>
                    </div>

                    <div className="overflow-hidden h-[175.86px]  w-[300px] rounded-lg">
                        <img className="object-cover h-full w-full" src={baseUrl + '/' + bookMarkItem.pics[0].path} alt="" />
                    </div>
                </div>
            </Link>

            <div className="flex justify-between gap-2 mt-5">
                <button className="flex items-center gap-2 w-full felx justify-center py-1 border dark:border-gray-500 rounded-lg">
                    <FaShareAlt />
                    اشتراک گذاری
                </button>
                <button onClick={() => {showModal(bookMarkItem._id)}} className="flex items-center gap-2 w-full felx justify-center py-1 border dark:border-gray-500 rounded-lg">
                    <FaTrashAlt />
                    حذف نشان
                </button>
            </div>

        </div>
    )
}


UserBookmarkBox.propTypes = {
    bookMarkItem: propTypes.object,
    showModal: propTypes.func
}