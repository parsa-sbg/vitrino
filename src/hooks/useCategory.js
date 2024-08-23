import { useContext } from "react";
import { CategoryContext } from "../contexts/categoryContext";

const useCategory= () => useContext(CategoryContext)

export {useCategory}