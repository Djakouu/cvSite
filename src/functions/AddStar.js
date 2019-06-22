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

export default AddStar