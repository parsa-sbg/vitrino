import Logo from "../Logo"
import HeaderCitySelectBtn from "./HeaderCitySelectBtn";
import HeaderCategories from "./HeaderCategories";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderMyVitrin from "./HeaderMyVitrin";
import SiteBtn from "../SiteBtn";


export default function Header() {
    return (
        <div className=" md:border-b-2">
            <div className="container flex py-3 gap-4 justify-between items-center">

                {/* header right */}
                <div className="w-full flex flex-row-reverse md:flex-row gap-0 md:gap-2 items-center">

                    <div className="hidden md:block w-52 border-l-2 pl-5"><Logo /></div>

                    <div> <HeaderCitySelectBtn /> </div>
                    

                    <div className="hidden md:block"> <HeaderCategories /> </div>

                    <div className="w-full md:max-w-96"> <HeaderSearchBar /> </div>

                </div>

                {/* header left */}
                <div className="gap-2 hidden md:flex">
                    <HeaderMyVitrin />
                    <div className="">
                        <SiteBtn text={'ثبت آگهی'} />
                    </div>
                </div>

            </div>
        </div>
    )
}
