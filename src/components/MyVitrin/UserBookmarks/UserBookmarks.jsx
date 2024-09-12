import { useCallback, useEffect, useState } from "react";
import MobileMyVitrinHeader from "../MobileMyVitrinHeader";
import UserBookmarkBox from "./UserBookmarkBox";
import { getUserBookMarks } from "../../../services/api";
import { useAuth } from '../../../hooks/useAuth'
import NotFoundVector from "../../PostsPage/NotFoundVector";
import DeleteBookMarkModal from "./deleteBookMarkModal";

export default function UserBookmarks() {

  const [userBookMarks, setUserBookMarks] = useState([])
  const [isModalShow, setIsModalShow] = useState(false)
  const [deleteBookMarkId, setDeleteBookMarkId] = useState('')
  const { userToken } = useAuth()


  const getDataFromServer = useCallback(() => {
    getUserBookMarks(userToken)
      .then(data => {
        console.log(data);
        setUserBookMarks(data)
      })
  }, [userToken])

  useEffect(() => {
    getDataFromServer()
  }, [getDataFromServer])

  const showModal = (bookMarkId) => {
    setDeleteBookMarkId(bookMarkId)
    setIsModalShow(true)
  }

  const hideModal = () => {
    setIsModalShow(false)
  }


  return (
    <div className="fixed overflow-y-scroll overflow-x-hidden h-full md:max-h-[calc(100vh-100px)] custom-scrollbar py-7 container md:max-w-full md:p-0 md:static right-0 left-0 top-[48px] bottom-[60px] visible">
      <MobileMyVitrinHeader backButton title={'نشان ها'} />

      {
        userBookMarks.length
          ? (
            <div className="grid grid-cols-6 md:pl-3 gap-3">
              {userBookMarks.map(item => (
                <UserBookmarkBox showModal={showModal} bookMarkItem={item} key={item._id} />
              ))}
            </div>
          )
          : (
            <div className="col-span-12 md:col-span-8 overflow-y-scroll max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-100px)] -ml-4 pl-4 h-full custom-scrollbar lg:col-span-9 grid xl:col-span-9 grid-cols-6 sm:gap-4 md:gap-0 lg:gap-4">
              <div className="flex flex-col items-center justify-center w-full h-full col-span-12">
                <NotFoundVector />
                <div className="h-full text-center felx flex-col gap-2">
                  <span className="block">هنوز نشانی ندارید.</span>
                </div>
              </div>
            </div>
          )
      }


      <DeleteBookMarkModal getDataFromServer={getDataFromServer} bookMarkId={deleteBookMarkId} hideDeleteModal={hideModal} isModalShow={isModalShow} />

    </div>
  )
}
