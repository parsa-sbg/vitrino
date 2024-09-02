import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "../components/Header/Header";
import MobileHeader from "../components/PostPageComponents/MobileHeader";

export default function Post() {
    const location = useLocation()

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <div className="min-h-screen container pt-[66.84px] md:pt-[90px]">

            <div className="hidden md:block"><Header /></div>
            <div className="md:hidden"><MobileHeader /></div>

            <div className="sm:px-10 md:px-0 lg:px-20 xl:px-32 grid grid-cols-2 gap-4 md:gap-7 lg:gap-10 xl:gap-16">
                <div className="col-span-2 md:col-span-1 bg-red-500 h-screen"></div>
                <div className="col-span-2 md:col-span-1 bg-red-500 h-screen"></div>
            </div>

        </div>

        
    )
}
