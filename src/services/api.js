const baseUrl = import.meta.env.VITE_APP_BASE_URL;


const doFetch = async (path, options = {}) => {
    const res = await fetch(baseUrl + path, options);
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


const getPosts = async (citiesId, selectedCatId) => {

    const citiesIdString = citiesId ? citiesId.map(city => city.id).join('|') : null

    const url = `/v1/post/${`?categoryId=${selectedCatId ? selectedCatId : ''}`}&${citiesIdString && `city=${citiesIdString}`}`


    const res = await doFetch(url)
    return res.data.posts || []
}


const sendOtpCode = async (phone) => {

    return await doFetch('/v1/auth/send', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "phone": 0 + phone })
    })
}

const verifyOtpCode = async (phone, otp) => {

    return await doFetch('/v1/auth/verify', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "phone": 0 + phone,
            "otp": otp
        })
    })
}

const getMe = async (token) => {
    const response = await doFetch('/v1/auth/me', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    return response.data.user
}

const getUserNotes = async (token) => {
    const response = await doFetch('/v1/user/notes', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    return response.data.posts
}


const getSinglePostDetails = async (postId) => {
    const response = await doFetch(`/v1/post/${postId}`)
    return response.data.post || {}

}

export {
    getAllCats,
    getAllLocations,
    getPosts,
    sendOtpCode,
    verifyOtpCode,
    getMe,
    getSinglePostDetails,
    getUserNotes
}