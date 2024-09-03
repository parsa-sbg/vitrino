import { memo } from "react";
import propTypes from 'prop-types'

const PostDesc = memo(({desc}) => {
    return (
        <div>
            <h4 className="font-bold text-[#333] dark:text-white mb-3">توضیحات</h4>
            <p className="text-[#333] dark:text-white">{desc}</p>
        </div>
    )
})

PostDesc.displayName = 'PostDesc'

PostDesc.propTypes = {
    desc: propTypes.string
}

export default PostDesc