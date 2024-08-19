import { useCallback } from "react"
import RangeFilter from "./RangeFilter"
import Accordion from "./Accordion"

// const filters = [
//     {
//         "name": "برند",
//         "slug": "brand",
//         "description": "انتخاب برند",
//         "type": "selectbox",
//         "options": [
//             "Acer - ایسر",
//             "Apple - اپل",
//             "Asus - ایسوس",
//             "Compaq - کامپک",
//             "Dell - دل",
//             "Fujitsu - فوجیتسو",
//             "Gigabyte - گیگابایت",
//             "HP - اچ‌پی",
//             "Lenovo - لنوو",
//             "MSI - ام‌اس‌آی",
//             "Samsung - سامسونگ",
//             "Sony - سونی",
//             "Toshiba - توشیبا",
//             "Suzuki - سوزوکی",
//             "Razer - ریزر",
//             "Alienware - ایلین‌ویر",
//             "Microsoft - مایکروسافت",
//             "غیره"
//         ],
//         "_id": "65fec8d17050eba96478f4d0"
//     },
//     {
//         "name": "نوع پردازنده",
//         "slug": "cpu-type",
//         "description": "نوع پردازنده",
//         "type": "selectbox",
//         "options": [
//             "Core i3",
//             "Core i5",
//             "Core i7",
//             "Core i9",
//             "Core 2 Duo",
//             "Pentium",
//             "Celeron",
//             "Atom",
//             "Ryzen 3",
//             "Ryzen 5",
//             "Ryzen 7",
//             "Apple M1",
//             "غیره"
//         ],
//         "_id": "65fec8d17050eba96478f4d1"
//     },
//     {
//         "name": "دارای صفحه نمایش لمسی",
//         "slug": "touch-screen",
//         "description": "چک باکس صفحه نمایش",
//         "type": "checkbox",
//         "options": [],
//         "_id": "65fec8d17050eba96478f4d2"
//     },
//     {
//         "name": "دارای پورت HDMI",
//         "slug": "hdmi-port",
//         "description": "چک باکس پورت",
//         "type": "checkbox",
//         "options": [],
//         "_id": "65fec8d17050eba96478f4d3"
//     }
// ]


export default function FiltersList() {

    const priceChangeHandler = useCallback((res) => {
        console.log(res)
    }, [])

    return (
        <div className="">
            <Accordion name={'قیمت'} >
                <RangeFilter callBack={priceChangeHandler} minPlaceHolder={"مثلاً ۱۰,۰۰۰,۰۰۰"} maxPlaceHolder={'مثلاً ۱۰۰,۰۰۰,۰۰۰'} />
            </Accordion>
        </div>
    )
}


