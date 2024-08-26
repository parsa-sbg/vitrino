import MobileMyVitrinHeader from "../MobileMyVitrinHeader";

export default function UserPosts() {
  return (
    <div className="fixed md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'آگهی‌های من'} />

      <div className="bg-green-300 h-full">
        UserPosts
      </div>

    </div>
  )
}
