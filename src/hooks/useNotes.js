import { useContext } from "react";
import { notesContext } from "../contexts/notesContext"; 
const useNotes = () => useContext(notesContext)

export {useNotes}