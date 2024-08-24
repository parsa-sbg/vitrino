import { memo } from "react";
import PostBox from "./PostBox";
import usePosts from '../../hooks/usePosts'


export default memo(function PostsList() {

    const { posts, isLoading } = usePosts()
    console.log(posts);

    return (
        <div className="col-span-12 md:col-span-8 lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">
            {posts.map(post => (
                <div
                    key={post._id}
                    className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3">
                    <PostBox title={post.title} price={post.price} imagePath={post?.pics[0]?.path} cityName={post.city.name}/>
                </div>
            ))}
        </div>)
})



{/* <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div> */}