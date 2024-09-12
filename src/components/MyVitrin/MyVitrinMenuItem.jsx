import { NavLink } from "react-router-dom"
import propTypes from 'prop-types'

export default function MyVitrinMenuItem({ href, Icon, name }) {
    return (
        <NavLink to={href}
            className={
                ({ isActive }) => [
                    isActive && `text-main`,
                    'transition-colors flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-500 !bg-opacity-30 py-2 px-1 rounded-md'
                ].join(" ")
            }>

            <Icon />
            <span className="pb-1">{name}</span>
        </NavLink>
    )
}


MyVitrinMenuItem.propTypes = {
    href: propTypes.string,
    Icon: propTypes.func,
    name: propTypes.string
}