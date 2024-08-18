import BottomNav from "../components/BottomNav/BottomNav"
import Header from "../components/Header/Header"
import PostBox from "../components/PostsPage/PostBox"
import PostsPageCatSelector from "../components/PostsPage/PostsPageCatSelector"



export default function Posts() {
    return (
        <>
            <Header />

            <div className="pt-[66.84px] pb-[61.41px] md:pb-0 mt-1 md:mt-4 min-h-screen container grid grid-cols-12 gap-4">

                <div className="hidden md:flex md:col-span-4 lg:col-span-3 xl:col-span-3 sticky top-20 overflow-y-scroll h-[calc(100vh-100px)] no-scrollbar p-3 flex-col gap-5">
                    <PostsPageCatSelector />
                </div>

                <div className="col-span-12 md:col-span-8 lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">
                    <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
                    <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
                    <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
                    <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
                    <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
                    <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
                    <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
                    <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
                </div>


            </div>

            <BottomNav />
        </>
    )
}
