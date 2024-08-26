import { Outlet } from "react-router-dom"
import BottomNav from "../components/BottomNav/BottomNav"
import Header from "../components/Header/Header"
import MobileMyVitrinHeader from "../components/MyVitrin/MobileMyVitrinHeader"
import CitySelectorModal from "../components/CitySelectorModal/CitySelectorModal"


export default function MyVitrin() {
    return (

        <>
            <div className="hidden md:block">
                <Header noInput />
            </div>

            <div className="md:hidden">
                <MobileMyVitrinHeader />
            </div>


            <div className="pt-[66.84px] pb-[61.41px] md:pb-0 md:t-4 min-h-screen container grid grid-cols-12 gap-4">

                <div className="mb-4 md:my-4 bg-blue-300 col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3 sticky top-20 overflow-y-scroll no-scrollbar flex-col gap-5">
                    listtt <br></br>
                    listtt <br></br>
                    listtt <br></br>
                    listtt <br></br>
                </div>

                <div className="hidden md:my-4 md:block bg-red-200 col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-9">
                    <Outlet />
                </div>

            </div>

            <CitySelectorModal />
            <BottomNav />
        </>
    )
}
