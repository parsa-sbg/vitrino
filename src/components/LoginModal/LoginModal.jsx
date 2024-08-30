import { useAuth } from "../../hooks/useAuth";
import LoginModalCover from "./LoginModalCover"
import LoginModalInput from "./LoginModalInput";
import LoginModalRulesText from "./LoginModalRulesText";
import { useState } from "react";
import LoginModalConfiermBtn from "./LoginModalConfiermBtn";
import LoginModalStepTitle from "./LoginModalStepTitle";
import LoginModalStepDesc from "./LoginModalStepDesc";
import LoginModalHeader from "./LoginModalHeader/LoginModalHeader";
import SuccessLoginAlert from "./SuccessLoginAlert";


export default function LoginModal() {

    const [number, setNumber] = useState('')
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [isNumberInvalid, setIsNumberInvalid] = useState(false)
    const [isOtpInvalid, setIsOtpInvalid] = useState(false)
    const [inputOtp, setInputOtp] = useState('')
    const [lsLoginWasSuccess, setIsLoginWasSuccess] = useState(false)
    const { isLoginModalShow } = useAuth()
    const { hideLoginModal } = useAuth()


    const closeAndResetModal = () => {
        hideLoginModal()
        setNumber('')
        setIsOtpSent(false)
        setIsNumberInvalid(false)
        setIsOtpInvalid(false)
        setInputOtp('')
    }


    return (
        <div className={`${isLoginModalShow && '!opacity-100 !visible'} invisible opacity-0 transition-all duration-200 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-50 flex items-center justify-center`}>

            {!lsLoginWasSuccess ? (
                <div className="flex flex-col gap-4 z-50 bg-white dark:bg-[#242424] w-full h-full md:h-auto md:max-w-[490px] md:max-h-[590px] md:rounded-lg p-7">

                    <LoginModalHeader closeAndResetModal={closeAndResetModal} />

                    <LoginModalStepTitle isOtpSent={isOtpSent} />
                    <LoginModalStepDesc isOtpSent={isOtpSent} number={number} />

                    <LoginModalInput isOtpInvalid={isOtpInvalid} setIsOtpInvalid={setIsOtpInvalid} setIsOtpSent={setIsOtpSent} setInputOtp={setInputOtp} inputOtp={inputOtp} isOtpSent={isOtpSent} setIsNumberInvalid={setIsNumberInvalid} isNumberInvalid={isNumberInvalid} number={number} setNumber={setNumber} />

                    <LoginModalRulesText isOtpSent={isOtpSent} />

                    <LoginModalConfiermBtn setIsLoginWasSuccess={setIsLoginWasSuccess} inputOtp={inputOtp} setIsOtpInvalid={setIsOtpInvalid} setIsNumberInvalid={setIsNumberInvalid} number={number} isOtpSent={isOtpSent} setIsOtpSent={setIsOtpSent} />
                </div>)

                : <SuccessLoginAlert closeAndResetModal={closeAndResetModal} />
            }



            <LoginModalCover closeAndResetModal={closeAndResetModal} />

        </div>
    )
}
