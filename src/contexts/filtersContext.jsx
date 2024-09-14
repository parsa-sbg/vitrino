import propTypes from 'prop-types'
import { createContext, useState } from "react";

export const FiltersContext = createContext()

export default function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({ price: { min: null, max: null }, withPhoto: false, search: '' })


    return (
        <FiltersContext.Provider
            value={{
                setFilters,
                filters
            }}>
            {children}
        </FiltersContext.Provider>
    )
}

FiltersProvider.propTypes = {
    children: propTypes.node
}