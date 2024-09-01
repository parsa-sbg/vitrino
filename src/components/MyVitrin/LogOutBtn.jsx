import { MdLogout } from 'react-icons/md'
import { useLogOut } from '../../hooks/useLogOut'
import LogOutModal from './LogOutModal'

export default function LogOutBtn() {

    const {isLogOutModalShow, showLoginModa, hideLoginModa, logOut} = useLogOut()

    const logOutBtnClickHandler = () => {
        showLoginModa()
    }

    return (
        <div className="border-t mt-5 pt-3 dark:border-gray-500">
            <button onClick={logOutBtnClickHandler} className="flex items-center gap-2 w-full text-right">
                <MdLogout />
                <span className="pb-1">خروج</span>
            </button>
            <LogOutModal logOut={logOut} hideLoginModa={hideLoginModa} isLogOutModalShow={isLogOutModalShow} />
        </div>
    )
}