import Logo from "../Logo"
import { SlLocationPin } from "react-icons/sl";
import HeaderCategories from "./HeaderCategories";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderMyVitrin from "./HeaderMyVitrin";
import SiteBtn from "../SiteBtn";


export default function Header() {
    return (
        <div className="border-b-2">
            <div className="container flex py-3 gap-4 justify-between items-center">

                <div className="flex gap-2 items-center">
                    <div className="w-52 border-l-2 pl-5"><Logo /></div>

                    <button className="py-2 px-4 text-nowrap gap-2 rounded-lg flex items-center h-full transition-colors duration-300 hover:bg-gray-100">
                        <SlLocationPin />
                        ۱۳ شهر
                    </button>

                    <HeaderCategories />

                    <HeaderSearchBar />
                </div>

                <div className="flex gap-2">
                    <HeaderMyVitrin />
                    <div className="">
                        <SiteBtn text={'ثبت آگهی'} />
                    </div>
                </div>

            </div>
        </div>
    )
}
