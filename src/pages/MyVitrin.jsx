import { Outlet } from "react-router-dom"
import BottomNav from "../components/BottomNav/BottomNav"
import Header from "../components/Header/Header"


export default function MyVitrin() {
    return (

        <>
            <div className="hidden md:block">
                <Header noInput/>
            </div>

            <div className="md:hidden">
                <div className=" md:border-b-2 fixed top-0 z-50 right-0 left-0 bg-white dark:bg-[#333]">
                    <span className="container flex py-3 gap-4 justify-between items-center">
                        ویترین من
                    </span>
                </div>
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

            <BottomNav />
        </>
    )
}
