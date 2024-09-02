import { memo } from "react"
import propTypes from 'prop-types'

const PostTitle = memo(({title}) => {

    return (
        <h3 className="font-bold text-[#333] dark:text-white text-xl max-w-80">{title}</h3>
    )
})

PostTitle.displayName = 'PostTitle'

export default PostTitle

PostTitle.propTypes = {
    title: propTypes.string
}