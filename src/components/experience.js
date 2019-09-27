import React from 'react'

import ExperiencePiece from '../functions/ExperiencePiece'
import experienceStyles from '../styles/components/experience.module.scss'

import langDeterminer from '../functions/langDeterminer'


const Experience = ({ location }) => {

    const dataDeterminer = (ability) => {
        return langDeterminer(ability, location)
    }

    return (
        <div className={experienceStyles.experience} id="experience">

            <div className={experienceStyles.jumbotron}>

                <div className={experienceStyles.container}>
                    <h1 className={experienceStyles.headingPrimaryMain}>{dataDeterminer("experienceTitle")}</h1>
                    <div className={experienceStyles.blockquoteContainer}>
                        <blockquote className={experienceStyles.subtitle}>{dataDeterminer("experienceQuote")}
                        <p>- John D. Rockefeller</p>
                        </blockquote>
                    </div>
                </div>

                <div className={experienceStyles.educationCareer}>

                    <div className={experienceStyles.education}>

                        <h1 className={experienceStyles.headingPrimarySub}>{dataDeterminer("educationTitle")}</h1>
                        <ExperiencePiece 
                            location={dataDeterminer('educationOneLocation')}
                            date="2019 - 2020"
                            purpose={dataDeterminer('educationOnePurpose')}
                            description={dataDeterminer('educationOneDescription')}
                        />
                        <ExperiencePiece 
                            location={dataDeterminer('educationTwoLocation')}
                            date="2015 - 2019"
                            purpose={dataDeterminer('educationTwoPurpose')}
                            description={dataDeterminer('educationTwoDescription')}
                        />
                        <ExperiencePiece 
                            location={dataDeterminer('educationThreeLocation')}
                            date="2014 - 2015"
                            purpose={dataDeterminer('educationThreePurpose')}
                            description={dataDeterminer('educationThreeDescription')}
                        />
                        <ExperiencePiece 
                            location={dataDeterminer('educationFourLocation')}
                            date="2008 - 2014"
                            purpose={dataDeterminer('educationFourPurpose')}
                            description={dataDeterminer('educationFourDescription')}
                        />
                        <ExperiencePiece 
                            location={dataDeterminer('educationFiveLocation')}
                            date="2007 - 2008"
                            purpose={dataDeterminer('educationFivePurpose')}
                            description={dataDeterminer('educationFiveDescription')}
                        />
                            
                        
                        </div>

                    <div className={experienceStyles.career}>
                        <h1 className={experienceStyles.headingPrimarySub}>{dataDeterminer("careerTitle")}</h1>
                        <ExperiencePiece 
                            location={dataDeterminer('careerOneLocation')}
                            date={dataDeterminer('careerOneDate')}
                            purpose={dataDeterminer('careerOnePurpose')}
                            description={dataDeterminer('careerOneDescription')}
                        />
                        <ExperiencePiece 
                            location={dataDeterminer('careerTwoLocation')}
                            date={dataDeterminer('careerTwoDate')}
                            purpose={dataDeterminer('careerTwoPurpose')}
                            description={dataDeterminer('careerTwoDescription')}
                        />
                    </div>
                    <div className={experienceStyles.activities}>
                        <h1 className={experienceStyles.headingPrimarySub}>{dataDeterminer("activitiesTitle")}</h1>
                        <ExperiencePiece 
                            location={dataDeterminer('activityOneLocation')}
                            date={`2017 - 2019 (${dataDeterminer('activityOneDate')})`}
                            purpose={dataDeterminer('activityOnePurpose')}
                            description={dataDeterminer('activityOneDescription')}
                        />
                        <ExperiencePiece 
                            location={dataDeterminer('activityTwoLocation')}
                            date={`2019 (${dataDeterminer('activityTwoDate')})`}
                            purpose={dataDeterminer('activityTwoPurpose')}
                            description={dataDeterminer('activityTwoDescription')}
                        />
                        <ExperiencePiece 
                            location={dataDeterminer('activityThreeLocation')}
                            date={`2017 - 2019 (${dataDeterminer('activityThreeDate')})`}
                            purpose={dataDeterminer('activityThreePurpose')}
                            description={dataDeterminer('activityThreeDescription')}
                        />
                        <ExperiencePiece 
                            location={dataDeterminer('activityFourLocation')}
                            date={`2016 - 2017 (${dataDeterminer('activityFourDate')})`}
                            purpose={dataDeterminer('activityFourPurpose')}
                            description={dataDeterminer('activityFourDescription')}
                        />
                    </div>

                </div>
                

            </div>

        </div>
        
    )
}

export default Experience

