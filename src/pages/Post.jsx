import { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../components/Header/Header";
import MobileHeader from "../components/PostPageComponents/MobileHeader";
import { getSinglePostDetails } from "../services/api";
import PostTitle from "../components/PostPageComponents/PostTitle";
import PostTime from "../components/PostPageComponents/PostTime";
import PostContact from "../components/PostPageComponents/PostContact";
import Postdetails from "../components/PostPageComponents/Postdetails";
import PostDesc from "../components/PostPageComponents/PostDesc";
import PostImagesSlider from "../components/PostPageComponents/PostImagesSlider";
import PostNote from "../components/PostPageComponents/PostNote";
import LoginMidal from '../components/LoginModal/LoginModal'
import { useAuth } from "../hooks/useAuth";
import { useRecentSeens } from "../hooks/useRecentSeens";
import CitySelectorModal from '../components/CitySelectorModal/CitySelectorModal'
import ThemeSelectorModal from "../components/ThemeSelectorModal/ThemeSelectorModal";

export default function Post() {
    const [postData, setPostdata] = useState()

    const { userToken } = useAuth()
    const location = useLocation()

    const {addRecentSeen} = useRecentSeens()

    const getDatasFromServer = useCallback(() => {
        const postId = location.search.replace("?", "")

        getSinglePostDetails(postId, userToken)
            .then(data => {
                setPostdata(data)
                addRecentSeen(data?.title, data?._id, data.pics[0]?.path, Date.now())
            })
    }, [userToken, location, addRecentSeen])

    useEffect(() => {
        getDatasFromServer()
    }, [getDatasFromServer])

    return (
        <div className="h-screen overflow-y-scroll custom-scrollbar container pt-[66.84px] md:pt-[90px] pb-10">

            <div className="hidden md:block"><Header /></div>
            <div className="md:hidden"><MobileHeader /></div>

            <div className="sm:px-10 md:px-0 lg:px-20 xl:px-32 grid grid-cols-2 gap-4 md:gap-7 lg:gap-10 xl:gap-16">

                <div className="order-4 md:order-1 col-span-2 md:col-span-1">
                    <PostTitle title={postData?.title} />
                    <PostTime cityName={postData?.city.name} date={postData?.createdAt} />
                    <PostContact postId={postData?._id} isBookMarked={postData?.bookmarked} phone={postData?.creator?.phone} />
                    <Postdetails price={postData?.price} dynamicFields={postData?.dynamicFields} />
                    <PostDesc desc={postData?.description} />
                </div>

                <div className="md:order-2 col-span-2 md:col-span-1">
                    <PostImagesSlider images={postData?.pics} />
                    <PostNote getDatasFromServer={getDatasFromServer} postId={postData?._id} storedNote={postData?.note ? postData?.note : null} />
                </div>

                <LoginMidal />
                <CitySelectorModal />
                <ThemeSelectorModal />
            </div>

        </div>


    )
}
