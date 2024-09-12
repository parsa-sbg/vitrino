import { memo, useCallback, useRef } from "react"
import proptypes from 'prop-types'
const baseUrl = import.meta.env.VITE_APP_BASE_URL;


import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './PostImagesSlider.css'
import { MdImageNotSupported } from "react-icons/md";


const PostImagesSlider = memo(({ images }) => {


    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <Swiper
            ref={sliderRef}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {images?.length
                ? images.map(image => (
                    <SwiperSlide key={image._id}>
                        <div className=" h-72 rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src={baseUrl + '/' + image.path} alt="" />
                        </div>
                    </SwiperSlide>
                ))
                : (
                    <div className=" h-72 rounded-lg overflow-hidden">
                        <div className="bg-gray-300 dark:bg-gray-500 flex h-full items-center justify-center"><MdImageNotSupported size={40} /></div>
                    </div>
                )

            }

            <div className="absolute top-0 bottom-0 right-0 z-50 flex justify-center items-center w-10 cursor-pointer transition-all duration-300 hover:bg-gray-200 !bg-opacity-30" onClick={handlePrev}><IoIosArrowForward size={20} /></div>
            <div className="absolute top-0 bottom-0 left-0 z-50 flex justify-center items-center w-10 cursor-pointer transition-all duration-300 hover:bg-gray-200 !bg-opacity-30" onClick={handleNext}><IoIosArrowBack size={20} /></div>

        </Swiper >
    );
})

PostImagesSlider.displayName = 'PostImagesSlider'

PostImagesSlider.proptypes = {
    images: proptypes.array
}

export default PostImagesSlider