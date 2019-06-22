import React from 'react'

import experiencePieceStyles from '../styles/functions/experiencePiece.module.scss'

const ExperiencePiece = ({ location, date, purpose, description}) => {
    return (
        <div className={experiencePieceStyles.experiencePiece}>
            <div className={experiencePieceStyles.experienceLocationDate}>
                <h2 className={experiencePieceStyles.experienceLocation}>{location}</h2>
                <p className={experiencePieceStyles.experienceDate}>{date}</p>
            </div>

            <div className={experiencePieceStyles.experiencePurposeDescription}>
                <h2 className={experiencePieceStyles.experiencePurpose}>{purpose}</h2>
                <p className={experiencePieceStyles.experienceDescription}>{description}</p>
            </div>
        </div>
    )
}

export default ExperiencePiece