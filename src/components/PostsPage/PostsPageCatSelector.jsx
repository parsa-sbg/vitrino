import { memo, useState } from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { useCategory } from '../../hooks/useCategory'


export default memo(function PostsPageCatSelector() {

    const [openCatIds, setOpenCatIds] = useState([])

    const { allCats, selectedCatId, setSelectedCatId } = useCategory()


    const toggleCat = (catId, parentId) => {
        if (openCatIds.includes(catId)) {
            parentId ? setOpenCatIds([catId, parentId]) : setOpenCatIds([catId])

        } else {
            setOpenCatIds([parentId, catId])
        }
        setSelectedCatId(catId)
    }

    const subSubCatGenerator = (subSubCats, parentId) => (
        <ul className={`border-r-2 pr-1 mr-5 transition-all duration-300 max-h-0 overflow-hidden ${openCatIds.includes(parentId) && 'max-h-64 my-1'}`}>
            {subSubCats.map(subSubCat => (
                <li key={subSubCat._id}>
                    <span
                        className={`${selectedCatId == subSubCat._id && 'text-main bg-gray-100 dark:bg-gray-700'} transition-colors duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-1 px-2 cursor-pointer block`}
                        onClick={() => { setSelectedCatId(subSubCat._id) }}>
                        {subSubCat.title}
                    </span>
                </li>
            ))}
        </ul>
    )

    const subCatGenerator = (subCats, parentId) => (
        <ul className={`mr-5 flex flex-col gap-1 transition-all duration-300 max-h-0 overflow-hidden ${openCatIds.includes(parentId) && 'max-h-64 my-1'}`}>
            {subCats.map(subCat => (
                <li key={subCat._id}>
                    <span
                        className={`${selectedCatId == subCat._id && 'text-main bg-gray-100 dark:bg-gray-700'} transition-colors duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-1 px-2 flex items-center justify-between cursor-pointer`}
                        onClick={() => { toggleCat(subCat._id, parentId) }}>
                        {subCat.title} {subCat.subCategories && <FaAngleLeft className={`transition-all duration-300 ${openCatIds.includes(subCat._id) && '-rotate-90'}`} size={12} />}
                    </span>
                    {subCat.subCategories && subSubCatGenerator(subCat.subCategories, subCat._id)}
                </li>
            ))}
        </ul>
    )

    const backToAllCats = () => {
        setOpenCatIds([])
        setSelectedCatId(null)
    }


    return (
        <div className="border-b-2 border-[#333] pb-5">
            <span className="mb-3 block">دسته ها :</span>
            <ul className="flex flex-col gap-3">
                <span
                    onClick={backToAllCats}
                    className={`${!selectedCatId && 'text-main bg-gray-100 dark:bg-gray-700 '} transition-colors duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-1 px-2 dark:border-gray-500 cursor-pointer block`}>
                    همه آگهی ها
                </span>
                {allCats.map(cat => (
                    <li key={cat._id}>
                        <span
                            className={`${selectedCatId == cat._id && 'text-main bg-gray-100 dark:bg-gray-700 '} transition-colors duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-1 px-2 flex items-center justify-between cursor-pointer`}
                            onClick={() => { toggleCat(cat._id) }}>
                            {cat.title} {cat.subCategories && <FaAngleLeft className={`${openCatIds.includes(cat._id) && '-rotate-90'} transition-all duration-300`} size={16} />}
                        </span>
                        {cat.subCategories && subCatGenerator(cat.subCategories, cat._id)}
                    </li>
                ))}
            </ul>
        </div>)
})
