import { createContext, useCallback, useEffect, useState } from "react";
import propTypes from 'prop-types'
const baseUrl = import.meta.env.VITE_APP_BASE_URL;


export const LocationsContext = createContext()

export default function LocationsProvider({ children }) {

    const [isCitySelectorModalOpen, setIsCitySelectorModalOpen] = useState(false)
    const [cities, setCities] = useState([])
    const [provinces, setProvinces] = useState([])
    const [neighborhoods, setNeighborhoods] = useState([])
    const [selectedCities, setSelectedCities] = useState([{ id: 1, name: "اسکو" }])
    const [confirmedCities, setConfirmedCities] = useState([{ id: 1, name: "اسکو" }])


    useEffect(() => {

        fetch(`${baseUrl}/v1/location/`)
            .then(res => res.json())
            .then(response => {

                const cities = response.data.cities
                const provinces = response.data.provinces
                const neighborhoods = response.data.neighborhoods

                setCities(cities)
                setProvinces(provinces)
                setNeighborhoods(neighborhoods)
            })

    }, [])


    const openCitySelectorModal = () => {
        setIsCitySelectorModalOpen(true)
    }

    const closeCitySelectorModal = () => {
        setIsCitySelectorModalOpen(false)
    }

    const removeSelectedCity = (cityId) => {
        setSelectedCities(prev => prev.filter(city => city.id !== cityId))
    }

    const addSelectedCity = (cityId, cityName) => {
        setSelectedCities(prev => [...prev, { name: cityName, id: cityId }])
    }

    const cancelSelectedCities = () => {
        setSelectedCities(confirmedCities)
    }

    const confirmSelectedCities = () => {
        setConfirmedCities(selectedCities)
    }

    const isThisCitySelected = useCallback((cityId) => {
        const result = selectedCities.some(city => city.id == cityId)
        return result
    }, [selectedCities])

    const isThereAnyValidChange = () => {
        if (!selectedCities.length ) return false
        const result = Boolean(JSON.stringify(confirmedCities) !== JSON.stringify(selectedCities))
        return result
    }

    const removeAllSelectedCities = () => {
        setSelectedCities([])
    }

    return (
        <LocationsContext.Provider
            value={{
                isCitySelectorModalOpen,
                openCitySelectorModal,
                closeCitySelectorModal,
                setIsCitySelectorModalOpen,
                cities, provinces, neighborhoods,
                selectedCities,
                removeSelectedCity,
                addSelectedCity,
                confirmedCities,
                cancelSelectedCities,
                confirmSelectedCities,
                isThisCitySelected,
                isThereAnyValidChange,
                removeAllSelectedCities
            }}>
            {children}
        </LocationsContext.Provider>
    )
}
LocationsProvider.propTypes = {
    children: propTypes.node
}