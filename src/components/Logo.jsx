import { Link } from "react-router-dom"
import propTypes from 'prop-types'

export default function Logo({link}) {

    return (

        <Link to={link ? '/posts' : null} className={`${!link && 'cursor-auto' } text-main font-bold text-2xl flex items-center justify-center`}>
            ویترینو
        </Link>
    )
}

Logo.propTypes = {
    link : propTypes.bool
}
