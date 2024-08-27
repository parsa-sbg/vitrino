import { memo } from "react";
import PostBox from "./PostBox";
import usePosts from '../../hooks/usePosts'


export default memo(function PostsList() {

  const { posts, isLoading } = usePosts()

  const generateSkeletonLoader = () => {
    const SkeleteLoaderCount = Array.from({ length: 10 })

    return SkeleteLoaderCount.map(( _, index) => (
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


  return (

    <div className="col-span-12 md:col-span-8 overflow-y-scroll max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-100px)] -ml-4 pl-4 h-fit custom-scrollbar lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">

      {isLoading && generateSkeletonLoader()}

      {!isLoading && posts.map(post => (
        <div
          key={post._id}
          className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3">
          <PostBox title={post.title} price={post.price} imagePath={post?.pics[0]?.path} cityName={post.city.name} />
        </div>
      ))}
    </div>)

})
