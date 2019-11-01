import React from 'react'
import $ from 'jquery'
import { Waypoint } from 'react-waypoint';


import interestStyles from '../styles/components/interest.module.scss'
import langDeterminer from '../functions/langDeterminer'

const Interest = ({ title, location }) => {

    const dataDeterminer = (ability) => {
        return langDeterminer(ability, location)
    }

    const handleEnter1 = () => {
        $(`.${interestStyles.interestPartOneComposition}`).addClass(`${interestStyles.jsWp}`)
    }

    const handleEnter2 = () => {
        $(`.${interestStyles.interestPartTwoComposition}`).addClass(`${interestStyles.jsWp}`)
    }

    return (
        <div className={interestStyles.interest} id="interest">

            <div className={interestStyles.jumbotron}>

                <div className={interestStyles.container}>
                    <h1 className={interestStyles.headingPrimaryMain}>{dataDeterminer("interestTitle")}</h1>
                    <blockquote className={interestStyles.subtitle}>{dataDeterminer("interestQuote")}
                        <p>- Benjamin Franklin</p>
                    </blockquote>
                </div>

                <div className={interestStyles.interestPartOne}>
                    <div className={interestStyles.interestPartOneTxt}>
                        <p className={interestStyles.separationTitle}>{dataDeterminer("interestOneTitle")}</p>
                        {dataDeterminer("interestOneText")}<br />
                        <p className={interestStyles.separationTitle}>{dataDeterminer("interestTwoTitle")}</p>
                        {dataDeterminer("interestTwoText")}
                    </div>

                    <Waypoint onEnter={handleEnter1}
                              bottomOffset='70%'>
                        <div className={interestStyles.interestPartOneComposition}>
                            <img src={`../../copenhagen.jpg`} alt="Copenhagen" className={interestStyles.interestPartOneCompositionPic} id={interestStyles.p1} />
                            <img src={`../../remix.jpg`} alt="My association Remix" className={interestStyles.interestPartOneCompositionPic} id={interestStyles.p2} />
                            <img src={`../../chelsea.png`} alt="Chelsea Football Club" className={interestStyles.interestPartOneCompositionPic} id={interestStyles.p3} />
                        </div>
                    </Waypoint>

                </div>

                <div className={interestStyles.interestPartTwo}>
                    <Waypoint onEnter={handleEnter2}
                    bottomOffset='70%'>
                        <div className={interestStyles.interestPartTwoComposition}>
                            <img src={`../../tv.jpg`} alt="TV" className={interestStyles.interestPartTwoCompositionPic} id={interestStyles.p4} />
                            <img src={`../../games.jpg`} alt="Video games" className={interestStyles.interestPartTwoCompositionPic} id={interestStyles.p5} />
                            <img src={`../../computer.jpg`} alt="Coding" className={interestStyles.interestPartTwoCompositionPic} id={interestStyles.p6} />
                        </div>
                    </Waypoint>

                    <div className={interestStyles.interestPartTwoTxt}>
                        <p className={interestStyles.separationTitle}>{dataDeterminer("interestThreeTitle")}</p>
                        {dataDeterminer("interestThreeText")}
                        <br />
                        <p className={interestStyles.separationTitle}>{dataDeterminer("interestFourTitle")}</p>
                        {dataDeterminer("interestFourText")}
                        <br />
                        <p className={interestStyles.separationTitle}>{dataDeterminer("interestFiveTitle")}</p>
                        {dataDeterminer("interestFiveText")}
                    </div>

                </div>
                

            </div>

        </div>
        
    )
}

export default Interest
