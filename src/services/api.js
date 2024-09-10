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


const getSinglePostDetails = async (postId, token) => {
    const response = await doFetch(`/v1/post/${postId}`, {
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    })
    return response.data.post || {}

}

const addNote = async (token, postId, content) => {
    await doFetch('/v1/note', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            "postId": postId,
            "content": content
        })
    })

}

const updateNote = async (token, noteId, content) => {
    doFetch(`/v1/note/${noteId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            "content": content
        })
    })
}

const deleteNote = async (token, noteId) => {
    console.log(noteId);

    const res = await doFetch(`/v1/note/${noteId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(res);

}

const addBookMark = async (postId, token) => {
    doFetch(`/v1/bookmark/${postId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const removeBookMark = async (postId, token) => {
    doFetch(`/v1/bookmark/${postId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const getUserBookMarks = async (token) => {
    const res = await doFetch('/v1/user/bookmarks', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data.posts
}


const createNewPost = async (categoryId, userToken, cityId, title, description, price, categoryFields, pics) => {

    const formData = new FormData()
    formData.append('city', cityId)
    formData.append('neighborhood', cityId)
    formData.append('title', title)
    formData.append('map', JSON.stringify({x:0, y:0}))
    formData.append('description', description)
    formData.append('price', price)
    formData.append('categoryFields', JSON.stringify(categoryFields))

    pics.map(pic => {
        formData.append('pics', pic)
    })

    const res = await doFetch(`/v1/post/${categoryId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
        body: formData
    })

    console.log(res);
}

export {
    getAllCats,
    getAllLocations,
    getPosts,
    sendOtpCode,
    verifyOtpCode,
    getMe,
    getSinglePostDetails,
    getUserNotes,
    addNote,
    updateNote,
    deleteNote,
    addBookMark,
    removeBookMark,
    getUserBookMarks,
    createNewPost
}