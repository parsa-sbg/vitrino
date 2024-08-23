import PostBox from "./PostBox"


export default function PostsList() {
    return (
        <div className="col-span-12 md:col-span-8 lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">
            <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
            <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
            <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
            <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
            <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
            <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
            <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
            <div className="h-40 col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"><PostBox /></div>
        </div>)
}