import BottomNav from "../components/BottomNav/BottomNav"
import Header from "../components/Header/Header"
import PostsPageCatSelector from "../components/PostsPage/PostsPageCatSelector"
import FiltersList from "../components/Filters/FiltersList"
import { useLocations } from "../hooks/useLocations"
import CitySelectorModal from "../components/CitySelectorModal/CitySelectorModal"
import { memo, useEffect } from "react"
import PostsList from "../components/PostsPage/PostsList"
import { useNavigate } from "react-router-dom"


export default memo(function Posts() {

    const {  confirmedCities } = useLocations()
    const navigate = useNavigate()

    useEffect(() => {
        if (!confirmedCities.length) {
            navigate("/")
        }
        
    }, [confirmedCities, navigate])

    return (
        <>
            <Header />

            <div className="pt-[66.84px] pb-[61.41px] md:pb-0 md:mt-4 min-h-screen container grid grid-cols-12 gap-4">

                <div className="hidden md:flex md:col-span-4 lg:col-span-3 xl:col-span-3 sticky top-20 overflow-y-scroll h-[calc(100vh-100px)] no-scrollbar p-3 flex-col gap-5">
                    <PostsPageCatSelector />
                    <FiltersList />
                </div>

                <PostsList />

                <CitySelectorModal />

            </div>

            <BottomNav />
        </>
    )
})
