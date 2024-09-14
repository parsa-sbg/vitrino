import { useCallback, useContext, useEffect } from "react"
import { FiltersContext } from "../contexts/filtersContext"

const useFilters = () => {
    const { filters, setFilters } = useContext(FiltersContext)

    useEffect(() => {
        console.log(filters);
    }, [filters])

    const setFilter = useCallback((slug, data) => {
        setFilters((prev => {
            const newFilters = { ...prev }
            newFilters[slug] = data
            return newFilters
        }))
    }, [setFilters])
    



    return { setFilter }
}

export { useFilters }