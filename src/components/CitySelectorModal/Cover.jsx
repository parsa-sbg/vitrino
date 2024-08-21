import { useLocations } from "../../hooks/useLocations"


export default function Cover() {

  const { closeCitySelectorModal, cancelSelectedCities } = useLocations()

  const coverClickHandler = () => {
    closeCitySelectorModal()
    cancelSelectedCities()
  }

  return (
    <div onClick={coverClickHandler} className="fixed right-0 left-0 bottom-0 top-0 w-full h-full dark:bg-white bg-black opacity-50"></div>
  )
}
