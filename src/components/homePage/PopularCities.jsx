import { Link } from "react-router-dom";

export default function PopularCities() {
    return (
        <div className="w-full text-sm border-b-2 pb-4">
            <h4 className="font-bold">شهرهای پربازدید</h4>
            <div className="grid grid-cols-6 sm:grid-cols-5 mt-10 gap-y-16">
                
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >تهران</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >مشهد</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >کرج</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >شیراز</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >اصفهان</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >اهواز</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >تبریز</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >کرمانشاه</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1" >قم</Link>
                <Link to={'/posts'} className="text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 col-start-3 sm:col-span-1" >رشت</Link>
            </div>
        </div>)
}
