import propTypes from 'prop-types'
import { FaAngleLeft } from "react-icons/fa6";

export default function ProvinceItem({ name, provinceId, setSelectedProvinceId }) {
    return (
        <button
            onClick={() => {setSelectedProvinceId(provinceId)}}
            className='flex justify-between items-center w-full py-3 border-y dark:border-[#333]'>
            {name}
            <FaAngleLeft />
        </button>
    )
}

ProvinceItem.propTypes = {
    name: propTypes.string,
    provinceId: propTypes.number,
    setSelectedProvinceId: propTypes.func
}
