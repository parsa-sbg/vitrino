import propTypes from 'prop-types'
import Cover from '../../Cover'
import { removeBookMark } from '../../../services/api';
import { useAuth } from '../../../hooks/useAuth';
import { useCallback } from 'react';


export default function DeleteBookMarkModal({ isModalShow, hideDeleteModal, bookMarkId, getDataFromServer }) {
    const { userToken } = useAuth()

    const deleteBookMarkHandler = useCallback(async () => {
        await removeBookMark(bookMarkId, userToken)
        hideDeleteModal()
        getDataFromServer()
    }, [bookMarkId, userToken, hideDeleteModal, getDataFromServer])


    return (
        <div className={`${isModalShow && '!opacity-100 !visible'} invisible opacity-0 transition-all duration-200 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-50 flex items-center justify-center`}>


            <div className="mx-6 flex flex-col gap-7 z-50 bg-white dark:bg-[#242424] w-full max-w-[490px] max-h-[590px] rounded-lg p-7">
                <h4 className='text-[#333] dark:text-white'>از حذف این یادداشت مطمئن هستید؟</h4>
                <div className='flex justify-between gap-5'>
                    <button onClick={hideDeleteModal} className='w-full dark:border-gray-500 transition-colors hover:border-black dark:hover:border-white border rounded-lg py-1.5 px-5'>انصراف</button>
                    <button onClick={deleteBookMarkHandler} className='dark:border-gray-500 transition-colors hover:border-red-600 w-full border rounded-lg py-1.5 px-5'>تایید</button>
                </div>
            </div>

            <Cover onClickCallBack={hideDeleteModal} />

        </div>
    )
}

DeleteBookMarkModal.propTypes = {
    isModalShow: propTypes.bool,
    hideDeleteModal: propTypes.func,
    bookMarkId: propTypes.string,
    getDataFromServer: propTypes.func
}
