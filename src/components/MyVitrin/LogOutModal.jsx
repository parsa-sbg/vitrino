import propTypes from 'prop-types'


export default function LogOutModal({ isLogOutModalShow, hideLoginModa, logOut }) {


  return (
    <div className={`${isLogOutModalShow && '!opacity-100 !visible'} invisible opacity-0 transition-all duration-200 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-50 flex items-center justify-center`}>


      <div className="shadow-lg shadow-white mx-6 flex flex-col gap-7 z-50 bg-white dark:bg-[#242424] w-full h-full h-auto max-w-[490px] max-h-[590px] rounded-lg p-7">
        <h4 className='text-[#333] dark:text-white'>خروج از حساب کاربری </h4>
        <div className='flex justify-between gap-5'>
          <button onClick={hideLoginModa} className='w-full dark:border-gray-500 transition-colors hover:border-black dark:hover:border-white border rounded-lg py-1.5 px-5'>انصراف</button>
          <button onClick={logOut} className='dark:border-gray-500 transition-colors hover:border-red-600 w-full border rounded-lg py-1.5 px-5'>تایید</button>
        </div>
      </div>

    </div>
  )
}

LogOutModal.propTypes = {
  isLogOutModalShow: propTypes.bool,
  hideLoginModa: propTypes.func,
  logOut: propTypes.func
}
