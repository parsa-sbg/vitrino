import propTypes from 'prop-types'


export default function LoginModalInput({ number, setNumber }) {
    
    return (
        <div className="relative mt-5 ">
            <input
                onChange={e => { e.target.value.length < 11 && setNumber(e.target.value.trim()) }}
                value={number}
                className={`placeholder:text-right placeholder w-full bg-transparent border-2 transition-colors focus:border-main dark:border-gray-500 outline-none rounded-lg py-2 pr-2 pl-16 flex float-left`}
                placeholder="شمارهٔ موبایل"
                dir='ltr'
                inputMode='numeric'
                type="number" />
            <span className="absolute h-fit px-2 rounded-sm top-0 bottom-0 bg-gray-200 dark:bg-gray-700 left-2 my-auto flex items-center">98+</span>
        </div>)
}

LoginModalInput.propTypes = {
    number: propTypes.string,
    setNumber: propTypes.func
}