import propTypes from 'prop-types'
import { IoClose } from 'react-icons/io5'


export default function SuccessLoginAlert({closeAndResetModal}) {
    return (

        <div className={`flex justify-between items-center gap-4 z-50 bg-white dark:bg-[#242424] md:h-auto md:max-w-[490px] md:max-h-[590px] rounded-lg p-7`}>
            با موفقیت وارد شدید.
            <button onClick={closeAndResetModal} className="mr-auto transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-2"><IoClose size={30} /></button>
        </div>

    )
}

SuccessLoginAlert.propTypes = {
    closeAndResetModal: propTypes.func
}