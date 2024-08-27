import MobileMyVitrinHeader from "../MobileMyVitrinHeader";
import UserBookmarkBox from "./UserBookmarkBox";

export default function UserBookmarks() {
  return (
    <div className="fixed overflow-y-scroll h-full md:max-h-[calc(100vh-100px)] custom-scrollbar py-7 container md:max-w-full md:p-0 md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'نشان ها'} />

      <div className="grid grid-cols-6 md:pl-3 gap-3">
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
        <UserBookmarkBox />
      </div>

    </div>
  )
}
