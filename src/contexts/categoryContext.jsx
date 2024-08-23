import propTypes from 'prop-types'
import { createContext } from "react";

export const CategoryContext = createContext()

export default function CategoryProvider({ children }) {


    return (
        <CategoryContext.Provider
            value={'test value'}>
            {children}
        </CategoryContext.Provider>
    )
}

CategoryProvider.propTypes = {
    children: propTypes.node
}