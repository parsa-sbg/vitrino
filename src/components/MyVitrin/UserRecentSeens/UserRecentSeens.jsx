import MobileMyVitrinHeader from "../MobileMyVitrinHeader";
import RecentSeenBox from "./RecentSeenBox";

export default function UserRecentSeens() {
  return (
    <div className="fixed py-7 container md:max-w-full md:p-0 h-full md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'بازدیدهای اخیر'} />

      <div className=" h-fit grid grid-cols-6 gap-3">
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
      </div>

    </div>
  )
}
