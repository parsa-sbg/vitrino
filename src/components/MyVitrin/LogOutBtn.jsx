import { MdLogout } from 'react-icons/md'
import { useLogOut } from '../../hooks/useLogOut'
import LogOutModal from './LogOutModal'

export default function LogOutBtn() {

    const {isLogOutModalShow, showLogOutModal, hideLogOutModal, logOut} = useLogOut()

    const logOutBtnClickHandler = () => {
        showLogOutModal()
    }

    return (
        <div className="border-t pt-3 dark:border-gray-500">
            <button onClick={logOutBtnClickHandler} className="flex items-center gap-2 w-full text-right hover:bg-red-600 border border-transparent hover:border-red-600 !bg-opacity-20 py-2 px-1 rounded-md transition-colors">
                <MdLogout />
                <span className="pb-1">خروج</span>
            </button>
            <LogOutModal logOut={logOut} hideLogOutModal={hideLogOutModal} isLogOutModalShow={isLogOutModalShow} />
        </div>
    )
}