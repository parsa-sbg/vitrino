import propTypes from 'prop-types'
import SiteBtn from '../../SiteBtn'
import CitySelector from './citySelector'
import { useState } from 'react'
import { useLocations } from '../../../hooks/useLocations'
import NeighborhoodSelector from './NeighborhoodSelector'
import PicsSelector from './picsSelector'
import DynamicFieldsSelector from './DynamicFieldsSelector'


export default function NewPostDetails({ confiredCat, setConfiredCat }) {
    
    const {confirmedCities} = useLocations()
    const [selectedCityneighborhoods, setSelectedCityneighborhoods] = useState([])

    // main datas
    const [selectedCity, setSelectedCity] = useState(confirmedCities[0])
    const [selectedNeighborhood, setSelectedNeighborhood] = useState({})
    const [postPics, setPostPics] = useState([])
    const [newPostDynamicFields, setNewPostDynamicFields] = useState({})


    return (
        <div className='w-full max-w-[490px]'>
            
            <h5 className='text-lg font-semibold'>ثبت آگهی</h5>
            <div className='relative mb-24'>
                <span className='my-2 w-56 p-10 mx-auto border flex justify-center items-center rounded-lg'>{confiredCat.title}</span>
                <div className='absolute -bottom-5 hover:-bottom-6 transition-all left-0 right-0 w-40 mx-auto'>
                    <SiteBtn onClick={() => { setConfiredCat(null) }} text={'تغییر دسته‌بندی'} />
                </div>
            </div>


            <CitySelector setSelectedNeighborhood={setSelectedNeighborhood} selectedCity={selectedCity} setSelectedCity={setSelectedCity} setSelectedCityneighborhoods={setSelectedCityneighborhoods} />
            {selectedCityneighborhoods.length > 0 && <NeighborhoodSelector selectedNeighborhood={selectedNeighborhood} setSelectedNeighborhood={setSelectedNeighborhood} selectedCityneighborhoods={selectedCityneighborhoods} />}

            <PicsSelector postPics={postPics} setPostPics={setPostPics} />

            <DynamicFieldsSelector newPostDynamicFields={newPostDynamicFields} setNewPostDynamicFields={setNewPostDynamicFields} catDynamicFields={confiredCat.productFields} />

        </div>
    )
}


NewPostDetails.propTypes = {
    confiredCat: propTypes.object,
    setConfiredCat: propTypes.func
}