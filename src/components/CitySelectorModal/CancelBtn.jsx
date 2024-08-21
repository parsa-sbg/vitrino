import { useLocations } from "../../hooks/useLocations"

export default function CancelBtn() {
    const {closeCitySelectorModal, cancelSelectedCities} = useLocations()

    const cancelBtnClickHandler = () => {
        closeCitySelectorModal()
        cancelSelectedCities()
    }

    return (
        <button onClick={cancelBtnClickHandler}
            className='w-full rounded-lg border border-[#333] dark:border-gray-500 py-2 px-6 font-bold bg-gray-100 dark:bg-[#222]'>
            انصراف
        </button>)
}