import propTypes from 'prop-types'

export default function SliderFilterBox({ name, setIsFiltesListShow }) {
    return (
        <div onClick={() => {setIsFiltesListShow(true)}} className='flex items-center justify-between gap-1 text-nowrap cursor-pointer w-full min-w-fit bg-blue-100 dark:bg-opacity-20 py-1 px-3 rounded-full border text-main font-semibold border-main'>
            <span className="h-fit">{name}</span>
        </div>)
}

SliderFilterBox.propTypes = {
    name: propTypes.string,
    setIsFiltesListShow: propTypes.func
}