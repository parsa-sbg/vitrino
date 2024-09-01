import { createContext, useEffect, useState } from "react";
import propTypes from 'prop-types'
import { getMe, sendOtpCode, verifyOtpCode } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const storedToken = JSON.parse(localStorage.getItem('userToken'))

    const [userToken, setUserToken] = useState(storedToken ? storedToken : null)
    const [userName, setUserName] = useState(null)

    const [isLoginModalShow, setIsLoginModalShow] = useState(false)
    const isUserLogin = userToken ? true : false


    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('userToken', JSON.stringify(userToken))
        getMe(userToken).then(res => {
            setUserName(res.username)
        })
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


    const logOut = () => {
        setUserToken(null)
        setUserName(null)
        navigate('/posts')
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
            logOut
        }}>
            {children}
        </AuthContext.Provider >
    )
}

AuthContextProvider.propTypes = {
    children: propTypes.node
}