import { useState } from 'react'
import propTypes from 'prop-types'
import { BsThreeDotsVertical } from "react-icons/bs";


export default function RangeFilter({ callBack, minPlaceHolder, maxPlaceHolder }) {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)


    const sendDatas = () => {
        callBack({
            min: min ? min : null,
            max: max ? max : null
        })
    }


    const inputKeyDownHandler = (e) => {
        e.keyCode == 37 || e.keyCode == 39 && e.preventDefault()
        e.keyCode == 13 && e.target.blur()
    }

    const Input = (state, setState, placeHolder) => (

        <div className='relative h-10 '>
            <input style={{ paddingRight: Math.floor(String(state).length / 3 * 4 + 3) }}
                className={` border-2 dark:border-gray-500 focus:border-main caret-black placeholder-opacity-100 dark:caret-white rounded-lg text-transparent bg-transparent absolute w-full h-full top-0 bottom-0 right-0 left-0 m-auto z-20 outline-none py-1 px-2`}
                onBlur={sendDatas}
                onMouseDown={e => {e.preventDefault(); e.target.focus()}}
                onKeyDown={inputKeyDownHandler}
                onWheel={(e) => { e.currentTarget.blur() }}
                value={state} type="number"
                onChange={e => { e.target.value.length < 12 && setState(+e.target.value) }} />

            <p className=' z-0 absolute h-full w-full top-0 left-0 bottom-0 right-0 flex items-center py-1 px-2'>
                {+state ? state?.toLocaleString().trim() : null}
            </p>

            <span className='absolute left-2 text-gray-400 dark:text-gray-600 top-0 bottom-0 m-auto flex items-center text-xs' >تومان</span>
            <span className={` ${state && 'hidden'} absolute right-5 text-gray-400 dark:text-gray-600 top-0 bottom-0 m-auto flex items-center text-xs`} >{placeHolder}</span>
        </div>

    )


    return (
        <div className='flex gap-3'>

            <div className="flex flex-col justify-center gap-3 relative">
                <span className='h-10 flex items-center'>حداقل</span>
                <span className='h-10 flex items-center'>حداکثر</span>
                <BsThreeDotsVertical className='absolute right-0 left-0 m-auto' />
            </div>

            <div className='flex flex-col gap-3 w-full'>

                {console.log(min)}

                {Input(min, setMin, minPlaceHolder)}

                {Input(max, setMax, maxPlaceHolder)}

            </div>


        </div>
    )
}

RangeFilter.propTypes = {
    callBack: propTypes.func,
    minPlaceHolder: propTypes.string,
    maxPlaceHolder: propTypes.string
}
