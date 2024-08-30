import propTypes from 'prop-types' 

export default function LoginModalStepTitle({isOtpSent}) {
    return (
        <span className="fonr font-semibold text-[#333] dark:text-white">
            {isOtpSent ? 'کد تأیید را وارد کنید' : 'شمارهٔ موبایل خود را وارد کنید'}
        </span>
    )
}

LoginModalStepTitle.propTypes = {
    isOtpSent: propTypes.bool
}