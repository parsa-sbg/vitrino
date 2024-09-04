import { createContext, useEffect, useState } from "react";
import propTypes from 'prop-types'
import { getUserNotes } from "../services/api";
import { useAuth } from "../hooks/useAuth";

export const NotesContext = createContext()

const NotesProvider = ({ children }) => {
    const [userNotes, setUserNotes] = useState([])

    const { userToken } = useAuth()


    useEffect(() => {
        getUserNotes(userToken)
            .then(data => {
                setUserNotes(data)
            })
    }, [])

    return (
        <NotesContext.Provider
            value={{
                userNotes
            }}>
            {children}
        </NotesContext.Provider>
    )
}

NotesProvider.propTypes = {
    children: propTypes.node
}

export default NotesProvider