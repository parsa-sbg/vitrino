import { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import { useLocations } from "./useLocations";
import {useCategory} from "./useCategory"


export default function usePosts() {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const { confirmedCities } = useLocations()
    const {selectedCatId} = useCategory()
    


    useEffect( () => {
        setIsLoading(true)
        getPosts(confirmedCities, selectedCatId)
            .then(posts => {                
                setPosts(posts)
                setIsLoading(false)
            })
    }, [confirmedCities, selectedCatId])

    return { posts, isLoading }
}