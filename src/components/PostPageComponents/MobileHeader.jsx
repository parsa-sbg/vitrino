import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function MobileHeader() {
    return (
        <div className={`md:border-b-2 z-50 fixed top-0 right-0 left-0 bg-white dark:bg-[#333]`}>
            <span className="container flex py-3 gap-4 items-center">
                {<Link to={'/posts'}><FaArrowRight /></Link>}
            </span>
        </div>
    )
}
