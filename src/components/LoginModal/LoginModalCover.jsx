import { memo } from "react"
import propTypes from 'prop-types'

const LoginModalCover = memo(({ closeAndResetModal }) => {

    return (
        <div onClick={closeAndResetModal} className="fixed right-0 left-0 bottom-0 top-0 w-full h-full dark:bg-white bg-black opacity-50"></div>
    )
})

LoginModalCover.displayName = 'LoginModalCover'

LoginModalCover.propTypes = {
    closeAndResetModal: propTypes.func
}

export default LoginModalCover