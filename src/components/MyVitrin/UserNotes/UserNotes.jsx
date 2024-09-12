import { useCallback, useEffect, useState } from "react";
import MobileMyVitrinHeader from "../MobileMyVitrinHeader";
import UserNoteBox from "./UserNoteBox";
import { getUserNotes } from "../../../services/api";
import { useAuth } from "../../../hooks/useAuth";
import DeleteNoteModal from "./DeleteNoteModal";
import NotFoundVector from "../../PostsPage/NotFoundVector";

export default function UserNotes() {

  const [userNotes, setUserNotes] = useState([])
  const [isDeleteModalShow, setIsDeleteModalShow] = useState(false)
  const [deleteNoteId, setDeleteNoteId] = useState('')
  const { userToken } = useAuth()

  const showDeleteModal = (noteId) => {
    setIsDeleteModalShow(true)
    setDeleteNoteId(noteId)
  }

  const hideDeleteModal = () => {
    setIsDeleteModalShow(false)
  }

  const getNotesFromServer = useCallback(() => {
    getUserNotes(userToken)
      .then(notes => {
        setUserNotes(notes)
      })
  }, [userToken])

  useEffect(() => {
    getNotesFromServer()
  }, [getNotesFromServer])


  return (
    <div className="fixed overflow-y-scroll overflow-x-hidden h-full md:max-h-[calc(100vh-100px)] custom-scrollbar py-7 container md:max-w-full md:p-0 md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'یادداشت ها'} />

      {
        userNotes.length
          ? (
            <div className=" md:pl-3 grid grid-cols-6 gap-3">
              {userNotes.map(data => (
                <UserNoteBox showDeleteModal={showDeleteModal} data={data} key={data._id} />
              ))}
            </div>
          )

          : (
            <div className="col-span-12 md:col-span-8 overflow-y-scroll max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-100px)] -ml-4 pl-4 h-full custom-scrollbar lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">
              <div className="flex flex-col items-center justify-center w-full h-full col-span-12">
                <NotFoundVector />
                <div className="h-full text-center felx flex-col gap-2">
                  <span className="block">هنوز یادداشتی ندارید.</span>
                </div>
              </div>
            </div>
          )
      }
      <div className=" md:pl-3 grid grid-cols-6 gap-3">
        {userNotes.map(data => (
          <UserNoteBox showDeleteModal={showDeleteModal} data={data} key={data._id} />
        ))}
      </div>

      <DeleteNoteModal getNotesFromServer={getNotesFromServer} noteId={deleteNoteId} hideDeleteModal={hideDeleteModal} isModalShow={isDeleteModalShow} />

    </div>
  )
}
