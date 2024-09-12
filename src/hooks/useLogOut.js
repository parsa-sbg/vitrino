import { useState } from "react"
import { useAuth } from "./useAuth"


export const useLogOut = () => {
    const [isLogOutModalShow, setIsLogOutModalShow] = useState(false)
    const {logOut} = useAuth()

    const showLogOutModal = () => {
        setIsLogOutModalShow(true)
    }

    const hideLogOutModal = () => {
        setIsLogOutModalShow(false)
    }

    return {
        isLogOutModalShow,
        showLogOutModal,
        hideLogOutModal,
        logOut
    }
}
