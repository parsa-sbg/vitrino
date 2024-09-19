import propTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeProovider({ children }) {

    const storedTheme = localStorage.getItem('theme')
    const [isThemeSelectorModalShow, setIsThemeSelectorModalShow] = useState(false)
    const [selectedTheme, setSelectedTheme] = useState(storedTheme)


    useEffect(() => {
        if (selectedTheme == 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
        localStorage.setItem('theme', selectedTheme)
    }, [selectedTheme])

    return (
        <ThemeContext.Provider
            value={{
                isThemeSelectorModalShow,
                setIsThemeSelectorModalShow,
                setSelectedTheme,
                selectedTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProovider.propTypes = {
    children: propTypes.node
}