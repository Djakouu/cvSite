import React from 'react'

import projectsStyles from '../styles/components/projects.module.scss'
import sprite from '../img/icons/sprite.svg'
import langDeterminer from '../functions/langDeterminer'

const newTab = sprite + '#icon-new-tab'

const Projects = ({ location }) => {

    const dataDeterminer = (ability) => {
        return langDeterminer(ability, location)
    }

    return (
        <div className={projectsStyles.projects} id="projects">

            <div className={projectsStyles.jumbotron}>

                <div className={projectsStyles.container}>
                    <h1 className={projectsStyles.headingPrimaryMain}>{dataDeterminer("projectsTitle")}</h1>
                    <blockquote className={projectsStyles.subtitle}>{dataDeterminer("projectsQuote")}
                        <p>- Ed Cole</p>
                    </blockquote>                
                </div>

                <div className={projectsStyles.projectsCards}>
                    <a href='http://localhost:8000/fr' target='_blank' rel="noopener noreferrer">
                        <figure className={[projectsStyles.projectsCard, projectsStyles.projectsCard1].join(' ')}>
                            <img src={'cv.png'} alt="Online cv project" className={[projectsStyles.projectsCardBgImg, projectsStyles.projectsCardBgImg1].join(' ')} />  
                            <svg className={projectsStyles.projectsCardIcon}>
                                <use href={newTab}></use>
                            </svg>
                            <figcaption className={[projectsStyles.projectsCardFigcaption, projectsStyles.projectsCardFigcaption1].join(' ')}>
                                <h1 className={[projectsStyles.projectsCardFigcaptionTitle, projectsStyles.projectsCardFigcaptionTitle1].join(' ')}>interactiv resume</h1>
                                <div className={[projectsStyles.projectsCardFigcaptionDetails, projectsStyles.projectsCardFigcaptionDetails1].join(' ')}>
                                    <p  className={projectsStyles.projectsCardFigcaptionDetailsDesc}>An online interactiv resume</p>
                                    <br />
                                    <p>Tags:</p>
                                    <p className={projectsStyles.projectsCardFigcaptionDetailsTags}>Gatsby, React, Sass</p>
                                </div> 
                            </figcaption>
                        </figure>
                    </a>
                    
                    
                    <a href='http://www.pascalvangemert.nl' target='_blank' rel="noopener noreferrer">
                        <figure className={[projectsStyles.projectsCard, projectsStyles.projectsCard2].join(' ')}>
                            <img src={'nexter.png'} alt="Nexter project" className={[projectsStyles.projectsCardBgImg, projectsStyles.projectsCardBgImg2].join(' ')} />  
                            <svg className={projectsStyles.projectsCardIcon}>
                                <use href={newTab}></use>
                            </svg>
                            <figcaption className={[projectsStyles.projectsCardFigcaption, projectsStyles.projectsCardFigcaption2].join(' ')}>
                                <h1 className={[projectsStyles.projectsCardFigcaptionTitle, projectsStyles.projectsCardFigcaptionTitle2].join(' ')}>Nexter</h1>
                                <div className={[projectsStyles.projectsCardFigcaptionDetails, projectsStyles.projectsCardFigcaptionDetails2].join(' ')}>
                                    <p className={projectsStyles.projectsCardFigcaptionDetailsDesc}>A virtual retail agency</p>
                                    <br />
                                    <p>Tags:</p>
                                    <p className={projectsStyles.projectsCardFigcaptionDetailsTags}>Advanced HTLM 5, CSS 3, SASS</p>
                                </div> 
                            </figcaption>
                        </figure>
                    </a>

                    <a href='http://www.pascalvangemert.nl' target='_blank' rel="noopener noreferrer">
                        <figure className={[projectsStyles.projectsCard, projectsStyles.projectsCard3].join(' ')}>
                            <img src={'omnifood.png'} alt="Omnifood project" className={[projectsStyles.projectsCardBgImg, projectsStyles.projectsCardBgImg3].join(' ')} />  
                            <svg className={projectsStyles.projectsCardIcon}>
                                <use href={newTab}></use>
                            </svg>
                            <figcaption className={[projectsStyles.projectsCardFigcaption, projectsStyles.projectsCardFigcaption3].join(' ')}>
                                <h1 className={[projectsStyles.projectsCardFigcaptionTitle, projectsStyles.projectsCardFigcaptionTitle3].join(' ')}>Omnifood</h1>
                                <div className={[projectsStyles.projectsCardFigcaptionDetails, projectsStyles.projectsCardFigcaptionDetails3].join(' ')}>
                                    <p>A virtual healthy food place</p>
                                    <br />
                                    <p>Tags:</p>
                                    <p>Advanced HTLM 5, CSS 3, SASS</p>
                                </div> 
                            </figcaption>
                        </figure>
                    </a>

                    <a href='https://kim-expensify-app.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                        <figure className={[projectsStyles.projectsCard, projectsStyles.projectsCard4].join(' ')}>
                            <img src={'expensify.png'} alt="Expensify app project" className={[projectsStyles.projectsCardBgImg, projectsStyles.projectsCardBgImg4].join(' ')} />  
                            <svg className={projectsStyles.projectsCardIcon}>
                                <use href={newTab}></use>
                            </svg>
                            <figcaption className={[projectsStyles.projectsCardFigcaption, projectsStyles.projectsCardFigcaption4].join(' ')}>
                                <h1 className={[projectsStyles.projectsCardFigcaptionTitle, projectsStyles.projectsCardFigcaptionTitle4].join(' ')}>Expensify</h1>
                                <div className={[projectsStyles.projectsCardFigcaptionDetails, projectsStyles.projectsCardFigcaptionDetails4].join(' ')}>
                                    <p>Expenses app</p>
                                    <br />
                                    <p>Tags:</p>
                                    <p>Advanced HTLM 5, CSS 3, SASS</p>
                                </div> 
                            </figcaption>
                        </figure>
                    </a>

                    <a href='http://www.pascalvangemert.nl' target='_blank' rel="noopener noreferrer">
                        <figure className={[projectsStyles.projectsCard, projectsStyles.projectsCard5].join(' ')}>
                            <img src={'forkify.png'} alt="Forkify app project" className={[projectsStyles.projectsCardBgImg, projectsStyles.projectsCardBgImg5].join(' ')} />  
                            <svg className={projectsStyles.projectsCardIcon}>
                                <use href={newTab}></use>
                            </svg>
                            <figcaption className={[projectsStyles.projectsCardFigcaption, projectsStyles.projectsCardFigcaption5].join(' ')}>
                                <h1 className={[projectsStyles.projectsCardFigcaptionTitle, projectsStyles.projectsCardFigcaptionTitle5].join(' ')}>Forkify</h1>
                                <div className={[projectsStyles.projectsCardFigcaptionDetails, projectsStyles.projectsCardFigcaptionDetails5].join(' ')}>
                                    <p>Recipes app</p>
                                    <br />
                                    <p>Tags:</p>
                                    <p>Advanced HTLM 5, CSS 3, SASS</p>
                                </div> 
                            </figcaption>
                        </figure>
                    </a>

                    <a href='https://kim-chat-app.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                        <figure className={[projectsStyles.projectsCard, projectsStyles.projectsCard6].join(' ')}>
                            <img src={'chat.png'} alt="Chat app project" className={[projectsStyles.projectsCardBgImg, projectsStyles.projectsCardBgImg6].join(' ')} />  
                            <svg className={projectsStyles.projectsCardIcon}>
                                <use href={newTab}></use>
                            </svg>
                            <figcaption className={[projectsStyles.projectsCardFigcaption, projectsStyles.projectsCardFigcaption6].join(' ')}>
                                <h1 className={[projectsStyles.projectsCardFigcaptionTitle, projectsStyles.projectsCardFigcaptionTitle6].join(' ')}>Chat app</h1>
                                <div className={[projectsStyles.projectsCardFigcaptionDetails, projectsStyles.projectsCardFigcaptionDetails6].join(' ')}>
                                    <p>A chat app</p>
                                    <br />
                                    <p>Tags:</p>
                                    <p>Advanced HTLM 5, CSS 3, SASS</p>
                                </div> 
                            </figcaption>
                        </figure>
                    </a>
                </div>
                

            </div>

        </div>
        
    )
}

export default Projects
