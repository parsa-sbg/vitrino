import propTypes from 'prop-types'
import { useEffect, useState } from 'react'

export default function TitleSelector({ newPostTitle, setNewPostTitle, validationObj, setValidationObj }) {

    const [isValid, setIsValid] = useState(true)


    useEffect(() => {
        setValidationObj(prev => {
            prev.title = true
            return prev
        })
        if (validationObj.title == undefined) {
            setIsValid(true)
        }else {
            setIsValid(validationObj.title)
        }
    }, [setValidationObj, validationObj])

    const onchangeHandler = (e) => {
        setNewPostTitle(e.target.value)
        setIsValid(true)
    }

    return (
        <div>
            <h5 className='text-lg mb-5 mt-10 font-semibold'>عنوان آگهی</h5>
            <input
                onChange={onchangeHandler}
                value={newPostTitle}
                className={`${!isValid && '!border-red-600'} border-2 cursor-pointer hover:border-[#333] dark:hover:border-white dark:focus:border-main outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 px-3 w-full`} placeholder="عنوان آگهی..." type="text" />
        </div>
    )
}

TitleSelector.propTypes = {
    newPostTitle: propTypes.string,
    setNewPostTitle: propTypes.func,
    validationObj: propTypes.object,
    setValidationObj: propTypes.func,
}
