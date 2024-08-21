import { useContext } from "react";
import { LocationsContxt } from "../contexts/locationsContext";

const useLocations = () => useContext(LocationsContxt)

export {useLocations}