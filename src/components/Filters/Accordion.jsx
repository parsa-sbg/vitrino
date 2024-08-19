import propTypes from 'prop-types'
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";


export default function Accordion({ children, name }) {

    console.log(children);
    
    const [isAccordionOpen, setIsAccordionOpen] = useState(false)

    const toggleAccordion = () => {
        setIsAccordionOpen(prev => !prev)
    }

    return (
        <div className='border-y-2 dark:border-gray-500 pb-3'>

            <button aria-expanded={isAccordionOpen} className='text-[#333] font-semibold py-3 w-full text-right flex items-center gap-2' onClick={toggleAccordion}>
                <FaAngleDown className={` ${isAccordionOpen && '-scale-y-[1]'} transition-all duration-300`} />
                {name}
            </button>

            <div className={`${isAccordionOpen && 'max-h-32'} transition-all duration-300 max-h-0 overflow-hidden`}>
                {children}
            </div>
        </div>
    )
}

Accordion.propTypes = {
    name: propTypes.string,
    children: propTypes.node
}