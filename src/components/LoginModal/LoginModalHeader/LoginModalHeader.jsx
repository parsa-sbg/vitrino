import CloseLoginModalBtn from "./CloseLoginModalBtn";
import LoginModalTitle from "./LoginModalTitle";
import propTypes from 'prop-types'


export default function LoginModalHeader({closeAndResetModal}) {
    return (
        <div className='flex justify-between items-center border-b dark:border-gray-500 pb-4 mb-4'>
            <LoginModalTitle />
            <CloseLoginModalBtn closeAndResetModal={closeAndResetModal} />
        </div>)
}

LoginModalHeader.propTypes = {
    closeAndResetModal: propTypes.func
}