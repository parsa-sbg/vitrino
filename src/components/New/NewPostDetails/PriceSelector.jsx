import propTypes from 'prop-types'
import { useEffect, useState } from 'react'

export default function PriceSelector({ newPostPrice, setNewPostPrice }) {

    const [priceText, setPriceText] = useState('')

    useEffect(() => {
        let unit = ' تومان'
        let number = newPostPrice ? String(newPostPrice) : ''

        console.log(newPostPrice?.length);

        if (newPostPrice?.length > 3 && newPostPrice?.length <= 6) {
            number = number.slice(0, -3)
            unit = ' هزار تومان' 
        }

        if (newPostPrice?.length > 6 && newPostPrice?.length <= 9) {
            number = number.slice(0, -6)
            unit = ' میلیون تومان' 
        }

        if (newPostPrice?.length > 9) {
            number = number.slice(0, -9)
            unit = ' میلیارد تومان' 
        }

        if (!number.length) {
            setPriceText('')
        }else {
            setPriceText(number + unit)
        }

    }, [newPostPrice])

    return (
        <div>
            <h5 className='text-lg mb-5 mt-10 font-semibold'>قیمت</h5>
            <input
                type="number"
                onChange={e => { setNewPostPrice(e.target.value) }}
                value={newPostPrice}
                dir={newPostPrice ? "ltr" : "rtl"}
                className="border-2 cursor-pointer hover:border-[#333] dark:hover:border-white dark:focus:border-main outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 px-3 w-full" placeholder="قیمت به تومان..." />
            <span className='mt-2 block'>{priceText}</span>
        </div>
    )
}


PriceSelector.propTypes = {
    newPostPrice: propTypes.number,
    setNewPostPrice: propTypes.func
}