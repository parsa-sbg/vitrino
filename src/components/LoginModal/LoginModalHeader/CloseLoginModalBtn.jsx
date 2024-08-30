import { IoClose } from "react-icons/io5";
import propTypes from 'prop-types'


export default function CloseLoginModalBtn({closeAndResetModal}) {


    return (
        <button onClick={closeAndResetModal} className="mr-auto transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-2"><IoClose size={30} /></button>
    )
}

CloseLoginModalBtn.propTypes = {
    closeAndResetModal: propTypes.func
}
