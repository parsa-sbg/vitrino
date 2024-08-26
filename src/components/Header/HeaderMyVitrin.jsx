import { Link } from "react-router-dom"

export default function HeaderMyVitrin() {
    return (
        <div className="relative w-full">
            <Link to={'/myvitrin'} className="block dark:hover:bg-gray-700 outline-none text-nowrap transition-colors duration-300 hover:bg-gray-100 py-2 px-4 rounded-lg w-full" placeholder="جستجو در همهٔ آگهی‌ها" type="text" >
                ویترین من 
            </Link>
        </div>
    )
}
