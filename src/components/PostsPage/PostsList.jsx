import { memo, useCallback, useEffect, useRef } from "react";
import PostBox from "./PostBox";
import usePosts from '../../hooks/usePosts'
import NotFoundVector from "./NotFoundVector";
import { useLocations } from "../../hooks/useLocations";
import { useCategory } from "../../hooks/useCategory";
import { useFilters } from "../../hooks/useFilters";


export default memo(function PostsList() {

  const {  isLoading, getMorePosts, getMorePostsIsLoading, isAllPostsWereShown } = usePosts()
  const { confirmedCities } = useLocations()
  const { selectedCatId } = useCategory()
  const currentScrollHeigthRef = useRef(0)
  const postsListRef = useRef(null)


  const { filtredPosts } = useFilters()

  useEffect(() => {
    if (filtredPosts.length < 10) {
      getMorePosts()
    }
  }, [filtredPosts, getMorePosts])


  const generateSkeletonLoader = () => {
    const SkeleteLoaderCount = Array.from({ length: 10 })

    return SkeleteLoaderCount.map((_, index) => (
      <div key={index} className="h-40 animate-pulse col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3">
        <div className="block w-full h-full p-3 border-b sm:rounded-lg md:rounded-none lg:rounded-lg sm:border md:border-x-0 md:border-t-0 lg:border dark:border-gray-500 md:border-b">
          <div className="h-full flex justify-between gap-5">
            <div className="flex flex-col justify-between">
              <div className="bg-slate-500 min-h-5 w-32 sm:w-20 rounded-lg mb-2"></div>
              <div className="text-sm">
                <div className="bg-slate-500 min-h-5 w-10 rounded-lg mb-2"></div>
                <div className="bg-slate-500 min-h-5 w-20 sm:w-14 md:w-20 rounded-lg mb-2"></div>
                <div className="bg-slate-500 min-h-5 w-40 sm:w-20 md:w-40 rounded-lg mb-2"></div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-slate-500 min-w-[133.15px]">
            </div>

          </div>

        </div>
      </div>
    ))
  }

  useEffect(() => {
    postsListRef.current && postsListRef.current.scrollTo(0, 0)
  }, [confirmedCities, selectedCatId])

  useEffect(() => {

    const savedScrollTop = localStorage.getItem('scrollHeight')
    if (postsListRef.current) {
      postsListRef.current.scrollTo(0, savedScrollTop)
    }

    return () => {
      localStorage.setItem('scrollHeight', currentScrollHeigthRef.current)
    }
  }, [])



  const onScrollHandler = useCallback((e) => {
    const currentHegith = e.target.scrollTop
    const maxHeigth = e.target.scrollHeight - e.target.offsetHeight

    currentScrollHeigthRef.current = currentHegith

    if (currentHegith >= maxHeigth - 60 && !isAllPostsWereShown) {
      getMorePosts()
    }
  }, [getMorePosts, isAllPostsWereShown])

  if (!filtredPosts?.length) return (
    <div className="col-span-12 md:col-span-8 overflow-y-scroll max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-100px)] -ml-4 pl-4 h-full custom-scrollbar lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">
      <div className="flex flex-col items-center justify-center w-full h-full col-span-12">
        <NotFoundVector />
        <div className="h-full text-center felx flex-col gap-2">
          <span className="block">نتیجه‌ای برای جستجوی شما پیدا نشد.</span>
          <span className="block">پیشنهاد می‌کنیم که دسته، شهر و فیلترهای انتخابی خود را بازبینی کنید.</span>
        </div>
      </div>
    </div>
  )

  return (

    <div
      ref={postsListRef}
      onScroll={onScrollHandler}
      className="col-span-12 md:col-span-8 overflow-y-scroll max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-100px)] -ml-4 pl-4 h-fit custom-scrollbar lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">

      {isLoading && generateSkeletonLoader()}

      {!isLoading && filtredPosts.map(post => (
        <div
          key={post._id}
          className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3">
          <PostBox postId={post._id} title={post.title} price={post.price} imagePath={post?.pics[0]?.path} cityName={post.city.name} />
        </div>
      ))}

      {(getMorePostsIsLoading &&
        <div className="flex items-center justify-center h-40 col-span-6">
          <div className="animate-spin rounded-full border-4 border-gray-500 w-10 h-10 border-r-main "></div>
        </div>
      )}

      {isAllPostsWereShown &&
        <div className="flex items-center justify-center h-40 col-span-6">
          <span className="text-yellow-700 font-semibold text-lg">تمامی پست ها نمایش داده شد.</span>
        </div>
      }
    </div>)

})
