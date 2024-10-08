import { SlLocationPin } from "react-icons/sl";
import { useLocations } from "../../hooks/useLocations";


export default function HeaderCitySelectBtn() {

    const { openCitySelectorModal, confirmedCities } = useLocations()


    return (
        <button onClick={openCitySelectorModal}
            className="dark:border-gray-500 dark:hover:bg-gray-700 relative py-2 px-4 text-nowrap gap-2 rounded-l-lg md:rounded-lg flex flex-row-reverse md:flex-row items-center h-full transition-colors duration-300 border-l-2 border-y-2 md:border-none md:hover:bg-gray-100
            before:h-7 before:w-px before:absolute before:right-0 before:bg-gray-300 md:before:hidden
            ">
            <SlLocationPin />
            {confirmedCities.length == 1 ? `${confirmedCities[0].name}` : `${confirmedCities.length} شهر`}
        </button>
    )
}
