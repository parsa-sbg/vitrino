import MobileMyVitrinHeader from "../MobileMyVitrinHeader";
import RecentSeenBox from "./RecentSeenBox";

export default function UserRecentSeens() {
  return (
    <div className="fixed overflow-y-scroll h-full md:max-h-[calc(100vh-100px)] custom-scrollbar py-7 container md:max-w-full md:p-0 md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'بازدیدهای اخیر'} />

      <div className=" grid md:pl-3 grid-cols-6 gap-3">
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
        <RecentSeenBox />
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
