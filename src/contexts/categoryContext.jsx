import propTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;


export const CategoryContext = createContext()

export default function CategoryProvider({ children }) {

    const [allCats, setAllCats] = useState([])

    useEffect(() => {

        fetch(`${baseUrl}/v1/category`)
            .then(res => res.json())
            .then(response => {

                const allCats = response.data.categories
                setAllCats(allCats)

            }).catch(err => {
                console.error('Fetch error:', err);
            })

    }, [])
    return (
        <CategoryContext.Provider
            value={{
                allCats,
            }}>
            {children}
        </CategoryContext.Provider>
    )
}

CategoryProvider.propTypes = {
    children: propTypes.node
}