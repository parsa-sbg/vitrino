import { BsSearch } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";



export default function HeaderSearchBar() {
    return (


        <div className="relative w-full">
            <input className=" outline-none dark:bg-transparent dark:border-gray-500 md:focus:border-main transition-colors border-gray-200 border-y-2 border-r-2 md:border-2 rounded-r-lg md:rounded-lg py-2 pl-3 pr-10 w-full" placeholder="جستجو در همهٔ آگهی‌ها" type="text" />
            <BsSearch className="absolute right-2 top-0 bottom-0 my-auto" size={20} />
        </div>

    )
}
