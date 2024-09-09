import { useNavigate } from "react-router-dom"

export default function CancelBtn() {
    const navigate = useNavigate()
    return (
        <button onClick={() => {navigate('/posts')}}
            className='w-full rounded-lg border border-[#333] dark:border-gray-500 py-2 px-6 font-bold bg-gray-100 dark:bg-[#222]'>
            انصراف
        </button>
    )
}
