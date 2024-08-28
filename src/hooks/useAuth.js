import { useState } from "react"
import { sendOtpCode } from "../services/api"


export const useAuth = () => {
    const storedToken = JSON.parse(localStorage.getItem('userToken'))

    const [userToken, setUserToken] = useState(storedToken ? storedToken : null)
    const isUserLogin = userToken ? true : false

    const sendOtp = (phone) => {
        sendOtpCode(phone)
    }

    return {userToken, sendOtp, isUserLogin}
}