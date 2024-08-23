import BottomNav from "../components/BottomNav/BottomNav"
import Header from "../components/Header/Header"
import PostsPageCatSelector from "../components/PostsPage/PostsPageCatSelector"
import FiltersList from "../components/Filters/FiltersList"
import { useLocations } from "../hooks/useLocations"
import CitySelectorModal from "../components/CitySelectorModal/CitySelectorModal"
import { memo } from "react"
import PostsList from "../components/PostsPage/PostsList"


export default memo(function Posts() {

    const { isCitySelectorModalOpen } = useLocations()



    return (
        <>
            <Header />

            <div className="pt-[66.84px] pb-[61.41px] md:pb-0 mt-1 md:mt-4 min-h-screen container grid grid-cols-12 gap-4">

                <div className="hidden md:flex md:col-span-4 lg:col-span-3 xl:col-span-3 sticky top-20 overflow-y-scroll h-[calc(100vh-100px)] no-scrollbar p-3 flex-col gap-5">
                    <PostsPageCatSelector />
                    <FiltersList />
                </div>

                <PostsList />

                {isCitySelectorModalOpen && <CitySelectorModal />}

            </div>

            <BottomNav />
        </>
    )
})
