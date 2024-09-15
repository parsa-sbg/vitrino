import { useContext } from "react"
import { FiltersContext } from "../contexts/filtersContext"

const useFilters = () => useContext(FiltersContext)

export { useFilters }