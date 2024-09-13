import { IoClose } from "react-icons/io5";
import Cover from "../Cover";
import propTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom";

export default function PostCreationAlert({ PostPublishStatus, setConfiredCat }) {

    const navigate = useNavigate()

    const btnClickhandler = () => {
        PostPublishStatus.isPublishedSuccessFully
            ? navigate('/myvitrin/posts')
            : setConfiredCat(null)
    }


    return (
        <div className={`${PostPublishStatus.isFinished && '!opacity-100 !visible'} invisible opacity-0 transition-all duration-200 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-50 flex items-center justify-center`}>
            <div className={`flex flex-col items-center z-50 bg-white dark:bg-[#242424] md:h-auto md:max-w-[490px] rounded-lg p-5`}>
                <div className="flex items-center gap-4 justify-center">
                    <Link to={'/posts'} className="mr-auto transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-2"><IoClose size={30} /></Link>
                    <span>{PostPublishStatus.isPublishedSuccessFully ? 'پست با موفقیت ایجاد شد.' : 'مشکلی پیش آمد !'}</span>
                </div>
                <button onClick={btnClickhandler} className="bg-main mr-auto px-2 py-1 text-white rounded-lg flex justify-center items-center hover:bg-blue-700 transition-colors">{PostPublishStatus.isPublishedSuccessFully ? 'پست های من' : 'تلاش مجدد'}</button>
            </div>
            <Cover />
        </div>
    )
}

PostCreationAlert.propTypes = {
    PostPublishStatus: propTypes.object,
    setConfiredCat: propTypes.func
}