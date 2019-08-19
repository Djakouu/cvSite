import React from 'react'

import interestStyles from '../styles/components/interest.module.scss'
import langDeterminer from '../functions/langDeterminer'

const Interest = ({ title, location }) => {

    const dataDeterminer = (ability) => {
        return langDeterminer(ability, location)
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
                        <p className={interestStyles.separationTitle}>Travelling</p>
                        <p>I love visiting new cities. I've already been to big ones such as Copenhagen, Paris, Milano and Madrid. Usually in a group, I enjoy discovering new cultures and opening my mind.</p>
                        <br />
                        <p>One of the cities I would love to visit, and why not live in, is London. Being a fan of football and especially of Chelsea Football Club, one of my favorite hobbies is to cheer that one</p>
                        <br />
                        <p>Switzerland and Germany are other places I would love to settle in. I found the language and the culture very attractive</p>
                        <br />
                        <p className={interestStyles.separationTitle}>volunteering</p>
                        <p>One of my other interests is to volonteer as a helper for people around. I've spent most of my free time with the Remix Student Association in Grenoble participating into the adjustment of students to their new city, organising envents and parties for cultural exchange.</p>
                        <br />
                        <p>I've also got the opportunity to help refugees settle in the city, answering their needs for two years. I've taught them French, computer science, helped them with paperwork, translation and finding jobs. It's a great honor for me to see them moved forward since they got here</p>
                    </div>

                    <div className={interestStyles.interestPartOneComposition}>
                        <img src={'copenhagen.jpg'} alt="Copenhagen" className={interestStyles.interestPartOneCompositionPic} id={interestStyles.p1} />
                        <img src={'remix.jpg'} alt="My association Remix" className={interestStyles.interestPartOneCompositionPic} id={interestStyles.p2} />
                        <img src={'chelsea.png'} alt="Chelsea Football Club" className={interestStyles.interestPartOneCompositionPic} id={interestStyles.p3} />
                    </div>

                </div>

                <div className={interestStyles.interestPartTwo}>
                    

                    <div className={interestStyles.interestPartTwoComposition}>
                        <img src={'tv.jpg'} alt="TV" className={interestStyles.interestPartTwoCompositionPic} id={interestStyles.p4} />
                        <img src={'games.jpg'} alt="Video games" className={interestStyles.interestPartTwoCompositionPic} id={interestStyles.p5} />
                        <img src={'computer.jpg'} alt="Coding" className={interestStyles.interestPartTwoCompositionPic} id={interestStyles.p6} />
                    </div>

                    <div className={interestStyles.interestPartTwoTxt}>
                        <p className={interestStyles.separationTitle}>Movies</p>
                        <p>I am also a big fan of the cinema world. My favorite TV shows are: "Breaking Bad", "The Big Bang Theory", "Suits", "La Casa De Papel", "Prison Break", "HIMYM" and "Chuck" (I couldn't leave one of them out of the list)</p>
                        <br />
                        <p>My top three movies are: "The Hobbit", "The Lord Of The Rings" and "Titanic" (We wouldn't say but yes!) </p>
                        <br />
                        <p className={interestStyles.separationTitle}>Sports</p>
                        <p>Besides that, I would be watching football games. playing football on video games or practicing football in real life (That's a lot of football but I also enjoy the gym and swimming)</p>
                        <br />
                        <p className={interestStyles.separationTitle}>Web development</p>
                        <p>Last but far from least I find programming fun, challenging and captivating. So I meant to be a web developer</p>
                    </div>

                </div>
                

            </div>

        </div>
        
    )
}

export default Interest
