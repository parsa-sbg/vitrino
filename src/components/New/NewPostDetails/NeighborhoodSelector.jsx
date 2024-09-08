import propTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react';


export default function NeighborhoodSelector({ selectedCityneighborhoods, setSelectedNeighborhood, selectedNeighborhood }) {

  const [isNeighListOpen, setIsNeighListOpen] = useState(false)
  const [inputvalue, setInputvalue] = useState('')

  const [filteredNeighs, setFilteredNeighs] = useState([])


  useEffect(() => {
    setFilteredNeighs(selectedCityneighborhoods.filter(city => city?.name?.startsWith(inputvalue)))
  }, [inputvalue, selectedCityneighborhoods])


  const focusHandler = useCallback(() => {
    setIsNeighListOpen(true)
    setInputvalue('')
  }, [])

  const blurHandler = () => {
    setTimeout(() => {
      setInputvalue(selectedNeighborhood?.name)
      setIsNeighListOpen(false)
    }, 140);
  }

  
  return (
    <div>
      <h6 className='text-lg font-semibold mb-2 mt-5'>محله</h6>

      <div className="relative w-full">
        <input
          placeholder='انتخاب محله...'
          onChange={e => { setInputvalue(e.target.value.trim()) }}
          onFocus={focusHandler}
          onBlur={blurHandler}
          value={isNeighListOpen ? inputvalue : selectedNeighborhood?.name ? selectedNeighborhood?.name : ''}
          className="border-2 cursor-pointer hover:border-[#333] dark:hover:border-white dark:focus:border-main outline-none dark:bg-transparent dark:border-gray-500 focus:border-main hover:border-2 transition-colors border-gray-200 rounded-md py-2 px-3 w-full" type="text" />


        <div className={`${isNeighListOpen && '!block'} hidden shadow-sm shadow-gray-600 text-white bg-white dark:bg-[#242424] absolute top-[calc(100%+10px)] rounded-lg right-0 left-0 overflow-y-scroll max-h-56 custom-scrollbar`}>
          {filteredNeighs?.map(neight => (
            <button
              onClick={() => {
                setSelectedNeighborhood({ name: neight?.name, id: neight?.id })
              }}
              className="block w-full py-3 px-2 text-[#333] dark:text-inherit transition-colors duration-100 hover:bg-gray-300 dark:hover:bg-gray-700" key={neight.id}>
              {neight?.name}
            </button>
          ))}
        </div>

      </div>

    </div>
  )
}


NeighborhoodSelector.propTypes = {
  selectedCityneighborhoods: propTypes.array,
  setSelectedNeighborhood: propTypes.func,
  selectedNeighborhood: propTypes.object
}
