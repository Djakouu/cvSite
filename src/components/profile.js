import React from 'react'
import ScriptTag from 'react-script-tag';

import profileStyles from '../styles/components/profile.module.scss'

const Profile = ({ title, subtitle }) => {
    return (
        <div className={profileStyles.profile}>

            <div className={profileStyles.jumbotron}>

                <div className={profileStyles.container}>
                    <h1 className={profileStyles.headingPrimaryMain}>{title}</h1>
                    <p className={profileStyles.subtitle}>{subtitle}</p>
                </div>

                <div className={profileStyles.aboutDetails}>

                    <div className={profileStyles.about}>
                        <h1 className={profileStyles.headingPrimarySub}>About</h1>
                        
                        <div>
                            <figure className={profileStyles.figure}>
                                <img src={'copenhagen.jpg'} alt="Profile pic" className={profileStyles.profilePic}/>
                                <figcaption className={profileStyles.figCaption}>Mohamed Kimouche</figcaption>
                            </figure>
                            <p className={profileStyles.aboutText}>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'. </p>
                        </div>
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
                            <a href="https://twitter.com/mz_kimouche?ref_src=twsrc%5Etfw" class="twitter-follow-button"  data-size="large" data-show-screen-name="false" data-show-count="false">Follow</a><ScriptTag async src="https://platform.twitter.com/widgets.js" type="text/javascript" charset="utf-8"></ScriptTag>
                            <ScriptTag src="https://platform-api.sharethis.com/js/sharethis.js#property=5d0babad72b51c001144b86b&product=inline-follow-buttons"></ScriptTag>
                            <div class="sharethis-inline-follow-buttons" className={profileStyles.linkedIn}></div>
                        </div>

                    </div>

                </div>

                <div className={profileStyles.giftRequest}>
                    <p>A must-know about me is my love for flags. If you think you are able to offer me a <span className={profileStyles.toolip}>150 x 90 cm<span className={profileStyles.toolipText}>60x35"</span></span> flag of your country my adress is found just above!</p>
                </div>

            </div>

        </div>
        
    )
}

export default Profile