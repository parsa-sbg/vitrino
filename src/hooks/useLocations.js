import { useContext } from "react";
import { LocationsContext } from "../contexts/locationsContext";

const useLocations = () => useContext(LocationsContext)

export {useLocations}