import { useAuth } from "../../hooks/useAuth";
import LoginModalCover from "./LoginModalCover"
import LoginModalInput from "./LoginModalInput";
import LoginModalRulesText from "./LoginModalRulesText";
import { useState } from "react";
import LoginModalConfiermBtn from "./LoginModalConfiermBtn";
import LoginModalStepTitle from "./LoginModalStepTitle";
import LoginModalStepDesc from "./LoginModalStepDesc";
import LoginModalHeader from "./LoginModalHeader/LoginModalHeader";


export default function LoginModal() {

    const [number, setNumber] = useState('')
    const { isLoginModalShow } = useAuth()


    return (
        <div className={`${isLoginModalShow && '!opacity-100 !visible'} invisible opacity-0 transition-all duration-200 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-50 flex items-center justify-center`}>


            <div className="flex flex-col gap-4 z-50 bg-white dark:bg-[#242424] w-full h-full md:h-auto md:max-w-[490px] md:max-h-[590px] md:rounded-lg p-7">

                <LoginModalHeader />

                <LoginModalStepTitle />
                <LoginModalStepDesc />

                <LoginModalInput number={number} setNumber={setNumber} />

                <LoginModalRulesText />

                <LoginModalConfiermBtn />

            </div>


            <LoginModalCover />

        </div>
    )
}
