import propTypes from 'prop-types'


export default function LoginModalInput({ number, setNumber, isNumberInvalid, setIsNumberInvalid, isOtpSent, setIsOtpSent, inputOtp, setInputOtp, isOtpInvalid, setIsOtpInvalid }) {


    const inputChangeHandler = e => {
        e.target.value.length < 11 && setNumber(e.target.value.trim())
        setIsNumberInvalid(false)
    }

    const inputChangeHandlerForOtp = e => {
        e.target.value.length < 5 && setInputOtp(e.target.value.trim())
        setIsOtpInvalid(false)
    }

    const changeNumberClickHandler = () => {
        setInputOtp('')
        setNumber('')
        setIsOtpInvalid(false)
        setIsOtpSent(false)
    }

    return (
        <div className={`${isOtpSent && '!pb-2 !mb-7'} w-full relative pb-px mb-1`}>
            <div className=" relative">
                <input
                    onChange={isOtpSent ? inputChangeHandlerForOtp : inputChangeHandler}
                    value={isOtpSent ? inputOtp : number}
                    className={`${isNumberInvalid || isOtpInvalid ? '!border-red-500' : ''} ${!isOtpSent && 'pl-16'} placeholder:text-right placeholder w-full bg-transparent border-2 transition-colors focus:border-main dark:border-gray-500 outline-none rounded-lg py-2 px-2`}
                    placeholder={`${isOtpSent ? 'کد تایید' : 'شماره موبایل'}`}
                    dir='ltr'
                    inputMode='numeric'
                    type="number" />
                <span className={`${isNumberInvalid && '!text-red-500'} ${isOtpSent && '!hidden'} transition-colors absolute h-fit px-2 rounded-sm top-0 bottom-0 bg-gray-200 dark:bg-gray-700 left-2 my-auto flex items-center`}>98+</span>
            </div>

            <button
                onClick={changeNumberClickHandler}
                className={`${isOtpSent && '!block'} hidden absolute top-full left-0 text-sm bg-gray-300 dark:bg-gray-700 !bg-opacity-40 hover:!bg-opacity-70 transition-colors py-1 px-2 rounded-full`}>
                تغییر شمارهٔ موبایل
            </button>

            <span className={`${isNumberInvalid || isOtpInvalid ? '!block' : '' } absolute hidden text-red-500 top-full tracking-tighter`}>
                {
                    isOtpInvalid
                    ? 'کد تایید معتبر نیست.'
                    : 'لطفا یک شماره موبایل معتبر وارد نمایید.'
                }
            </span>
        </div>
    )
}

LoginModalInput.propTypes = {
    number: propTypes.string,
    setNumber: propTypes.func,
    isNumberInvalid: propTypes.bool,
    setIsNumberInvalid: propTypes.func,
    isOtpSent: propTypes.bool,
    inputOtp: propTypes.string,
    setInputOtp: propTypes.func,
    setIsOtpSent: propTypes.func,
    isOtpInvalid: propTypes.bool,
    setIsOtpInvalid: propTypes.func

}