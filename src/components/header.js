import React from 'react'
import indexStyles from '../styles/pages/index.module.scss'
import Navbar from '../components/navbar'
import { Link } from 'react-scroll';

const Header = ({ subtitle }) => {
    return (
        <header className={indexStyles.header} id="header">
            <Navbar component='header' />

            <div className={indexStyles.headerBgImg}>
            </div>

            <div className={indexStyles.headerText}>
                <div className={indexStyles.headerLogoBox}>
                    <img src={`../../logo.png`} alt="logo" className={indexStyles.headerLogo} />
                </div>

                <Link to="profile" 
                          smooth={true}
                          duration={1000}>
                    <div className={indexStyles.container}>
                        <h1 className={indexStyles.headerTitle}>
                            Mohamed Kimouche
                        </h1>
                        <h2 className={indexStyles.headerSubtitle}>{subtitle}</h2>
                    </div>
                </Link>
            </div>

        </header>
    )
}

export default Header