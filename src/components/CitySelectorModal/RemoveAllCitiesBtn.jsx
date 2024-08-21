import { useLocations } from "../../hooks/useLocations"

export default function RemoveAllCitiesBtn() {

    const { removeAllSelectedCities, selectedCities } = useLocations()

    return (
        <button
            onClick={removeAllSelectedCities}
            className={`${!selectedCities.length && 'hidden' } text-xs text-main font-medium transition-colors duration-300 rounded-full hover:bg-blue-100 dark:hover:bg-opacity-20 py-1 px-3`}>
            حذف همه
        </button>
    )
}
