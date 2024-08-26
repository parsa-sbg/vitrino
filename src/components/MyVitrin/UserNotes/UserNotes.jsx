import MobileMyVitrinHeader from "../MobileMyVitrinHeader";

export default function UserNotes() {
  return (
    <div className="fixed md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'یادداشت ها'} />

      <div className="bg-yellow-300 h-full">
        UserNotes
      </div>

    </div>
  )
}
