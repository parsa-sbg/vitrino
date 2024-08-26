import MobileMyVitrinHeader from "../MobileMyVitrinHeader";

export default function UserBookmarks() {
  return (
    <div className="fixed md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'نشان ها'} />

      <div className="bg-blue-300 h-full">
        UserBookmarks
      </div>

    </div>
  )
}
