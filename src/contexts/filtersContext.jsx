import propTypes from 'prop-types'
import { createContext, useCallback, useEffect, useState } from "react";
import usePosts from '../hooks/usePosts';

export const FiltersContext = createContext()

export default function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({ price: { min: null, max: null }, withPhoto: false, search: '' })
    const [filtredPosts, setFiltredPosts] = useState([])
    const { posts } = usePosts()

    useEffect(() => {
        console.log(filtredPosts);

    }, [filtredPosts])


    useEffect(() => {
        // console.log('filters => ', filters);

        let newFiltredPosts = [...posts]

        console.log('min => ', filters.price.min);
        console.log('max => ', filters.price.max);

        ////  set price filter ////
        if (filters.price.max && filters.price.min) {
            console.log('both');

            newFiltredPosts = posts.filter(post => post.price <= filters.price.max && post.price >= filters.price.min)
        } else if (filters.price.min) {
            console.log('just min');

            newFiltredPosts = posts.filter(post => {
                return post.price >= filters.price.min
            })
        } else if (filters.price.max) {
            console.log('just max');

            newFiltredPosts = posts.filter(post => {
                return post.price <= filters.price.max
            })
        }


        if (filters.withPhoto) {
            newFiltredPosts = posts.filter(post => post?.pics[0])
        }

        if (filters.search) {
            newFiltredPosts = posts.filter(post => post?.title.includes(filters.search))
        }

        setFiltredPosts(newFiltredPosts)

    }, [filters, posts])



    const setFilter = useCallback((slug, data) => {
        setFilters((prev => {
            const newFilters = { ...prev }
            newFilters[slug] = data
            return newFilters
        }))
    }, [setFilters])

    return (
        <FiltersContext.Provider
            value={{
                filters,
                setFilter,
                filtredPosts
            }}>
            {children}
        </FiltersContext.Provider>
    )
}

FiltersProvider.propTypes = {
    children: propTypes.node
}