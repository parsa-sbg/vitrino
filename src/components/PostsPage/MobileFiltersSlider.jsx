import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { memo, useState } from 'react';
import SliderFilterBox from './SliderFilterBox';
import { useFilters } from '../../hooks/useFilters';
import MobileFiltersSelectorModal from './MobileFiltersSelectorModal';

export default memo(function MobileFiltersSlider() {

    const { filters } = useFilters()
    const [isFiltesListShow, setIsFiltesListShow] = useState(false)

    return (
        <div className=''>

            <Swiper

                spaceBetween={10}
                slidesPerView={'auto'}
                breakpoints={{

                }}>

                <SwiperSlide className='flex justify-center w-fit'><SliderFilterBox setIsFiltesListShow={setIsFiltesListShow} name={'فیلتر ها'} /></SwiperSlide>

                {filters.withPhoto && (
                    <SwiperSlide className='flex justify-center w-fit'><SliderFilterBox setIsFiltesListShow={setIsFiltesListShow} name={'عکس دار'} /></SwiperSlide>
                )}

                {filters.price.min || filters.price.max ? (
                    <SwiperSlide className='flex justify-center w-fit'><SliderFilterBox setIsFiltesListShow={setIsFiltesListShow} name={'قیمت'} /></SwiperSlide>
                ) : ''}


            </Swiper>

            {isFiltesListShow && <MobileFiltersSelectorModal setIsFiltesListShow={setIsFiltesListShow} />}
        </div >

    )
})

