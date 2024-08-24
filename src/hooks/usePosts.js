import { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import { useLocations } from "./useLocations";


export default function usePosts() {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const { confirmedCities } = useLocations()


    useEffect( () => {
        setIsLoading(true)
        getPosts(confirmedCities)
            .then(posts => {                
                setPosts(posts)
                setIsLoading(false)
            })
    }, [confirmedCities])

    return { posts, isLoading }
}