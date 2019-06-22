import React from 'react'

import abilitiesStyles from '../styles/components/abilities.module.scss'
import Ability from '../functions/Ability'

const Abilities = ({ title, subtitle }) => {
    return (
        <div className={abilitiesStyles.abilities}>

            <div className={abilitiesStyles.jumbotron}>

                <div className={abilitiesStyles.container}>
                    <h1 className={abilitiesStyles.headingPrimaryMain}>{title}</h1>
                    <p className={abilitiesStyles.subtitle}>{subtitle}</p>
                </div>

                <div className={abilitiesStyles.skillsToolsLanguages}>

                    <div className={abilitiesStyles.skills}>

                        <h1 className={abilitiesStyles.headingPrimarySub}>Skills</h1>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="HTML 5"
                                starsFull="5"
                            />
                            <Ability 
                                ability="CSS 3"
                                starsFull="5"
                            />
                            <Ability 
                                ability="Javascript"
                                starsFull="4"
                            />
                            <Ability 
                                ability="React"
                                starsFull="3"
                            />
                        </div>
                        
             
                    </div>

                    <div className={abilitiesStyles.tools}>
                        <h1 className={abilitiesStyles.headingPrimarySub}>Tools</h1>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="JS Code"
                                starsFull="5"
                            />
                            <Ability 
                                ability="postman"
                                starsFull="2"
                            />
                            <Ability 
                                ability="SendGrid"
                                starsFull="2"
                            />
                            <Ability 
                                ability="prisma"
                                starsFull="2"
                            />
                        </div>
                        
                    </div>

                    <div className={abilitiesStyles.languages}>
                        <h1 className={abilitiesStyles.headingPrimarySub}>Languages</h1>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability
                                ability="English"
                                starsFull="5"
                            />
                            <Ability
                                ability="French"
                                starsFull="5"
                            />
                            <Ability
                                ability="Arabic"
                                starsFull="5"
                            />
                            <Ability
                                ability="German"
                                starsFull="2"
                            />
                        </div>
                    </div>

                </div>
                

            </div>

        </div>
        
    )
}

export default Abilities
