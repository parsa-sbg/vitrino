import propTypes from 'prop-types'
import PostsPageCatSelector from '../PostsPage/PostsPageCatSelector'
import MobileCatSelectorModalHeader from './MobileCatSelectorModalHeader'


export default function MobileCatSelectorModal({ isMobileCatSelectorModalShow, setIsMobileCatSelectorModalShow }) {
    return (
        <div className={`${isMobileCatSelectorModalShow && '!opacity-100 !visible'} invisible opacity-0 transition-all duration-200 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-[80000] flex items-center justify-center`}>


            <div className="flex flex-col gap-4 bg-white dark:bg-[#242424] w-full h-full p-7">
                <MobileCatSelectorModalHeader />
                <PostsPageCatSelector />

                <div className='mt-auto w-full flex justify-center'>
                    <button onClick={() => {
                        setIsMobileCatSelectorModalShow(false)
                    }}
                        className='bg-green-700 text-white w-full mx-2 rounded-lg py-1.5 px-5 max-w-72'>
                        تایید
                    </button>
                </div>

            </div>

        </div>)
}

MobileCatSelectorModal.propTypes = {
    isMobileCatSelectorModalShow: propTypes.bool,
    setIsMobileCatSelectorModalShow: propTypes.func
}