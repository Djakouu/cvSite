import React from 'react'

import { Link, animateScroll as scroll } from "react-scroll"
import Sticky from 'react-stickynode'

import sprite from '../img/icons/sprite.svg'
import pageNavbarStyles from '../styles/components/pageNavbar.module.scss'
import langDeterminer from '../functions/langDeterminer'

const circleUp = sprite + '#icon-circle-up'

const PageNavbar = ({ location }) => {
    
    const scrollToTop = () => {
        scroll.scrollToTop(); 
    }

    const bottomBoundary = (location) => {
        if (location.pathname === "/")
            return 8450
        else if (location.pathname === "/fr")
            return 8600
        else 
            return 8650
    }

    return(
        <Sticky bottomBoundary={bottomBoundary(location)} >
            <nav className={pageNavbarStyles.navbar}>
                <ul className={pageNavbarStyles.navbarList}>
                    <li className={pageNavbarStyles.navbarListItemUp}></li>
                    <li className={pageNavbarStyles.navbarListItem}>
                        <Link 
                            activeClass={pageNavbarStyles.navbarListItemActive}
                            to="profile"
                            spy={true} 
                            smooth={true}
                            offset={0}
                            duration={1000}>
                            {langDeterminer("pageNavbarOne", location)} 
                        </Link>
                    </li>
                    <li className={pageNavbarStyles.navbarListItem}>
                        <Link 
                            activeClass={pageNavbarStyles.navbarListItemActive}
                            to="experience"
                            spy={true} 
                            smooth={true}
                            offset={0}
                            duration={1000}>
                            {langDeterminer("pageNavbarTwo", location)} 
                        </Link>
                    </li>
                    <li className={pageNavbarStyles.navbarListItem}>
                        <Link 
                            activeClass={pageNavbarStyles.navbarListItemActive}
                            to="abilities"
                            spy={true} 
                            smooth={true}
                            offset={0}
                            duration={1000}>
                            {langDeterminer("pageNavbarThree", location)} 
                        </Link>
                    </li>
                    <li className={pageNavbarStyles.navbarListItem}>
                        <Link 
                            activeClass={pageNavbarStyles.navbarListItemActive}
                            to="projects"
                            spy={true} 
                            smooth={true}
                            offset={0}
                            duration={1000}>
                            {langDeterminer("pageNavbarFour", location)} 
                        </Link>
                    </li>
                    <li className={pageNavbarStyles.navbarListItem}>
                        <Link 
                            activeClass={pageNavbarStyles.navbarListItemActive}
                            to="interest"
                            spy={true} 
                            smooth={true}
                            offset={0}
                            duration={1000}>
                            {langDeterminer("pageNavbarFive", location)} 
                        </Link>
                    </li>
                    <li className={pageNavbarStyles.navbarListItem}>
                        <Link 
                            activeClass={pageNavbarStyles.navbarListItemActive}
                            to="contact"
                            spy={true} 
                            smooth={true}
                            offset={0}
                            duration={1000}>
                            {langDeterminer("pageNavbarSix", location)} 
                        </Link>
                    </li>
                    
                </ul>
                <ul >
                    <li className={[pageNavbarStyles.navbarListItem, pageNavbarStyles.navbarListItemCircleUp].join(' ')}> 
                        <Link onClick={scrollToTop}>
                            <svg className={pageNavbarStyles.circleUp}>
                                <use href={circleUp}></use>
                            </svg> 
                        </Link>
                    </li>
                </ul>
            </nav> 
        </Sticky>
    
    )
}

export default PageNavbar

        // <Link className={pageNavbarStyles.link} href="#1" activeClassName={pageNavbarStyles.linkActive}>Profile </Link>
        // <Link className={pageNavbarStyles.link} href="#2" activeClassName={pageNavbarStyles.linkActive}>Experience </Link>
        // <Link className={pageNavbarStyles.link} href="#3" activeClassName={pageNavbarStyles.linkActive}>Abilities</Link>
        // <Link className={pageNavbarStyles.link} href="#4" activeClassName={pageNavbarStyles.linkActive}>Projects</Link>
        // <Link className={pageNavbarStyles.link} href="#5" activeClassName={pageNavbarStyles.linkActive}>Interest</Link>
        // <Link className={pageNavbarStyles.link} href="#6" activeClassName={pageNavbarStyles.linkActive}>Contact</Link>
        