import propTypes from 'prop-types'


export default function TitleSelector({ newPostTitle, setNewPostTitle }) {

    return (
        <div>
            <h5 className='text-lg mb-5 mt-10 font-semibold'>عنوان آگهی</h5>
            <input
                onChange={e => { setNewPostTitle(e.target.value) }}
                value={newPostTitle}
                className="border-2 cursor-pointer hover:border-[#333] dark:hover:border-white dark:focus:border-main outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 px-3 w-full" placeholder="عنوان آگهی..." type="text" />
        </div>
    )
}

TitleSelector.propTypes = {
    newPostTitle: propTypes.string,
    setNewPostTitle: propTypes.func
}
