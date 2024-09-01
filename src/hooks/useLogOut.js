import { useState } from "react"
import { useAuth } from "./useAuth"


export const useLogOut = () => {
    const [isLogOutModalShow, setIsLogOutModalShow] = useState(false)
    const {logOut} = useAuth()

    const showLoginModal = () => {
        setIsLogOutModalShow(true)
    }

    const hideLoginModal = () => {
        setIsLogOutModalShow(false)
    }

    return {
        isLogOutModalShow,
        showLoginModal,
        hideLoginModal,
        logOut
    }
}
