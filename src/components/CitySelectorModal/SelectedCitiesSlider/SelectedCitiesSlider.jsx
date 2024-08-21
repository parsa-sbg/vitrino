import { Swiper, SwiperSlide } from 'swiper/react';
import SelectedCityBox from './SelectedCityBox'
import 'swiper/css';
import { useLocations } from '../../../hooks/useLocations';
import { memo } from 'react';

export default memo(function SelectedCitiesSlider() {

    const { selectedCities } = useLocations()


    return (
        <div>
            {selectedCities.length ? (
                <Swiper

                    spaceBetween={10}
                    slidesPerView={'auto'}
                    breakpoints={{

                    }}>

                    {selectedCities.length && selectedCities.map(city => (
                        <SwiperSlide key={city.id} className='flex justify-center w-fit'><SelectedCityBox cityId={city.id} cityName={city.name} /></SwiperSlide>
                    ))}


                </Swiper>
            ) : <div className='flex items-center justify-between gap-1 text-nowrap cursor-pointer w-full min-w-fit py-1 px-3 rounded-full border border-transparent'>
                <span className="h-fit pb-1">حداقل یک شهر را انتخاب کنید.</span>
            </div>}

        </div>

    )
})

