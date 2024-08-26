import MobileMyVitrinHeader from "../MobileMyVitrinHeader";

export default function UserRecentSeens() {
  return (
    <div className="fixed md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'بازدیدهای اخیر'} />

      <div className="bg-green-300 h-full">
        UserRecentSeens
      </div>

    </div>
  )
}
