import propTypes from 'prop-types'
import { memo } from 'react';
import { FaAngleLeft } from "react-icons/fa6";

const ProvinceItem = memo(({ name, provinceId, setSelectedProvinceId }) => {
    return (
        <button
            onClick={() => { setSelectedProvinceId(provinceId) }}
            className='flex justify-between items-center w-full py-3 border-y dark:border-[#333]'>
            {name}
            <FaAngleLeft />
        </button>
    )
})

ProvinceItem.displayName = 'ProvinceItem'

ProvinceItem.propTypes = {
    name: propTypes.string,
    provinceId: propTypes.number,
    setSelectedProvinceId: propTypes.func
}

export default ProvinceItem