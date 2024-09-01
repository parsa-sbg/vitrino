import { useState } from "react"
import { useAuth } from "./useAuth"


export const useLogOut = () => {
    const [isLogOutModalShow, setIsLogOutModalShow] = useState(false)
    const {logOut} = useAuth()

    const showLoginModa = () => {
        setIsLogOutModalShow(true)
    }

    const hideLoginModa = () => {
        setIsLogOutModalShow(false)
    }

    return {
        isLogOutModalShow,
        showLoginModa,
        hideLoginModa,
        logOut
    }
}
