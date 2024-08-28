import CloseLoginModalBtn from "./CloseLoginModalBtn";
import LoginModalTitle from "./LoginModalTitle";


export default function LoginModalHeader() {
    return (
        <div className='flex justify-between items-center border-b dark:border-gray-500 pb-4 mb-4'>
            <LoginModalTitle />
            <CloseLoginModalBtn />
        </div>)
}
