import { IoClose } from "react-icons/io5";
import { useAuth } from "../../../hooks/useAuth";


export default function CloseLoginModalBtn() {

    const { hideLoginModal } = useAuth()

    return (
        <button onClick={hideLoginModal} className="mr-auto transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-2"><IoClose size={30} /></button>
    )
}
