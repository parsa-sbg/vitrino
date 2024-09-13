import Logo from "../Logo"
import HeaderCitySelectBtn from "./HeaderCitySelectBtn";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderMyVitrin from "./HeaderMyVitrin";
import SiteBtn from "../SiteBtn";
import { memo } from "react";
import propTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom";
import { useLoginValidation } from "../../hooks/useLoginValidation";


const Header = memo(({ noInput }) => {

    const runWithLoginCheck = useLoginValidation()
    const navigate = useNavigate()


    return (
        <div className=" md:border-b-2 fixed top-0 z-50 right-0 left-0 bg-white dark:bg-[#222] md:dark:bg-[#242424]">
            <div className="container flex py-3 gap-4 justify-between items-center">

                {/* header right */}
                <div className="w-full flex flex-row-reverse md:flex-row gap-0 md:gap-2 items-center">

                    <div className="hidden md:block border-l-2 pl-5"><Logo link /></div>

                    <div> <HeaderCitySelectBtn /> </div>

                    <div className={`${noInput && 'hidden'} w-full md:max-w-96`}> <HeaderSearchBar /> </div>

                </div>

                {/* header left */}
                <div className="gap-2 hidden md:flex">
                    <HeaderMyVitrin />

                    <button onClick={() => {runWithLoginCheck(() => {navigate('/new')})}}>
                        <SiteBtn text={'ثبت آگهی'} />
                    </button>

                </div>

            </div>
        </div>
    )
})

Header.displayName = 'Header'

Header.propTypes = {
    noInput: propTypes.bool
}

export default Header