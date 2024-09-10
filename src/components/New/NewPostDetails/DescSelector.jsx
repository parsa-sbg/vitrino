import propTypes from 'prop-types'
import { useEffect, useState } from 'react'


export default function DescSelector({ newPostDesc, setNewPostDesc, validationObj, setValidationObj }) {

    const [isValid, setIsValid] = useState(true)


    useEffect(() => {
        setValidationObj(prev => {
            prev.desc = true
            return prev
        })

        if (validationObj.desc == undefined) {
            setIsValid(true)
        }else {
            setIsValid(validationObj.desc)
        }
    }, [setValidationObj, validationObj])

    const onchangeHandler = (e) => {
        setNewPostDesc(e.target.value)
        setIsValid(true)
    }

    return (
        <div>
            <h5 className='text-lg mb-5 mt-10 font-semibold'>توضیحات آگهی</h5>
            <textarea
                onChange={onchangeHandler}
                value={newPostDesc}
                className={`${!isValid && '!border-red-600'} border-2 h-40 overflow-y-scroll custom-scrollbar cursor-pointer resize-none hover:border-[#333] dark:hover:border-white dark:focus:border-main outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 px-3 w-full`} placeholder="توضیحات خود را بنویسید..." type="text" />
        </div>
    )
}

DescSelector.propTypes = {
    newPostDesc: propTypes.string,
    setNewPostDesc: propTypes.func,
    validationObj: propTypes.object,
    setValidationObj: propTypes.func,
}

