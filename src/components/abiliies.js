import React from 'react'

import abilitiesStyles from '../styles/components/abilities.module.scss'
import Ability from '../functions/Ability'
import langDeterminer from '../functions/langDeterminer'

const Abilities = ({ location }) => {

    const dataDeterminer = (ability) => {
        return langDeterminer(ability, location)
    } 
    
    return (
        <div className={abilitiesStyles.abilities} id="abilities">

            <div className={abilitiesStyles.jumbotron}>

                <div className={abilitiesStyles.container}>
                    <h1 className={abilitiesStyles.headingPrimaryMain}>{dataDeterminer('abilitiesTitle')}</h1>
                    <blockquote className={abilitiesStyles.subtitle}>{dataDeterminer('abilitiesQuote')}
                    <p>- Steve Jobs</p>
                    </blockquote>
                    
                </div>

                <div className={abilitiesStyles.skillsToolsLanguages}>

                    <div className={abilitiesStyles.skills}>

                        <h1 className={abilitiesStyles.headingPrimarySub}>Skills</h1>
                        <p className={abilitiesStyles.separationTitle}>Languages</p>
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
                                ability="SASS"
                                starsFull="5"
                            />
                            <Ability 
                                ability="Javascript"
                                starsFull="4"
                            />
                            <Ability 
                                ability="GraphQL"
                                starsFull="4"
                            />
                            <Ability 
                                ability="C++"
                                starsFull="2"
                            />
                            <Ability 
                                ability="Python"
                                starsFull="2"
                            />
                            <Ability 
                                ability="Java"
                                starsFull="1"
                            />
                            <Ability 
                                ability="PHP"
                                starsFull="0"
                            />
                            <Ability 
                                ability="SQL"
                                starsFull="0"
                            />
                            
                        </div>
                        <p className={abilitiesStyles.separationTitle}>JS runtime & libraries</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Node.js"
                                starsFull="4"
                            />
                            <Ability 
                                ability="jQuery"
                                starsFull="3"
                            />
                            <Ability 
                                ability="React"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Apollo Client"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Socket.IO"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Redux"
                                starsFull="2"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>JS frameworks</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Express.js"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Jest"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Enzyme"
                                starsFull="3"
                            />
                            <Ability 
                                ability="ESLint"
                                starsFull="2"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>CSS frameworks</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Bootstrap"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Site generators</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="GatsbyJS"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>dev platform</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Postman"
                                starsFull="2"
                            />
                            <Ability 
                                ability="firebase"
                                starsFull="2"
                            />
                            <Ability 
                                ability=".NET"
                                starsFull="0"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Template engines</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Handlebars"
                                starsFull="1"
                            />
                            <Ability 
                                ability="Pug"
                                starsFull="0"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>CMS</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Contentful"
                                starsFull="3"
                            />
                            <Ability 
                                ability="WordPress"
                                starsFull="1"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Software</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Scilab"
                                starsFull="2"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Other</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                            ability="Web design"
                            starsFull="3"
                            />
                        </div>
                        
                    </div>

                    <div className={abilitiesStyles.tools}>
                        <h1 className={abilitiesStyles.headingPrimarySub}>Tools</h1>
                        <p className={abilitiesStyles.separationTitle}>Code editors</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="VS Code"
                                starsFull="5"
                            />
                            <Ability 
                                ability="Brackets"
                                starsFull="4"
                            />
                            <Ability 
                                ability="Sublime"
                                starsFull="4"
                            />
                            <Ability 
                                ability="Atom"
                                starsFull="4"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Dev tools</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Chrome DevTools"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Firefox Developer Tools"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Version control</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Git"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>JS compiler & bundler</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="babel"
                                starsFull="4"
                            />
                            <Ability 
                                ability="Webpack"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Parcel"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Package managers</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="npm"
                                starsFull="4"
                            />
                            <Ability 
                                ability="yarn"
                                starsFull="4"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Databases</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="MongoDB"
                                starsFull="4"
                            />
                            <Ability 
                                ability="PostgreSQL"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>ODM, ORM & Prisma</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Mongoose"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Prisma"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>MS Office</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Word"
                                starsFull="5"
                            />
                            <Ability 
                                ability="Powerpoint"
                                starsFull="5"
                            />
                            <Ability 
                                ability="Excel & VBA"
                                starsFull="5"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Mailing</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="SendGrid"
                                starsFull="1"
                            />
                            <Ability 
                                ability="Nodemailer"
                                starsFull="0"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>Payment platforms</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Stripe"
                                starsFull="0"
                            />
                        </div>
                    </div>

                    <div className={abilitiesStyles.languages}>
                        <h1 className={abilitiesStyles.headingPrimarySub}>Languages</h1>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability
                                ability={dataDeterminer("langOne")}
                                starsFull="5"
                            />
                            <Ability
                                ability={dataDeterminer("langTwo")}
                                starsFull="5"
                            />
                            <Ability
                                ability={dataDeterminer("langThree")}
                                starsFull="5"
                            />
                            <Ability
                                ability={dataDeterminer("langFour")}
                                starsFull="2"
                            />
                            <Ability
                                ability={dataDeterminer("langFive")}
                                starsFull="0"
                            />
                            <Ability
                                ability={dataDeterminer("langSix")}
                                starsFull="0"
                            />
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
        
    )
}

export default Abilities
