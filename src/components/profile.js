import React from 'react'
import ScriptTag from 'react-script-tag';
import $ from 'jquery'
import { Waypoint } from 'react-waypoint';

import profileStyles from '../styles/components/profile.module.scss'
import PageNavbar from './pageNavbar';

import langDeterminer from '../functions/langDeterminer'



const Profile = ({ location }) => {
    
    const handleEnter = () => {
        $(`.${profileStyles.figure}`).addClass(`${profileStyles.jsWp1}`)
    }

    return (
        <div className={profileStyles.profile} id="profile">
            <PageNavbar location={location} />
            <div className={profileStyles.jumbotron}>
                <div className={profileStyles.container}>
                    <h1 className={profileStyles.headingPrimaryMain} id={profileStyles.jsWp1}>{langDeterminer('profileTitle', location)}</h1>
                    <p className={profileStyles.subtitle}>{langDeterminer('profileSubtitle', location)}</p>
                </div>

                <div className={profileStyles.aboutDetails}>

                    <div className={profileStyles.about}>
                        <h1 className={profileStyles.headingPrimarySub}>About</h1>
                        
                        <Waypoint onEnter={handleEnter}
                                  bottomOffset='50%'>
                            <figure className={profileStyles.figure} >
                                <img src={'copenhagen.jpg'} alt="Profile pic" className={profileStyles.profilePic} />
                                <figcaption className={profileStyles.figCaption}>Mohamed Kimouche</figcaption>
                            </figure>
                        </Waypoint>
                            
                            <p className={profileStyles.aboutText}>
                                Unusual, economist 🏦 📈 and full-stack web developer 🖥️ ⌨️ 
                                Curious to always learn more, eager for challenges 
                                and ready for more after the extra mile 🚨 🚀
                                <br/>
                                <br/>
                                I am proactive, enterprising and I love teamwork.
                                "If everyone is moving forward together, then success takes care of itself." – Henry Ford 
                            </p>
                    </div>

                    <div className={profileStyles.details}>
                        <h1 className={profileStyles.headingPrimarySub}>Details</h1>
                        <h2>Name:</h2>
                        <p>Mohamed Kimouche</p>
                        <h2>Age:</h2>
                        <p>28</p>
                        <h2>Adress:</h2>
                        <p className={profileStyles.detailsAdress}>13 Rue du Bois Taillis <br /> 38610 Gières <br /> France, Europe</p>
                        
                        <div className={profileStyles.media}>
                            <a href="https://twitter.com/mz_kimouche?ref_src=twsrc%5Etfw" class="twitter-follow-button"  data-size="large" data-show-screen-name="false" data-show-count="false">Follow</a>
                            <ScriptTag async src="https://platform.twitter.com/widgets.js" type="text/javascript" charset="utf-8"></ScriptTag>                            
                        </div>

                    </div>

                </div>

                <div className={profileStyles.giftRequest}>
                    <p>
                        A must-know about me is my love for flags. 
                        If you think you are able to offer me a &nbsp;
                        <span className={profileStyles.toolip}>150 x 90 cm &nbsp;
                            <span className={profileStyles.toolipText}>60x35"</span>
                        </span>
                        flag or less big of your country my adress is found just above!
                    </p>
                </div>

            </div>
        </div>
        
    )
}

export default Profile