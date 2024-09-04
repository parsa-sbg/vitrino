import { FaBookmark } from "react-icons/fa";
import propTypes from 'prop-types'
import { addBookMark, removeBookMark } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useLoginValidation } from "../../hooks/useLoginValidation";

export default function PostBookMark({ isBookMarked, postId }) {

    const { userToken } = useAuth()
    const [isBookMarkBtnActive, setIsBookMarkBtnActive] = useState(false)
    const runWithCheckLogin = useLoginValidation()


    useEffect(() => {
        setIsBookMarkBtnActive(isBookMarked)
    }, [isBookMarked])

    const bookMarkBtnClickHandler = () => {
        runWithCheckLogin(() => {
            isBookMarkBtnActive ? removeBookMark(postId, userToken) : addBookMark(postId, userToken)

            setIsBookMarkBtnActive(prev => !prev)
        })
    }

    return (
        <div onClick={bookMarkBtnClickHandler}>
            <FaBookmark className={`${isBookMarkBtnActive && 'stroke-main fill-main'} transition-colors cursor-pointer stroke-[30] fill-transparent`} size={30} />
        </div>
    )
}

PostBookMark.propTypes = {
    isBookMarked: propTypes.bool,
    postId: propTypes.string
}