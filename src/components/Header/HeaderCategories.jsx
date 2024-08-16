import { IoIosArrowDown } from "react-icons/io";



export default function HeaderCategories() {
    return (
        <div className="relative">
            <button className="py-2 px-4 gap-2 rounded-lg flex items-center h-full transition-colors duration-300 hover:bg-gray-100">
                دسته‌ها
                <IoIosArrowDown />
            </button>
        </div>
    )
}
