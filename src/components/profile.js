import React from 'react'
import ScriptTag from 'react-script-tag';
import $ from 'jquery'
import { Waypoint } from 'react-waypoint';

import profileStyles from '../styles/components/profile.module.scss'
import PageNavbar from './pageNavbar';

import langDeterminer from '../functions/langDeterminer'



const Profile = ({ location }) => {

    const dataDeterminer = (ability) => {
        return langDeterminer(ability, location)
    }

    const handleEnter = () => {
        $(`.${profileStyles.figure}`).addClass(`${profileStyles.jsWp1}`)
    }

    return (
        <div className={profileStyles.profile} id="profile">
            <PageNavbar location={location} />
            <div className={profileStyles.jumbotron}>
                <div className={profileStyles.container}>
                    <h1 className={profileStyles.headingPrimaryMain} id={profileStyles.jsWp1}>{dataDeterminer('profileTitle')}</h1>
                    <p className={profileStyles.subtitle}>{dataDeterminer('profileSubtitle')}</p>
                </div>

                <div className={profileStyles.aboutDetails}>

                    <div className={profileStyles.about}>
                        <h1 className={profileStyles.headingPrimarySub}>{dataDeterminer('aboutTitle')}</h1>
                        
                        <Waypoint onEnter={handleEnter}
                                  bottomOffset='50%'>
                            <figure className={profileStyles.figure} >
                                <img src={`../../copenhagen.jpg`} alt="Profile pic" className={profileStyles.profilePic} />
                                <figcaption className={profileStyles.figCaption}>Mohamed Kimouche</figcaption>
                            </figure>
                        </Waypoint>
                            
                            <p className={profileStyles.aboutText}>
                                {dataDeterminer('aboutText')}
                            </p>
                    </div>

                    <div className={profileStyles.details}>
                        <h1 className={profileStyles.headingPrimarySub}>{dataDeterminer('detailsTitle')}</h1>
                        <div className={profileStyles.detailsInfo}>
                            <div className={profileStyles.detailsInfoName}>
                                <h2>{dataDeterminer('nameTitle')}:</h2>
                                <p>Mohamed Kimouche</p>
                            </div>
                            <div className={profileStyles.detailsInfoName}>
                                <h2>{dataDeterminer('nicknameTitle')}:</h2>
                                <p>Djakou Kim</p>
                            </div>
                            <div className={profileStyles.detailsInfoAge}>
                                <h2>{dataDeterminer('ageTitle')}:</h2>
                                <p>28</p>
                            </div>
                            <div className={profileStyles.detailsInfoAdress}>
                                <h2>{dataDeterminer('adressTitle')}:</h2>
                                <p className={profileStyles.detailsAdress}>13 Rue du Bois Taillis <br /> 38610 Gières <br /> {dataDeterminer('adressText')}</p>
                            </div>
                        </div>
                        <div className={profileStyles.media}>
                            <a href="https://twitter.com/mz_kimouche?ref_src=twsrc%5Etfw" class="twitter-follow-button"  data-size="large" data-show-screen-name="false" data-show-count="false">Follow</a>
                            <ScriptTag async src="https://platform.twitter.com/widgets.js" type="text/javascript" charset="utf-8"></ScriptTag>                            
                        </div>

                    </div>

                </div>

                <div className={profileStyles.giftRequest}>
                    {dataDeterminer('finalLine')}
                </div>

            </div>
        </div>
        
    )
}

export default Profile