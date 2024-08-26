import { createContext, useCallback, useEffect, useState } from "react";
import propTypes from 'prop-types'
import { getAllLocations } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";



export const LocationsContext = createContext()


export default function LocationsProvider({ children }) {

    const storedConfirmedCities = localStorage.getItem('confirmedCities') ? JSON.parse(localStorage.getItem('confirmedCities')) : []

    const [isCitySelectorModalOpen, setIsCitySelectorModalOpen] = useState(false)
    const [cities, setCities] = useState([])
    const [provinces, setProvinces] = useState([])
    const [neighborhoods, setNeighborhoods] = useState([])
    const [selectedCities, setSelectedCities] = useState([])
    const [confirmedCities, setConfirmedCities] = useState(storedConfirmedCities)
    const [popularCities, setPopularCities] = useState([])


    const location = useLocation()
    const navigate = useNavigate()



    useEffect(() => {
        getAllLocations()
            .then(allLocations => {
                const { cities, provinces, neighborhoods, popularCities } = allLocations
                setCities(cities)
                setProvinces(provinces)
                setNeighborhoods(neighborhoods)
                setPopularCities(popularCities)
            })
        localStorage.getItem('confirmedCities') && setConfirmedCities(JSON.parse(localStorage.getItem('confirmedCities')))
    }, [])

    useEffect(() => {
        setSelectedCities(confirmedCities)
        localStorage.setItem('confirmedCities', JSON.stringify(confirmedCities))
    }, [confirmedCities])


    const openCitySelectorModal = useCallback(() => {
        setIsCitySelectorModalOpen(true)
    }, [])

    const closeCitySelectorModal = useCallback(() => {
        setIsCitySelectorModalOpen(false)
    }, [])

    const removeSelectedCity = useCallback((cityId) => {
        setSelectedCities(prev => prev.filter(city => city.id !== cityId))
    }, [])

    const addSelectedCity = useCallback((cityId, cityName) => {
        setSelectedCities(prev => [...prev, { name: cityName, id: cityId }])
    }, [])

    const cancelSelectedCities = useCallback(() => {
        setSelectedCities(confirmedCities)
    }, [confirmedCities])

    const confirmSelectedCities = useCallback(() => {
        setConfirmedCities(selectedCities)
        location.pathname !== '/posts' && navigate('/posts')
    }, [selectedCities, location.pathname, navigate])

    const isThisCitySelected = useCallback((cityId) => {
        const result = selectedCities.some(city => city.id == cityId)
        return result
    }, [selectedCities])

    const isThereAnyValidChange = useCallback(() => {
        if (!selectedCities.length) return false
        const result = Boolean(JSON.stringify(confirmedCities) !== JSON.stringify(selectedCities))
        return result
    }, [selectedCities, confirmedCities])

    const removeAllSelectedCities = useCallback(() => {
        setSelectedCities([])
    }, [])

    const setSingleCityAsConfirmed = useCallback((cityName, cityId) => {
        setConfirmedCities([{ name: cityName, id: cityId }])
    }, [])

    return (
        <LocationsContext.Provider
            value={{
                isCitySelectorModalOpen,
                openCitySelectorModal,
                closeCitySelectorModal,
                setIsCitySelectorModalOpen,
                cities, provinces, neighborhoods, popularCities,
                selectedCities,
                removeSelectedCity,
                addSelectedCity,
                confirmedCities,
                cancelSelectedCities,
                confirmSelectedCities,
                isThisCitySelected,
                isThereAnyValidChange,
                removeAllSelectedCities,
                setSingleCityAsConfirmed
            }}>
            {children}
        </LocationsContext.Provider>
    )
}
LocationsProvider.propTypes = {
    children: propTypes.node
}