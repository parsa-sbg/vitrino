import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import propTypes from 'prop-types'
const baseUrl = import.meta.env.VITE_APP_BASE_URL;



export default function UserNoteBox({ data, showDeleteModal }) {
    
    return (
        <div className="relative h-36 col-span-6 xl:col-span-3">

            <Link to={`/post/?${data._id}`} className="w-full h-full flex gap-2 p-3 rounded-lg border dark:border-gray-500">
                <div className="overflow-hidden h-full min-w-[118.57px] rounded-lg">
                    <img className="object-cover h-full" src={baseUrl + '/' + data.pics[0].path} alt="" />
                </div>
                <div className="flex flex-col justify-between w-full">
                    <h4 className="line-clamp-1 dark:text-white text-[#333] font-semibold">{data.title}</h4>
                    <p className="line-clamp-2 pb-8">{data.note.content}</p>
                </div>
            </Link>
            <button onClick={() => { showDeleteModal(data.note._id) }} className="absolute bottom-2 left-2 mr-auto transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-2"><FaTrashAlt /></button>
        </div>

    )
}

UserNoteBox.propTypes = {
    data: propTypes.object,
    showDeleteModal: propTypes.func
}