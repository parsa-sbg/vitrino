import propTypes from 'prop-types'
import { BsSearch } from "react-icons/bs";

export default function SearchInput({ setSearchedValue, searchedValue }) {
    return (
        <div className="relative w-full">
            <input
                onChange={e => { setSearchedValue(e.target.value.trim()) }}
                value={searchedValue}
                className="border-2 outline-none dark:bg-transparent dark:border-[#ffffff3d] focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 pl-3 pr-10 w-full" placeholder="جستجوی شهر" type="text" />
            <BsSearch className="absolute right-2 top-0 bottom-0 my-auto" size={20} />
        </div>)
}

SearchInput.propTypes = {
    setSearchedValue: propTypes.func,
    searchedValue: propTypes.string
}