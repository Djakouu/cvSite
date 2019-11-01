import React from 'react'
import { Link } from 'gatsby';

import navbarStyles from '../styles/components/navbar.module.scss'

const Navbar = ({component}) => {
     
    const cn = component === 'header' ? navbarStyles.navbarHeader : navbarStyles.navbarFooter

    return(
            <nav className={[navbarStyles.navbar, cn].join(' ')}>
                <Link className={navbarStyles.link} to={`/`} activeClassName={navbarStyles.linkActive} state={{ "page": "En"}}>| English </Link>
                <Link className={navbarStyles.link} to={`/fr`} activeClassName={navbarStyles.linkActive} state={{ "page": "Fr"}}>| Français </Link>
                <Link className={navbarStyles.link} to={`/de`} activeClassName={navbarStyles.linkActive} state={{ "page": "Gr"}}>| Deutsch</Link>
            </nav>
    )
}

export default Navbar