import { Link } from "react-router-dom"
import propTypes from 'prop-types'
const baseUrl = import.meta.env.VITE_APP_BASE_URL;


export default function PostBox({title, price, imagePath, cityName}) {
  return (
    <Link className="block w-full h-full p-3 border-b sm:rounded-lg md:rounded-none lg:rounded-lg sm:border md:border-x-0 md:border-t-0 lg:border dark:border-gray-500 md:border-b">
        
        <div className="h-full flex justify-between gap-5">

          <div className="flex flex-col justify-between">
            <h4 className="font-bold text-gray-900 dark:text-white line-clamp-2">{title}</h4>
            <div className="text-sm">
              <span className="block">نو</span>
              <span className="block">{price?.toLocaleString()} تومان </span>
              <span className="block">لحظاتی پیش در {cityName}</span>
              
            </div>
          </div>

          <div className="overflow-hidden rounded-lg min-w-[133.15px] w-[133.15px]">
            <img className="h-full w-full object-cover" src={baseUrl + '/' + imagePath} alt="" />
          </div>

        </div>
    
    </Link>
  )
}

PostBox.propTypes = {
  title: propTypes.string,
  price: propTypes.number,
  imagePath: propTypes.string,
  cityName:propTypes.string
}