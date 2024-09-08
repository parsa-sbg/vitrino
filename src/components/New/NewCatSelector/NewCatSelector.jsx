
import { useCallback, useEffect, useState } from 'react';
import { useCategory } from '../../../hooks/useCategory'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import propTtypes from 'prop-types'



export default function NewCatSelector({ setConfiredCat }) {

    const { allCats } = useCategory()
    const [shownCats, setShownCats] = useState([])
    const [selectedCat, setSelectedCat] = useState(null)
    const [parentcat, setParentcat] = useState(null)

    useEffect(() => {
        setShownCats(allCats)
    }, [allCats])

    const findCatById = useCallback((catId) => {
        return allCats.find(cat => cat._id == catId)
    }, [allCats])

    useEffect(() => {
        // back to root (all cats)
        if (!selectedCat) {
            setShownCats(allCats)
            setParentcat(null)
            return
        }

        if (selectedCat?.subCategories) {
            setShownCats(selectedCat?.subCategories)
            const parentCat = findCatById(selectedCat.parent) || 'root'
            setParentcat(parentCat)

        } else {
            setConfiredCat(selectedCat)
            setSelectedCat(null)
            setShownCats(allCats)
            setParentcat(null)
        }
    }, [selectedCat, findCatById, setConfiredCat, allCats])



    return (
        <div className='w-full max-w-[490px]'>
            <h5 className='text-lg font-semibold'>ثبت آگهی</h5>
            <span className='mb-2'>انتخاب دسته‌بندی</span>

            {parentcat && (
                <div
                    className='flex items-center gap-5 border-b dark:border-gray-500 w-full py-4 cursor-pointer'
                    onClick={() => { parentcat == 'root' ? setSelectedCat(null) : setSelectedCat(parentcat) }}>
                    <FaLongArrowAltRight size={25} />
                    {parentcat == 'root' ? 'همه دسته ها' : parentcat.title}
                </div>
            )}

            {shownCats.map(cat => (
                <div
                    className='flex justify-between items-center border-b dark:border-gray-500 w-full py-4 cursor-pointer'
                    onClick={() => { setSelectedCat(cat) }} key={cat._id}>
                    {cat.title}
                    <MdOutlineKeyboardArrowLeft size={25} />
                </div>
            ))}
        </div>
    )
}

NewCatSelector.propTtypes = {
    setConfiredCat: propTtypes.func
}

