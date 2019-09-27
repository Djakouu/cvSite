import React from 'react'

import abilityStyles from '../styles/functions/ability.module.scss'
import sprite from '../img/icons/sprite.svg'

const hrefStarFull = sprite + '#icon-star-full'
const hrefStarEmpty = sprite + '#icon-star-full'

const AddStar = starsFull => {
    let starsEmpty = 5 - starsFull
    let elements = []
    const elementStarFull = <svg className={abilityStyles.starFull}>
                                <use href={hrefStarFull}></use>
                            </svg>

    const elementStarEmpty = <svg className={abilityStyles.starEmpty}>
                                <use href={hrefStarEmpty}></use>
                             </svg>
    
    while (starsFull > 0) {
        elements.push(elementStarFull)
        starsFull--
    }

    while (starsEmpty > 0) {
        elements.push(elementStarEmpty)
        starsEmpty--
    }

    return elements
}

const ExperiencePiece = ({ ability, starsFull }) => {
    let toggle = abilityStyles.abilityStarsScale
    if (starsFull === '5')
        toggle = abilityStyles.abilityStarsPulse
    
    return (
        <div className={abilityStyles.ability}>
            <p className={abilityStyles.abilityTitle}>{ability.split('-')[0]}<span> {ability.split('-',)[1]}</span></p>
            <div className={toggle}>
                {AddStar(starsFull)}
            </div>
            
        </div>
    )
}

export default ExperiencePiece