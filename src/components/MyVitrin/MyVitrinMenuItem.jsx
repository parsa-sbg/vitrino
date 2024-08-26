import { NavLink } from "react-router-dom"
import propTypes from 'prop-types'

export default function MyVitrinMenuItem({ href, Icon, name }) {
    return (
        <NavLink to={href}
            className={
                ({ isActive }) => [
                    isActive && `text-main`,
                    'transition-colors duration-200 flex items-center gap-2 mt-5'
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