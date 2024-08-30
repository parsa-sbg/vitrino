import { useAuth } from "../../hooks/useAuth";
import SiteBtn from "../SiteBtn";
import propTypes, { string } from 'prop-types'

export default function LoginModalConfiermBtn({ setIsLoginWasSuccess, isOtpSent, setIsOtpSent, number, setIsNumberInvalid, inputOtp, setIsOtpInvalid }) {

    const { sendOtp, verifyOtp, setUserToken, setUserName } = useAuth()


    const btnClickHandler = async () => {
        const statusCode = await sendOtp(number)
        if (statusCode == 200) {
            setIsOtpSent(true)
        } else {
            setIsNumberInvalid(true)
        }
    }

    const btnClickHandlerForOtp = async () => {
        const data = await verifyOtp(number, inputOtp)

        if (data) {
            setUserToken(data.token)
            setUserName(data.user.username)
            setIsLoginWasSuccess(true)
        } else {
            setIsOtpInvalid(true)
        }

    }


    return (
        <div className=" border-t pt-3 mt-auto dark:border-gray-500">
            <div className="w-full mr-auto md:w-32 max-w-96 md:ml-0 mx-auto mt-auto">
                <SiteBtn onClick={isOtpSent ? btnClickHandlerForOtp : btnClickHandler} text={isOtpSent ? 'ورود' : 'تایید'} />
            </div>
        </div>
    )
}


LoginModalConfiermBtn.propTypes = {
    isOtpSent: propTypes.bool,
    setIsOtpSent: propTypes.func,
    number: string,
    setIsNumberInvalid: propTypes.func,
    inputOtp: propTypes.string,
    isOtpInvalid: propTypes.bool,
    setIsOtpInvalid: propTypes.func,
    setIsLoginWasSuccess: propTypes.func
}