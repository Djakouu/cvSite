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

                        <h1 className={abilitiesStyles.headingPrimarySub}>{dataDeterminer('skillsTitle')}</h1>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillOne')}</p>
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
                                ability="SQL"
                                starsFull="3"
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
                                starsFull="2"
                            />
                            <Ability 
                                ability="PHP"
                                starsFull="2"
                            />
                            
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillTwo')}</p>
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
                                ability="Socket.io"
                                starsFull="3"
                            />
                            <Ability 
                                ability="Redux"
                                starsFull="2"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillThree')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Express.js"
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillFour')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Bootstrap"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillFourBis')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Jest"
                                starsFull="3"
                            />
                            <Ability 
                                ability="JUnit"
                                starsFull="2"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillFive')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="GatsbyJS"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillSix')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Postman"
                                starsFull="2"
                            />
                            <Ability 
                                ability="Firebase"
                                starsFull="2"
                            />
                            <Ability 
                                ability=".NET"
                                starsFull="0"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillSeven')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillEight')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillNine')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Scilab"
                                starsFull="2"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('skillTen')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                            ability="Web Design"
                            starsFull="3"
                            />
                        </div>
                        
                    </div>

                    <div className={abilitiesStyles.tools}>
                        <h1 className={abilitiesStyles.headingPrimarySub}>{dataDeterminer('toolsTitle')}</h1>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolOne')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolOneBis')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="IntelliJ"
                                starsFull="2"
                            />
                            <Ability 
                                ability="Eclipse"
                                starsFull="2"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolTwo')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolThree')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Git"
                                starsFull="3"
                            />
                        </div>
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolFour')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolFive')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolSix')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolSeven')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolEight')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolNine')}</p>
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
                        <p className={abilitiesStyles.separationTitle}>{dataDeterminer('toolTen')}</p>
                        <div className={abilitiesStyles.abilityGroups}>
                            <Ability 
                                ability="Stripe"
                                starsFull="0"
                            />
                        </div>
                    </div>

                    <div className={abilitiesStyles.languages}>
                        <h1 className={abilitiesStyles.headingPrimarySub}>{dataDeterminer('langTitle')}</h1>
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
