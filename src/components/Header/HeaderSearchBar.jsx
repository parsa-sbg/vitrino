import { CgSearch } from "react-icons/cg";



export default function HeaderSearchBar() {
    return (
        <div className="relative w-full">
            <input className="outline-none bg-transparent md:dark:bg-[#222] md:bg-gray-200 p-2 dark:border-gray-500 border-y-2 border-r-2 md:border-2 rounded-r-lg md:rounded-lg w-full" placeholder="جستجو در همهٔ آگهی‌ها" type="text" />
            <CgSearch className="absolute left-3 top-0 bottom-0 my-auto" size={20} />
        </div>
    )
}
