import { useAuth } from "./useAuth"

export const useLoginValidation = () => {
    const { isUserLogin, showLoginModal } = useAuth()


    const callBackWithCheckLogin = (callBack) => {
        if (isUserLogin) {
            callBack()
        } else {
            showLoginModal()
        }
    }

    return callBackWithCheckLogin
}