import { memo } from "react"
import { useAuth } from "../../hooks/useAuth"


export default memo(function LoginModalCover() {

    const { hideLoginModal } = useAuth()

    const coverClickHandler = () => {
        hideLoginModal()       
    }

    return (
        <div onClick={coverClickHandler} className="fixed right-0 left-0 bottom-0 top-0 w-full h-full dark:bg-white bg-black opacity-50"></div>
    )
})