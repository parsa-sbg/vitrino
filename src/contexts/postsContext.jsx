import propTypes from 'prop-types'
import { createContext, useCallback, useEffect, useState } from "react";
import { getPosts } from '../services/api';
import { useCategory } from '../hooks/useCategory';
import { useLocations } from '../hooks/useLocations';

export const PostsContext = createContext()

export default function PostsProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false)
    const [getMorePostsIsLoading, setGetMorePostsIsLoading] = useState(false)
    const [isAllPostsWereShown, setIsAllPostsWereShown] = useState(false)
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(10)

    const [totalPostsLength, setTotalPostsLength] = useState()

    const { confirmedCities } = useLocations()
    const { selectedCatId } = useCategory()

    const getMorePosts = useCallback(() => {
        if (!isAllPostsWereShown && !getMorePostsIsLoading) {
            setLimit(prev => prev + 10)
            console.log('get moreee');
        }
    }, [isAllPostsWereShown, getMorePostsIsLoading])

    useEffect(() => {
        if (!getMorePostsIsLoading && !getMorePostsIsLoading) {
            setGetMorePostsIsLoading(true)
            getPosts(confirmedCities, selectedCatId, limit)
                .then(data => {
                    console.log(data);
                    setTotalPostsLength(data.pagination.totalPosts)
                    setPosts(data.posts)
                    setGetMorePostsIsLoading(false)
                })
        }
    }, [limit])

    useEffect(() => {
        totalPostsLength == posts.length && setIsAllPostsWereShown(true)
    }, [posts, totalPostsLength])

    useEffect(() => {
        setIsLoading(true)
        setIsAllPostsWereShown(false)
        getPosts(confirmedCities, selectedCatId, limit)
            .then(data => {
                setIsLoading(false)
                console.log(data.pagination.totalPosts == posts.length);
                setLimit(10)
                setTotalPostsLength(data.pagination.totalPosts)
                setPosts(data.posts)
            })
    }, [confirmedCities, selectedCatId])

    return (
        <PostsContext.Provider
            value={{
                posts,
                setPosts,
                isLoading,
                getMorePostsIsLoading,
                isAllPostsWereShown,
                getMorePosts
            }}>
            {children}
        </PostsContext.Provider>
    )
}

PostsProvider.propTypes = {
    children: propTypes.node
}