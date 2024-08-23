import propTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { getAllCats } from '../services/api';

export const CategoryContext = createContext()

export default function CategoryProvider({ children }) {

    const [allCats, setAllCats] = useState([])
    const [selectedCatId, setSelectedCatId] = useState(null)

    useEffect(() => {
        getAllCats()
            .then(allCats => {
                setAllCats(allCats)
            })
    }, [])


    return (
        <CategoryContext.Provider
            value={{
                allCats,
                selectedCatId,
                setSelectedCatId
            }}>
            {children}
        </CategoryContext.Provider>
    )
}

CategoryProvider.propTypes = {
    children: propTypes.node
}