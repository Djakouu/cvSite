import React from 'react'
import footerStyles from '../styles/components/footer.module.scss'
import sprite from '../img/icons/sprite.svg'
import ScriptTag from 'react-script-tag/lib/ScriptTag';
import Navbar from './navbar';
import langDeterminer from '../functions/langDeterminer'

const twitterIcon = sprite + '#icon-twitter1'
const linkedInIcon = sprite + '#icon-linkedin'
const emailIcon = sprite + '#icon-email'

const Footer = ({ location }) => {

    const dataDeterminer = (ability) => {
        return langDeterminer(ability, location)
    }
    
    return (
        <footer className={footerStyles.footer} id="contact">
        
            <div className={footerStyles.jumbotron}>
            
                <div className={footerStyles.container}>
                    <h1 className={footerStyles.headingPrimaryMain}>{dataDeterminer("footerTitle")}</h1>
                    <blockquote className={footerStyles.subtitle}>{dataDeterminer("footerQuote")}
                        <p>- Henry Ford</p>
                    </blockquote>
                </div>

                <div className={footerStyles.contactGroup}>
                
                    <div className={footerStyles.contact}>
                        <a className={footerStyles.contactLinks} href='https://twitter.com/mz_kimouche' target='blank'>
                            <svg className={footerStyles.contactLinksIcon}>
                                <use href={twitterIcon}></use>
                            </svg>  
                            <p className={footerStyles.contactLinksTxt} >twitter.com/mz_kimouche</p>
                        </a>
                        <a className={footerStyles.contactLinks} href="mailto:kimouche-mz@hotmail.fr?subject=Online interactive resume" target='blank'>
                            <svg className={footerStyles.contactLinksIcon}>
                                <use href={emailIcon}></use>
                            </svg>
                            <p className={footerStyles.contactLinksTxt} >kimouche-mz@hotmail.fr</p>
                        </a>
                        <a className={footerStyles.contactLinks}  href='https://www.linkedin.com/in/mohamed-kimouche-400802189' target="blank">
                            <svg className={footerStyles.contactLinksIcon}>
                                <use href={linkedInIcon}></use>
                            </svg>
                            <p className={footerStyles.contactLinksTxt}>linkedin.com/in/mohamed-kimouche</p>
                        </a>
                        
                        
                    </div>
                </div>

                <div className={footerStyles.likes}>
                    <div className={footerStyles.likesTwitter}>
                        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-show-count="true">Tweet</a>
                        <ScriptTag async src="https://platform.twitter.com/widgets.js" charset="utf-8"></ScriptTag>
                    </div>

                </div>
            </div>
            <Navbar component='Footer' />
                
        </footer>
    )
}

export default Footer