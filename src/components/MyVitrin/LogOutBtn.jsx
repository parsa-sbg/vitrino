import { MdLogout } from 'react-icons/md'
import { useLogOut } from '../../hooks/useLogOut'
import LogOutModal from './LogOutModal'

export default function LogOutBtn() {

    const {isLogOutModalShow, showLoginModal, hideLoginModal, logOut} = useLogOut()

    const logOutBtnClickHandler = () => {
        showLoginModal()
    }

    return (
        <div className="border-t mt-5 pt-3 dark:border-gray-500">
            <button onClick={logOutBtnClickHandler} className="flex items-center gap-2 w-full text-right">
                <MdLogout />
                <span className="pb-1">خروج</span>
            </button>
            <LogOutModal logOut={logOut} hideLoginModal={hideLoginModal} isLogOutModalShow={isLogOutModalShow} />
        </div>
    )
}