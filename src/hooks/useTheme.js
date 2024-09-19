import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";


export const useTheme = () => useContext(ThemeContext)
