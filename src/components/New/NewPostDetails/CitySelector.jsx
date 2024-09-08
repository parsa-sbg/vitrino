import propTypes from 'prop-types'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { useLocations } from '../../../hooks/useLocations'

export default function CitySelector({ selectedCity, setSelectedCity, setSelectedCityneighborhoods, setSelectedNeighborhood }) {

    const [isCitiesListOpen, setIsCitiesListOpen] = useState(false)
    const [inputvalue, setInputvalue] = useState('')
    const [filteredCities, setFilteredCities] = useState()
    

    const { cities, neighborhoods } = useLocations()

    useEffect(() => {
        setInputvalue(selectedCity.name)
        setFilteredCities(cities)
        const mainNeighborhoods = neighborhoods.filter(item => item.city_id == selectedCity.id)
        setSelectedCityneighborhoods(mainNeighborhoods)
        setSelectedNeighborhood(null)
    }, [selectedCity, cities, neighborhoods, setSelectedCityneighborhoods, setSelectedNeighborhood])


    useEffect(() => {
        setFilteredCities(cities.filter(city => city.name.startsWith(inputvalue)))
    }, [inputvalue, cities])


    const focusHandler = useCallback(() => {
        setIsCitiesListOpen(true)
        setInputvalue('')
    }, [])

    const blurHandler = () => {
        setTimeout(() => {
            setInputvalue(selectedCity.name)
            setIsCitiesListOpen(false)
        }, 140);
    }

    return (
        <div>
            <h5 className='text-lg font-semibold mb-10'>موقعیت آگهی</h5>
            <h6 className='text-lg font-semibold mb-2'>شهر</h6>

            <div className="relative w-full">
                <input
                    onChange={e => { setInputvalue(e.target.value.trim()) }}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    value={isCitiesListOpen ? inputvalue : selectedCity.name}
                    className="border-2 cursor-pointer hover:border-[#333] dark:hover:border-white dark:focus:border-main outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 px-3 w-full" placeholder="جستجوی شهر" type="text" />


                <div className={`${isCitiesListOpen && '!block'} hidden shadow-sm z-20 shadow-gray-600 text-white bg-white dark:bg-[#242424] absolute top-[calc(100%+10px)] rounded-lg right-0 left-0 overflow-y-scroll max-h-56 custom-scrollbar`}>
                    {filteredCities?.map(city => (
                        <button
                            onClick={() => {
                                setSelectedCity({ name: city.name, id: city.id })
                            }}
                            className="block w-full py-3 px-2 text-[#333] dark:text-inherit transition-colors duration-100 hover:bg-gray-300 dark:hover:bg-gray-700" key={city.id}>
                            {city.name}
                        </button>
                    ))}
                </div>

            </div>
          
        </div>
    )
}


CitySelector.propTypes = {
    selectedCity: propTypes.object,
    setSelectedCity: propTypes.func,
    setSelectedCityneighborhoods: propTypes.func,
    setSelectedNeighborhood: propTypes.func
}