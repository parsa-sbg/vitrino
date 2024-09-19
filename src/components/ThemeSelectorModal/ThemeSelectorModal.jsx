import { useTheme } from "../../hooks/useTheme"
import Cover from '../Cover'

export default function ThemeSelectorModal() {

    const { isThemeSelectorModalShow, selectedTheme, setSelectedTheme, setIsThemeSelectorModalShow } = useTheme()


    const onChangeHandler = e => {
        setSelectedTheme(e.target.value)
    }


    return (
        <div className={`${isThemeSelectorModalShow && '!opacity-100 !visible'} invisible opacity-0 transition-all duration-200 fixed z-40 top-0 bottom-0 right-0 left-0 w-screen h-screen z-[500] flex items-center justify-center`}>


            <div className="flex flex-col gap-4 z-50 bg-white dark:bg-[#242424] w-full h-full md:max-w-[490px] md:max-h-[300px] md:rounded-lg p-7">

                <div className='flex justify-between items-center'>
                    <span className='dark:text-white text-[#333] text-xl font-semibold'>تنظیمات ظاهر دیوار</span>
                </div>


                <span>حالت شب و روز</span>
                <div className='flex flex-col gap-2 justify-between'>

                    <div className="flex items-center me-4">
                        <input onChange={onChangeHandler} type="radio" value="dark" checked={selectedTheme == 'dark'} className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="text-lg ms-2 font-medium text-gray-900 dark:text-gray-300">تاریک</label>
                    </div>

                    <div className="flex items-center me-4">
                        <input onChange={onChangeHandler} type="radio" value="light" checked={selectedTheme == 'light'} className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="text-lg ms-2 font-medium text-gray-900 dark:text-gray-300">روشن</label>
                    </div>

                </div>

                <button onClick={() => {setIsThemeSelectorModalShow(false)}} className="mt-auto bg-main py-1 px-4 rounded-lg text-white">بستن</button>

            </div>

            <Cover onClickCallBack={() => {
                setIsThemeSelectorModalShow(false)
            }} />

        </div>
    )
}
