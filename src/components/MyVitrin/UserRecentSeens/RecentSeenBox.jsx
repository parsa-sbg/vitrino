import { Link } from "react-router-dom";
import propTypes from 'prop-types'
import { MdImageNotSupported } from "react-icons/md";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;


export default function RecentSeenBox({ recentSeenObj }) {
    console.log(recentSeenObj);

    return (
        <Link to={`/post/?${recentSeenObj.postId}`} className="col-span-6 lg:col-span-3 h-28 flex gap-2 p-3 rounded-lg border dark:border-gray-500">
            <div className="overflow-hidden h-full min-w-[90px] max-w-[90px] rounded-lg">
                {
                    recentSeenObj.postImageSrc
                        ? <img className="h-full w-full object-cover" src={baseUrl + '/' + recentSeenObj.postImageSrc} alt="" />
                        : <div className="bg-gray-300 dark:bg-gray-500 flex h-full items-center justify-center"><MdImageNotSupported size={40} /></div>
                }
            </div>
            <div className="flex flex-col justify-between w-full">
                <h4 className="line-clamp-1 dark:text-white text-[#333] font-semibold">{recentSeenObj.postTitle}</h4>
                <button className="w-full mt-auto max-w-60 text-center mx-auto rounded-lg text-white bg-green-700">مشاهده</button>
            </div>
        </Link>
    )
}

RecentSeenBox.propTypes = {
    recentSeenObj: propTypes.object
}