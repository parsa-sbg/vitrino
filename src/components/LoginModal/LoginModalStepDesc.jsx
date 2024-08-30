import propTypes from 'prop-types'

export default function LoginModalStepDesc({ isOtpSent, number }) {
    return (
        <p className="text-sm">
            {isOtpSent 
            ? `کد پیامک‌شده به شمارۀ ${0 + number} را وارد کنید.`
            : 'برای استفاده از امکانات ویترینو ، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.'
            }
        </p>
    )
}

LoginModalStepDesc.propTypes = {
    isOtpSent: propTypes.bool,
    number: propTypes.string
}