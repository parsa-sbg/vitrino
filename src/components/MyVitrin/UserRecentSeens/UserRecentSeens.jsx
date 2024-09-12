import { useRecentSeens } from "../../../hooks/useRecentSeens";
import MobileMyVitrinHeader from "../MobileMyVitrinHeader";
import RecentSeenBox from "./RecentSeenBox";
import NotFoundVector from "../../PostsPage/NotFoundVector";


export default function UserRecentSeens() {


  const { recentSeens } = useRecentSeens()


  return (
    <div className="fixed overflow-y-scroll h-full md:max-h-[calc(100vh-100px)] custom-scrollbar py-7 container md:max-w-full md:p-0 md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'بازدیدهای اخیر'} />


      {
        recentSeens.length
          ? (
            <div className=" grid md:pl-3 grid-cols-6 gap-3">
              {[...recentSeens].reverse().map(item => (
                <RecentSeenBox recentSeenObj={item} key={item.date + item.postId} />
              ))}
            </div>
          )
          : (
            <div className="col-span-12 md:col-span-8 overflow-y-scroll max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-100px)] -ml-4 pl-4 h-full custom-scrollbar lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">
              <div className="flex flex-col items-center justify-center w-full h-full col-span-12">
                <NotFoundVector />
                <div className="h-full text-center felx flex-col gap-2">
                  <span className="block">هنوز بازیدی نداشته اید.</span>
                </div>
              </div>
            </div>
          )
      }

    </div>
  )
}
