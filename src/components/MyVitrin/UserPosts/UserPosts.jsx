import { useCallback, useEffect, useState } from "react";
import MobileMyVitrinHeader from "../MobileMyVitrinHeader";
import UserPostBox from "./UserPostBox";
import { getUserPosts } from "../../../services/api";
import { useAuth } from '../../../hooks/useAuth'
import NotFoundVector from "../../PostsPage/NotFoundVector";
import DeletePostModal from "./DeletePostModal";

export default function UserPosts() {

  const [userPosts, setUserPosts] = useState([])
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

  const getUserPostsfromServer = useCallback(() => {
    getUserPosts(userToken)
      .then(posts => {
        setUserPosts(posts)
      })
  }, [userToken])

  useEffect(() => {
    getUserPostsfromServer()
  }, [getUserPostsfromServer])


  if (!userPosts.length) return (
    <div className="col-span-12 md:col-span-8 overflow-y-scroll max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-100px)] -ml-4 pl-4 h-full custom-scrollbar lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">
      <div className="flex flex-col items-center justify-center w-full h-full col-span-12">
        <NotFoundVector />
        <div className="h-full text-center felx flex-col gap-2">
          <span className="block">هنوز پستی ندارید.</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed overflow-y-scroll h-full md:max-h-[calc(100vh-100px)] custom-scrollbar py-7 container md:max-w-full md:p-0 md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'آگهی‌های من'} />

      <div className=" grid md:pl-3 grid-cols-6 gap-3">
        {userPosts.map(post => (
          <UserPostBox showDeleteModal={showDeleteModal} post={post} key={post._id} />
        ))}
      </div>

      <DeletePostModal hideDeleteModal={hideDeleteModal} postId={deleteNoteId} isModalShow={isDeleteModalShow} getUserPostsfromServer={getUserPostsfromServer} />

    </div>
  )
}
