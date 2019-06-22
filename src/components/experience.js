import React from 'react'

import ExperiencePiece from '../functions/ExperiencePiece'
import experienceStyles from '../styles/components/experience.module.scss'

const Experience = ({ title, subtitle }) => {
    return (
        <div className={experienceStyles.experience}>

            <div className={experienceStyles.jumbotron}>

                <div className={experienceStyles.container}>
                    <h1 className={experienceStyles.headingPrimaryMain}>{title}</h1>
                    <p className={experienceStyles.subtitle}>{subtitle}</p>
                </div>

                <div className={experienceStyles.educationCareer}>

                    <div className={experienceStyles.education}>

                        <h1 className={experienceStyles.headingPrimarySub}>Education</h1>
                        <ExperiencePiece 
                            location="Grenoble-Alpes University"
                            date="2019 - 2020"
                            purpose="Master in mathematics and computer science"
                            description="Coming soon..."
                        />
                        <ExperiencePiece 
                            location="Grenoble-Alpes University"
                            date="2014 - 2015"
                            purpose="Master in energy economics"
                            description="Coming soon..."
                        />
                        <ExperiencePiece 
                            location="M'Hamed-Bougara University"
                            date="2013 - 2014"
                            purpose="Master in energy economics"
                            description="Coming soon..."
                        />
                        <ExperiencePiece 
                            location="The New High school"
                            date="2007 - 2008"
                            purpose="High school diploma"
                            description="Coming soon..."
                        />
                            
                        
                        </div>

                    <div className={experienceStyles.career}>
                        <h1 className={experienceStyles.headingPrimarySub}>Career</h1>
                        <ExperiencePiece 
                            location="CNRS"
                            date="June 2015 - September 2015"
                            purpose="Internship"
                            description="Coming soon..."
                        />
                    </div>

                </div>
                

            </div>

        </div>
        
    )
}

export default Experience

