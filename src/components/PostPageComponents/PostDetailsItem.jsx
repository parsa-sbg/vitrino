import propTypes from 'prop-types' 


export default function PostDetailsItem({dynamicField}) {
  return (
    <div className='flex justify-between items-center border-b pb-3 mb-3 !border-opacity-40 dark:border-gray-500'>
      <span className=''>{dynamicField.name}</span>
      <span className='text-[#333] dark:text-white'>{dynamicField.data}</span>
    </div>
  )
}

PostDetailsItem.propTypes = {
  dynamicField: propTypes.object
}