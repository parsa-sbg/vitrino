import { SlLocationPin } from "react-icons/sl";

export default function HeaderCitySelectBtn() {
    return (
        <button
            className="relative py-2 px-4 text-nowrap gap-2 rounded-l-lg md:rounded-lg flex items-center h-full transition-colors duration-300 border-l-2 border-y-2 md:border-none md:hover:bg-gray-100
            before:h-7 before:w-px before:absolute before:right-0 before:bg-gray-300 md:before:hidden
        ">
            <SlLocationPin />
            ۱۳ شهر
        </button>
    )
}