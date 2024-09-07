import propTypes from 'prop-types'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function MobileHeader() {
    return (
        <div className={`md:border-b-2 fixed top-0 right-0 left-0 bg-white dark:bg-[#333]`}>
            <span className="container flex py-3 gap-4 items-center">
                <Link to={'/posts'}><FaArrowRight /></Link>
                <span className='pb-1'>افزودن آگهی</span>
            </span>
        </div>
    )
}

MobileHeader.propTypes = {
    
}