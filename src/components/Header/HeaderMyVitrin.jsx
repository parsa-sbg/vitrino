import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useLoginValidation } from "../../hooks/useLoginValidation"

export default function HeaderMyVitrin() {

    const runWithLoginCheck = useLoginValidation()
    const navigate = useNavigate()


    const buttonClickHandler = () => {
        runWithLoginCheck(() => { navigate('/myvitrin') })
    }

    return (
        <div className="relative w-full">
            <button onClick={buttonClickHandler} className="block dark:hover:bg-gray-700 outline-none text-nowrap transition-colors duration-300 hover:bg-gray-100 py-2 px-4 rounded-lg w-full" placeholder="جستجو در همهٔ آگهی‌ها" type="text" >
                ویترین من
            </button>
        </div>
    )
}
