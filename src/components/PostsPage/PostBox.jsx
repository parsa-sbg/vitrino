import { Link } from "react-router-dom"


export default function PostBox() {
  return (
    <Link className="block w-full h-full p-3 border-b sm:rounded-lg md:rounded-none lg:rounded-lg sm:border md:border-x-0 md:border-t-0 lg:border dark:border-gray-500 md:border-b">
        
        <div className="h-full flex justify-between gap-5">

          <div className="flex flex-col justify-between">
            <h4 className="font-bold text-gray-900 dark:text-white line-clamp-2">ابر ویلای 1400متری در 4 طبقه با آسانسور</h4>
            <div className="text-sm">
              <span className="block">نو</span>
              <span className="block">تومان 25,000,000</span>
              <span className="block">لحظاتی پیش در کنگاور</span>
              
            </div>
          </div>

          <div className="overflow-hidden rounded-lg min-w-[133.15px]">
            <img className="h-full object-cover" src="https://s100.divarcdn.com/static/photo/afra/thumbnail/p05CQLkKKkqUM-91H7t3Vw/4119a84f-9ee7-436a-bebb-a48bae85d320.jpg" alt="" />
          </div>

        </div>
    
    </Link>
  )
}
