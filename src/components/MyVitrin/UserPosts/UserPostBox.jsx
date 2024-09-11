import { Link } from "react-router-dom";
import propTypes from 'prop-types'
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export default function UserPostBox({ post, showDeleteModal }) {

  return (
    <Link className="col-span-6 flex flex-col sm:h-28 sm:gap-7 lg:gap-10 sm:flex-row justify-between gap-2 p-3 rounded-lg border dark:border-gray-500">

      <div className="flex gap-2 h-full">
        <div className="overflow-hidden h-full min-w-[86.57px] rounded-lg">
          <img className="object-cover h-full w-full" src={baseUrl + '/' + post.pics[0]?.path} alt="" />
        </div>
        <div className="flex flex-col justify-between w-full">
          <h4 className="line-clamp-1 dark:text-white text-[#333] font-semibold">{post.title}</h4>
          <span className="text-sm">{post.price.toLocaleString()} تومان</span>
        </div>
      </div>

      <div className="flex items-center sm:flex-col justify-between">
        <p className="text-nowrap text-sm">
          وضعیت آگهی:
          <span className={`${post.status == 'pending' ? 'text-yellow-500' : post.status == 'published' ? 'text-green-600' : ' text-red-600'} text-green-500`}>
            {post.status == 'pending' ? ' در حال بررسی' : post.status == 'published' ? ' منتشر شده' : ' رد شده'}
          </span>
        </p>
        <button onClick={() => { showDeleteModal(post._id) }} className="w-full max-w-28 border rounded-lg py-1 border-opacity-50 hover:border-opacity-100 transition-colors duration-200 hover:bg-red-600 hover:bg-opacity-10 px-2 dark:border-red-400 mr-auto">حذف آگهی</button>
      </div>

    </Link>
  )
}

UserPostBox.propTypes = {
  post: propTypes.object,
  showDeleteModal: propTypes.func
}