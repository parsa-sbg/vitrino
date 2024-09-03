import { memo, useState } from "react"
import { CiBookmark } from "react-icons/ci";
import propTypes from 'prop-types'
import PostBookMark from "./PostBookMark";

const PostContact = memo(({phone}) => {

    const [isNubmerShow, setIsNubmerShow] = useState(false)

    return (
        <div className="py-4 my-4 border-t dark:border-gray-500">
            <div className="flex justify-between items-center">
                <button
                    onClick={() => {setIsNubmerShow(true)}}
                    disabled={isNubmerShow}
                    className="disabled:cursor-not-allowed disabled:bg-gray-500 bg-main py-1.5 px-4 rounded-xl text-white">
                    اطلاعات تماس
                </button>
                <PostBookMark />
            </div>
            <div className={`${isNubmerShow && 'mt-5 max-h-32'} transition-all duration-300 max-h-0 overflow-hidden`}>
                <div className="flex justify-between">
                    <span>شمارهٔ موبایل</span>
                    <span className="text-main font-bold">{phone}</span>
                </div>
                <div className={`bg-gray-700 mt-5 p-3 rounded-lg`}>
                    <span className="text-white">توجه !</span>
                    <p className="text-gray-300">ایجاد هرگونه مزاحمت، پیگرد قانونی دارد.</p>
                </div>
            </div>
        </div>

    )
})

PostContact.displayName = 'PostContact'

PostContact.propTypes = {
    phone: propTypes.string
}

export default PostContact