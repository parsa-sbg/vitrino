import propTypes from 'prop-types'


export default function DescSelector({ newPostDesc, setNewPostDesc }) {
    return (
        <div>
            <h5 className='text-lg mb-5 mt-10 font-semibold'>توضیحات آگهی</h5>
            <textarea
                onChange={e => { setNewPostDesc(e.target.value) }}
                value={newPostDesc}
                className="border-2 h-40 overflow-y-scroll custom-scrollbar cursor-pointer resize-none hover:border-[#333] dark:hover:border-white dark:focus:border-main outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 px-3 w-full" placeholder="توضیحات خود را بنویسید..." type="text" />
        </div>
    )
}

DescSelector.propTypes = {
    newPostDesc: propTypes.string,
    setNewPostDesc: propTypes.func
}

