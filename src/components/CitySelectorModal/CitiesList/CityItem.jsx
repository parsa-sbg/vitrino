import propTypes from 'prop-types'
import { FaCheck } from "react-icons/fa";
import { useLocations } from '../../../hooks/useLocations';
import { memo, useEffect, useState } from 'react';

const CityItem = memo(({ cityName, cityId }) => {

    const [ischecked, setIschecked] = useState(false)
    const { removeSelectedCity, addSelectedCity, isThisCitySelected } = useLocations()


    useEffect(() => {
        const isSelected = isThisCitySelected(cityId)
        setIschecked(isSelected)
    }, [isThisCitySelected, cityId])

    const toggleCheckbox = () => {

        setIschecked(prev => !prev)

        if (isThisCitySelected(cityId)) {
            removeSelectedCity(cityId)
        } else {
            addSelectedCity(cityId, cityName)
        }
    }

    return (
        <div onClick={toggleCheckbox}
            className='cursor-pointer flex justify-between items-center w-full py-3 border-y dark:border-[#333]'>
            {cityName}

            <div className="inline-flex items-center">
                <label className="relative w-full flex items-center rounded-full cursor-pointer">
                    <input type="checkbox"
                        checked={ischecked}
                        onChange={toggleCheckbox}
                        className=" peer relative h-6 w-6 cursor-pointer appearance-none rounded-lg border border-gray-200 transition-all duration-200 checked:bg-main" />
                    <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <FaCheck size={15} />
                    </span>
                </label>
            </div>
        </div>
    )
})

CityItem.displayName = 'CityItem'

CityItem.propTypes = {
    cityName: propTypes.string,
    cityId: propTypes.number,
    isActive: propTypes.bool
}

export default CityItem