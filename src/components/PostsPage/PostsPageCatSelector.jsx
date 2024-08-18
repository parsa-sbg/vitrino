import { useState } from "react"
import { FaAngleLeft } from "react-icons/fa6";

const allCats = [
    {
        id: 1,
        name: 'املاک',
        subCats: [
            {
                id: 10,
                name: 'فروش مسکونی',
            },

            {
                id: 11,
                name: 'اجارهٔ مسکونی',
                subCats: [
                    {
                        id: 100205165,
                        name: 'آپارتمان'
                    },
                    {
                        id: 100205184,
                        name: 'خانه و ویلا'
                    }
                ]
            },
            {
                id: 30,
                name: 'فروش اداری و تجاری',
            }
        ]
    },
    {
        id: 2,
        name: 'وسایل نقلیه',
        subCats: [
            {
                id: 13,
                name: 'خودرو',
                subCats: [
                    {
                        id: 100,
                        name: 'سواری و وانت'
                    }
                ]
            }
        ]
    },
    {
        id: 1000,
        name: 'کالای دیجیتال'
    },
    {
        id: 1001,
        name: 'خانه و آشپزخانه'
    },
    {
        id: 1002,
        name: 'خدمات'
    },
    {
        id: 1003,
        name: 'وسایل شخصی',
    }
]

export default function PostsPageCatSelector() {

    const [openCatIds, setOpenCatIds] = useState([])
    const [selectedCatId, setSelectedCatId] = useState(null)

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
                <li key={subSubCat.id}>
                    <span
                        className={`${selectedCatId == subSubCat.id && 'text-main bg-gray-100 dark:bg-gray-700'} transition-colors duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-1 px-2 cursor-pointer block`}
                        onClick={() => { setSelectedCatId(subSubCat.id) }}>
                        {subSubCat.name}
                    </span>
                </li>
            ))}
        </ul>
    )

    const subCatGenerator = (subCats, parentId) => (
        <ul className={`mr-5 flex flex-col gap-1 transition-all duration-300 max-h-0 overflow-hidden ${openCatIds.includes(parentId) && 'max-h-64 my-1'}`}>
            {subCats.map(subCat => (
                <li key={subCat.id}>
                    <span
                        className={`${selectedCatId == subCat.id && 'text-main bg-gray-100 dark:bg-gray-700'} transition-colors duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-1 px-2 flex items-center justify-between cursor-pointer`}
                        onClick={() => { toggleCat(subCat.id, parentId) }}>
                        {subCat.name} {subCat.subCats && <FaAngleLeft className={`transition-all duration-300 ${openCatIds.includes(subCat.id) && '-rotate-90'}`} size={12} />}
                    </span>
                    {subCat.subCats && subSubCatGenerator(subCat.subCats, subCat.id)}
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
                    <li key={cat.id}>
                        <span
                            className={`${selectedCatId == cat.id && 'text-main bg-gray-100 dark:bg-gray-700 '} transition-colors duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-1 px-2 flex items-center justify-between cursor-pointer`}
                            onClick={() => { toggleCat(cat.id) }}>
                            {cat.name} {cat.subCats && <FaAngleLeft className={`${openCatIds.includes(cat.id) && '-rotate-90'} transition-all duration-300`} size={16} />}
                        </span>
                        {cat.subCats && subCatGenerator(cat.subCats, cat.id)}
                    </li>
                ))}
            </ul>
        </div>)
}
