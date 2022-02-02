import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./h5.module.css"

function Header() {
    return (
        <div className={s.containerLinks}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.navLinkActive : s.navLink} >PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive})=> isActive ? s.navLinkActive : s.navLink}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive})=> isActive ? s.navLinkActive : s.navLink}>Junior Plus</NavLink>

        </div>
    )
}

export default Header
