import { useState } from "react";
import { useLocations } from "../../../hooks/useLocations"
import ProvinceItem from "./ProvinceItem";
import CityItem from "./CityItem";
import { FaArrowRight } from "react-icons/fa6";
import propTypes from 'prop-types'

export default function CitiesList({ searchedValue }) {
    const { provinces, cities } = useLocations()

    const [selectedProvinceId, setSelectedProvinceId] = useState(null)


    let filtredCities = null

    searchedValue ? filtredCities = cities.filter(city => city.name.startsWith(searchedValue)) : ""


    ////////////////////// return suitble jsx in 3 different state  ///////////////

    // state 1 : return suitable cities according to search value
    if (filtredCities) return (
        <div className=' h-full py-5 border-y-2 dark:border-[#ffffff3d] overflow-y-scroll custom-scrollbar px-6 -mx-6'>
            {filtredCities.length ? filtredCities.map(city => (
                <CityItem key={city.id} cityId={city.id} cityName={city.name} />
            )) : 'شهری پیدا نشد.'}
        </div>
    )

    // state 2 : return provinces list
    if (!selectedProvinceId) return (
        <div className=' h-full py-5 border-y-2 dark:border-[#ffffff3d] overflow-y-scroll custom-scrollbar px-6 -mx-6'>
            {provinces.map(province => (
                <ProvinceItem key={province.id} setSelectedProvinceId={setSelectedProvinceId} provinceId={province.id} name={province.name} />
            ))}
        </div>
    )

    // state 3 : return cities of selected province
    return (
        <div className=' h-full py-5 border-y-2 dark:border-[#ffffff3d] overflow-y-scroll custom-scrollbar px-6 -mx-6'>

            <button
                onClick={() => { setSelectedProvinceId(false) }}
                className='flex items-center gap-5 w-full py-3 border-y dark:border-[#333]'>
                <FaArrowRight />
                همه شهر ها
            </button>

            {cities.filter(city => city.province_id == selectedProvinceId).map(city => (
                <CityItem key={city.id} cityId={city.id} cityName={city.name} />
            ))}
        </div>
    )
}

CitiesList.propTypes = {
    searchedValue: propTypes.string
}