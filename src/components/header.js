import React from 'react'
import indexStyles from '../styles/pages/index.module.scss'
import { Link } from 'gatsby';

const Header = ({ subtitle }) => {
    return (
        <header className={indexStyles.header}>

            <nav className={indexStyles.navbar}>
                <Link className={indexStyles.link} to="/" activeClassName={indexStyles.linkActive}>| English </Link>
                <Link className={indexStyles.link} to="/fr" activeClassName={indexStyles.linkActive}>| French </Link>
                <Link className={indexStyles.link} to="/gr" activeClassName={indexStyles.linkActive}>| German</Link>
            </nav> 

            <div className={indexStyles.headerBgImg}>
            </div>

            <div className={indexStyles.headerLogoBox}>
                <img src={'logo.png'} alt="logo" className={indexStyles.headerLogo} />
            </div>

            <div className={indexStyles.container}>
                <h1 className={indexStyles.headerTitle}>Mohamed Kimouche</h1>
                <h2 className={indexStyles.headerSubtitle}>{subtitle}</h2>
            </div>

        </header>
    )
}

export default Header