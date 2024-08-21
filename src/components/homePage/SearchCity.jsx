import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocations } from '../../hooks/useLocations'
import { Link } from "react-router-dom";

export default function SearchCity() {

    const [inputValue, setInputValue] = useState('')
    const [isInputFocused, setIsInputFocused] = useState(false)
    const { cities, setSingleCityAsConfirmed } = useLocations()

    const filteredCities = cities.filter(city => city.name.startsWith(inputValue))

    const blurHanndler = () => {
        setTimeout(() => {
            setIsInputFocused(false)
        }, 120);
    }

    return (
        <div className="relative w-full">
            <input
                onBlur={() => { blurHanndler() }}
                onFocus={() => { setIsInputFocused(true) }}
                onChange={e => { setInputValue(e.target.value.trim()) }}
                value={inputValue}
                className="border-2 peer outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 pl-3 pr-10 w-full" placeholder="جستجوی شهر" type="text" />
            <BsSearch className="absolute right-2 top-0 bottom-0 my-auto" size={20} />

            <div className={`${inputValue && isInputFocused && '!block'} hidden shadow-sm shadow-gray-600 text-white bg-white dark:bg-[#242424] absolute top-[calc(100%+10px)] rounded-lg right-0 left-0 overflow-y-scroll max-h-56 custom-scrollbar`}>
                {filteredCities.map(city => (
                    <Link to={'/posts'}
                        onClick={() => { setSingleCityAsConfirmed(city.name, city.id) }}
                        className="block py-3 px-2 text-[#333] dark:text-inherit transition-colors duration-100 hover:bg-gray-300 dark:hover:bg-gray-700" key={city.id}>
                        {city.name}
                    </Link>
                ))}
            </div>

        </div>)
}
