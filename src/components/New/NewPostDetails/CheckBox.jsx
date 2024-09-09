import propTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'


export default function CheckBox({ fieldData, fieldChangeHandler }) {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        fieldChangeHandler(fieldData.slug, isChecked)
    }, [isChecked, fieldChangeHandler, fieldData])

    return (
        <div>
            <h6 className='text-lg font-semibold mb-2 mt-5'>{fieldData.name}</h6>
            <div className="inline-flex items-center cursor-pointer" onClick={() => {setIsChecked(prev => !prev)}}>
                <label className="relative w-full flex items-center rounded-full cursor-pointer">
                    <input type="checkbox"
                        checked={isChecked}
                        readOnly
                        className=" peer relative h-6 w-6 cursor-pointer appearance-none rounded-lg border border-gray-200 transition-all duration-200 checked:bg-main" />
                    <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <FaCheck size={15} />
                    </span>
                </label>
                <span className='mr-2'>{isChecked ? 'دارد' : 'ندارد'}</span>
            </div>
        </div>
    )
}

CheckBox.propTypes = {
    fieldData: propTypes.object,
    fieldChangeHandler: propTypes.func
}