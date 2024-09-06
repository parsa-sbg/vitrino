import { useCallback, useEffect, useState } from "react"


const useRecentSeens = () => {
    const storageRecentSeens = JSON.parse(localStorage.getItem('recentSeens')) || []
    const [recentSeens, setRecentSeens] = useState(storageRecentSeens)

    useEffect(() => {
        localStorage.setItem('recentSeens', JSON.stringify(recentSeens))
    }, [recentSeens])

    const addRecentSeen = useCallback((postTitle, postId, postImageSrc, date) => { 
        if (recentSeens.length > 10) {
            recentSeens.pop()
        }       
        recentSeens[recentSeens.length - 1]?.postId !== postId && setRecentSeens(prev => [...prev, {
            postId,
            postTitle,
            postImageSrc,
            date
        }])
    }, [])

    return { recentSeens, addRecentSeen }
}

export { useRecentSeens }