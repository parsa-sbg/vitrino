import { BsSearch } from "react-icons/bs";
import { useFilters } from "../../hooks/useFilters";

export default function HeaderSearchBar() {

    const { setFilter } = useFilters()

    return (

        <div className="relative w-full">
            <input
                onChange={e => { setFilter('search', e.target.value.trim()) }}
                className=" outline-none dark:bg-transparent dark:border-gray-500 md:focus:border-main transition-colors border-gray-200 border-y-2 border-r-2 md:border-2 rounded-r-lg md:rounded-lg py-2 pl-3 pr-10 w-full"
                placeholder="جستجو در آگهی‌ها" type="text" />
            <BsSearch className="absolute right-2 top-0 bottom-0 my-auto" size={20} />
        </div>

    )
}
