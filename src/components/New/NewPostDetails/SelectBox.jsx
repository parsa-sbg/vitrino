import { useCallback, useEffect, useState } from 'react'
import propTypes from 'prop-types'

export default function SelectBox({ fieldData, fieldChangeHandler, validationObj, setValidationObj }) {

    const [isNeighListOpen, setIsNeighListOpen] = useState(false)
    const [inputvalue, setInputvalue] = useState('')

    useEffect(() => {
        setValidationObj(prev => {
            prev[fieldData.slug] = true
            return prev
        })
    }, [setValidationObj, fieldData])


    useEffect(() => {
        fieldChangeHandler(fieldData.slug, inputvalue)

        setValidationObj((prev) => {
            const newObj = { ...prev }
            newObj[fieldData.slug] = true
            return newObj
        })
    }, [inputvalue, fieldChangeHandler, fieldData, setValidationObj])


    const focusHandler = useCallback(() => {
        setIsNeighListOpen(true)
    }, [])

    const blurHandler = () => {
        setTimeout(() => {
            setIsNeighListOpen(false)
        }, 140);
    }

    return (
        <div>
            <h6 className='text-lg font-semibold mb-2 mt-5'>{fieldData.name}</h6>

            <div className="relative w-full">
                {console.log(!(validationObj[fieldData.slug]))}
                <input
                    placeholder='انتخاب کنید...'
                    onChange={(e) => {setInputvalue(e.target.value.trim())}}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    readOnly
                    value={inputvalue}
                    className={`${!validationObj[fieldData.slug] && '!border-red-600 ' } border-2 cursor-pointer hover:border-[#333] dark:hover:border-white dark:focus:border-main outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 px-3 w-full`} type="text" />


                <div className={`${isNeighListOpen && '!block'} z-20 hidden shadow-sm shadow-gray-600 text-white bg-white dark:bg-[#242424] absolute top-[calc(100%+10px)] rounded-lg right-0 left-0 overflow-y-scroll max-h-56 custom-scrollbar`}>
                    {fieldData?.options?.map((option, index) => (
                        <button
                            key={option + index}
                            onClick={() => {
                                setInputvalue(option)
                            }}
                            className="block w-full py-3 px-2 text-[#333] dark:text-inherit transition-colors duration-100 hover:bg-gray-300 dark:hover:bg-gray-700">
                            {option}
                        </button>
                    ))}
                </div>

            </div>

        </div>
    )
}

SelectBox.propTypes = {
    fieldData: propTypes.object,
    fieldChangeHandler: propTypes.func,
    validationObj: propTypes.object,
    setValidationObj: propTypes.func,
}