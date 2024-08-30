import { createContext, useEffect, useState } from "react";
import propTypes from 'prop-types'
import { sendOtpCode, verifyOtpCode } from "../services/api";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const storedToken = JSON.parse(localStorage.getItem('userToken'))

    const [userToken, setUserToken] = useState(storedToken ? storedToken : null)
    const [userName, setUserName] = useState(null)

    const [isLoginModalShow, setIsLoginModalShow] = useState(false)
    const isUserLogin = userToken ? true : false

    useEffect(() => {
        localStorage.setItem('userToken', JSON.stringify(userToken))
    }, [userToken])

    const showLoginModal = () => {
        setIsLoginModalShow(true)
    }

    const hideLoginModal = () => {
        setIsLoginModalShow(false)
    }

    const sendOtp = async (phone) => {
        const result = await sendOtpCode(phone)
        return result.status
    }

    const verifyOtp = async (phone, otpCode) => {
        const result = await verifyOtpCode(phone, otpCode)
        return result?.data ? result?.data : null
    }



    return (
        <AuthContext.Provider value={{
            userToken,
            isLoginModalShow,
            showLoginModal,
            hideLoginModal,
            sendOtp,
            isUserLogin,
            verifyOtp,
            setUserToken,
            userName,
            setUserName
        }}>
            {children}
        </AuthContext.Provider >
    )
}

AuthContextProvider.propTypes = {
    children: propTypes.node
}