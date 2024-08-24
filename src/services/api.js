const baseUrl = import.meta.env.VITE_APP_BASE_URL;


const doFetch = async (path, options = {}) => {
    const res = await fetch(baseUrl + path, options);
    if (!res.ok) throw new Error('Network response was not ok');
    const response = await res.json();
    return response;
};

const getAllLocations = async () => {
    const response = await doFetch('/v1/location/')
    const cities = response?.data?.cities || []
    const provinces = response?.data?.provinces || []
    const neighborhoods = response?.data?.neighborhoods || []
    const popularCities = response?.data?.cities?.filter(city => city.popular) || []

    return { cities, provinces, neighborhoods, popularCities }
}


const getAllCats = async () => {
    const response = await doFetch('/v1/category')
    return response?.data?.categories || []
}


const getPosts = async (citiesId) => {    
    const citiesIdString = citiesId ? citiesId.map(city => city.id).join('|') : null

    const res = await doFetch(`/v1/post/${citiesIdString && `?city=${citiesIdString}`}`)
    return res.data.posts || []
}


export {
    getAllCats,
    getAllLocations,
    getPosts
}