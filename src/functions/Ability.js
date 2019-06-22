import React from 'react'

import AddStar from './AddStar'
import abilityStyles from '../styles/functions/ability.module.scss'

const ExperiencePiece = ({ ability, starsFull }) => {
    return (
            <div className={abilityStyles.ability}>
                <p className={abilityStyles.abilityTitle}>{ability}</p>
                <div>
                    {AddStar(starsFull)}
                </div>
                
            </div>
    )
}

export default ExperiencePiece