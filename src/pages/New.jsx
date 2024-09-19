import { useState } from "react";
import Header from "../components/Header/Header";
import MobileHeader from "../components/New/MobileHeader";
import NewCatSelector from "../components/New/NewCatSelector/NewCatSelector";
import NewPostDetails from "../components/New/NewPostDetails/NewPostDetails";
import PostCreationAlert from "../components/New/PostCreationAlert";
import CitySelectorModal from '../components/CitySelectorModal/CitySelectorModal'

export default function New() {

    const [confiredCat, setConfiredCat] = useState(null)
    const [PostPublishStatus, setPostPublishStatus] = useState({ isFinished: false, isPublishedSuccessFully: false })

    return (
        <div className="min-h-screen pb-24 container">

            <div className="hidden md:block">
                <Header noInput />
            </div>
            <div className="md:hidden">
                <MobileHeader />
            </div>

            <div className="pt-[66.84px] md:pt-[90px] flex justify-center">
                {
                    confiredCat
                        ? <NewPostDetails setPostPublishStatus={setPostPublishStatus} confiredCat={confiredCat} setConfiredCat={setConfiredCat} />
                        : <NewCatSelector setConfiredCat={setConfiredCat} />
                }
            </div>


            <PostCreationAlert setConfiredCat={setConfiredCat} PostPublishStatus={PostPublishStatus} />
            <CitySelectorModal />
        </div>
    )
}
