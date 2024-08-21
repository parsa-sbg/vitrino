import { IoCloseSharp } from "react-icons/io5";
import propTypes from 'prop-types'
import { useLocations } from "../../../hooks/useLocations";

export default function SelectedCityBox({ cityName, cityId }) {

  const {removeSelectedCity} = useLocations()

  return (
    <div onClick={() => {removeSelectedCity(cityId)}} className='flex items-center justify-between gap-1 text-nowrap cursor-pointer w-full min-w-fit bg-blue-100 dark:bg-opacity-20 py-1 px-3 rounded-full border text-main font-semibold border-main'>
      <span className="h-fit pb-1">{cityName}</span>
      <IoCloseSharp />
    </div>
  )
}

SelectedCityBox.propTypes = {
  cityName: propTypes.string,
  cityId: propTypes.number
}