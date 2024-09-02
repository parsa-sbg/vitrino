import propTypes from 'prop-types'
import { memo } from 'react'

const PostTime = memo(({ date, cityName }) => {
    return (
        <div className='mt-1'>
            دقایقی قبل در {cityName}
        </div>
    )
})

PostTime.displayName = 'PostTime'

PostTime.propTypes = {
    date: propTypes.string,
    cityName: propTypes.string
}

export default PostTime
