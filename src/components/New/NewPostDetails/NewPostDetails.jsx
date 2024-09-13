import propTypes from 'prop-types'
import SiteBtn from '../../SiteBtn'
import CitySelector from './citySelector'
import { useCallback, useEffect, useState } from 'react'
import { useLocations } from '../../../hooks/useLocations'
import NeighborhoodSelector from './NeighborhoodSelector'
import PicsSelector from './picsSelector'
import DynamicFieldsSelector from './DynamicFieldsSelector'
import TitleSelector from './TitleSelector'
import DescSelector from './descSelector'
import ConfirmBtn from './ConfirmBtn'
import CancelBtn from './CancelBtn'
import PriceSelector from './PriceSelector'
import { createNewPost } from '../../../services/api'
import { useAuth } from '../../../hooks/useAuth'


export default function NewPostDetails({ confiredCat, setConfiredCat }) {


    const { confirmedCities } = useLocations()
    const [selectedCityneighborhoods, setSelectedCityneighborhoods] = useState([])

    const [validationObj, setValidationObj] = useState({})

    const [isFirstRender, setIsFirstRender] = useState(true)

    // main datas
    const [selectedCity, setSelectedCity] = useState(confirmedCities[0])
    const [selectedNeighborhood, setSelectedNeighborhood] = useState({})
    const [postPics, setPostPics] = useState([])
    const [newPostTitle, setNewPostTitle] = useState('')
    const [newPostDesc, setNewPostDesc] = useState('')
    const [newPostPrice, setNewPostPrice] = useState('')
    const [newPostDynamicFields, setNewPostDynamicFields] = useState({})

    const { userToken } = useAuth()


    useEffect(() => {

        const res = Object.values(validationObj).some(value => {
            return value == false
        })

        if (isFirstRender) {
            setIsFirstRender(false)
        } else {
            !res && createNewPost(confiredCat._id, userToken, selectedCity.id, newPostTitle, newPostDesc, +newPostPrice, newPostDynamicFields, postPics)
        }

    }, [validationObj])

    const validateInputs = useCallback(() => {

        if (newPostTitle.length < 2) {
            setValidationObj((prev) => {
                const newObj = { ...prev }
                newObj.title = false
                return newObj
            })
        } else {
            setValidationObj((prev) => {
                const newObj = { ...prev }
                newObj.title = true
                return newObj
            })
        }

        if (newPostDesc.length < 2) {
            setValidationObj((prev) => {
                const newObj = { ...prev }
                newObj.desc = false
                return newObj
            })
        } else {
            setValidationObj((prev) => {
                const newObj = { ...prev }
                newObj.desc = true
                return newObj
            })
        }

        if (!newPostPrice || newPostPrice < 0) {
            setValidationObj((prev) => {
                const newObj = { ...prev }
                newObj.price = false
                return newObj
            })
        } else {
            setValidationObj((prev) => {
                const newObj = { ...prev }
                newObj.price = true
                return newObj
            })
        }

        Object.keys(newPostDynamicFields).forEach(key => {
            const dynamicFieldType = confiredCat.productFields.find(field => field.slug == key).type

            if (!newPostDynamicFields[key].length && dynamicFieldType !== 'checkbox') {
                setValidationObj((prev) => {
                    const newObj = { ...prev }
                    newObj[key] = false
                    return newObj
                })
            } else {
                setValidationObj((prev) => {
                    const newObj = { ...prev }
                    newObj[key] = true
                    return newObj
                })
            }
        })


    }, [newPostTitle, newPostDesc, newPostPrice, newPostDynamicFields, confiredCat])

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

            <DynamicFieldsSelector validationObj={validationObj} setValidationObj={setValidationObj} newPostDynamicFields={newPostDynamicFields} setNewPostDynamicFields={setNewPostDynamicFields} catDynamicFields={confiredCat.productFields} />

            <PriceSelector validationObj={validationObj} setValidationObj={setValidationObj} newPostPrice={newPostPrice} setNewPostPrice={setNewPostPrice} />

            <TitleSelector validationObj={validationObj} setValidationObj={setValidationObj} newPostTitle={newPostTitle} setNewPostTitle={setNewPostTitle} />

            <DescSelector validationObj={validationObj} setValidationObj={setValidationObj} newPostDesc={newPostDesc} setNewPostDesc={setNewPostDesc} />

            <div className='flex gap-5 justify-between mt-10'>
                <CancelBtn />
                <ConfirmBtn validationObj={validationObj} validateInputs={validateInputs} />
            </div>

        </div>
    )
}


NewPostDetails.propTypes = {
    confiredCat: propTypes.object,
    setConfiredCat: propTypes.func
}