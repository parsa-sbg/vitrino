import propTypes from 'prop-types'

export default function SiteBtn({text, onClick}) {
  return (
    <button onClick={onClick} className='text-nowrap px-4 py-2 bg-main hover:bg-blue-800 transition-colors duration-300 text-white h-full w-full rounded-lg flex justify-center items-center'>{text}</button>
  )
}

SiteBtn.propTypes = {
    text: propTypes.string,
    onClick: propTypes.func
}