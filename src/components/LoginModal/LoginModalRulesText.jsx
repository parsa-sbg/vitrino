import propTypes from 'prop-types' 


export default function LoginModalRulesText({isOtpSent}) {
    return (
        <p className={`${isOtpSent && 'hidden'} mt-2`}>شرایط استفاده از خدمات و حریم خصوصی ویترینو را می‌پذیرم.</p>
    )
}

LoginModalRulesText.propTypes = {
    isOtpSent: propTypes.bool
}
