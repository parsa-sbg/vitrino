import { createContext, useState } from "react";
import propTypes from 'prop-types'
import { sendOtpCode } from "../services/api";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const storedToken = JSON.parse(localStorage.getItem('userToken'))

    const [userToken, setUserToken] = useState(storedToken ? storedToken : null)
    const [isLoginModalShow, setIsLoginModalShow] = useState(false)
    const isUserLogin = userToken ? true : false

    const showLoginModal = () => {
        setIsLoginModalShow(true)
    }

    const hideLoginModal = () => {
        setIsLoginModalShow(false)        
    }

    const sendOtp = (phone) => {
        sendOtpCode(phone)
    }

    return (
        <AuthContext.Provider value={{
            userToken,
            isLoginModalShow,
            showLoginModal,
            hideLoginModal,
            sendOtp,
            isUserLogin
        }}>
            {children}
        </AuthContext.Provider >
    )
}

AuthContextProvider.propTypes = {
    children: propTypes.node
}