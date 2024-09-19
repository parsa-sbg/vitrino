import propTypes from 'prop-types'
import { useEffect, useState } from 'react'


export default function CheckBoxFilter({ name, callBack, isChecked }) {

    // const [isChecked, setIsChecked] = useState(false)


    const toggleCheckBox = (e) => {
        callBack(e.target.checked)
    }

    return (
        <div className='flex items-center justify-between'>

            <span>{name}</span>

            <label className=" items-center cursor-pointer">
                <input onChange={toggleCheckBox} type="checkbox" value="" checked={isChecked} className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-main"></div>
            </label>
        </div>
    )
}

CheckBoxFilter.propTypes = {
    name: propTypes.string,
    callBack: propTypes.func
}