import React from 'react'
const data = {

// PAGE TITLES AND QUOTES
    "profileTitleEn": "Profile",
    "profileTitleFr": "profil",
    "profileTitleGr": "Profil",

    "profileSubtitleEn": "I'm an, unusual, economist and javascript webdeveloper",
    "profileSubtitleFr": "Je suis un économiste et un développeur javascript inaccoutumé",
    "profileSubtitleGr": "Ich bin ein ungewöhnlicher Wirtschaftler und Javascript-Webentwickler",
    
    "experienceTitleEn": "Experience",
    "experienceTitleFr": "Expérience",
    "experienceTitleGr": "Erfahrung",

    "experienceQuoteEn": <p>Don't be afraid to give up the good to go for the great</p>,
    "experienceQuoteFr": <p>n'ayez pas peur d'abandonner le bien pour le meilleur</p>,
    "experienceQuoteGr": <p>Hab keine Angst, das Gute für die Großen aufzugeben</p>,

    "abilitiesTitleEn": "Abilities",
    "abilitiesTitleFr": "Compétences",
    "abilitiesTitleGr": "Können",

    "abilitiesQuoteEn": <p>Everybody should learn to program a computer, because it teaches you how to think</p>,
    "abilitiesQuoteFr": <p>Tout le monde devrait apprendre à programmer un ordinateur, car il nous apprend comment réfléchir</p>,
    "abilitiesQuoteGr": <p>Jeder sollte lernen, einen Computer zu programmieren, weil er Ihnen das Denken beibringt</p>,

    "projectsTitleEn": "Projects",
    "projectsTitleFr": "Projets",
    "projectsTitleGr": "Projekte",

    "projectsQuoteEn": <p>You don't drown by falling in the water; you drown by staying there</p>,
    "projectsQuoteFr": <p></p>,
    "projectsQuoteGr": <p></p>,

    "interestTitleEn": "Points of interest",
    "interestTitleFr": "Centres d'intérêt",
    "interestTitleGr": "Intersse",

    "interestQuoteEn": <p>Leisure is the time for doing something useful. This leisure the diligent person will obtain the lazy one never</p>,
    "interestQuoteFr": <p></p>,
    "interestQuoteGr": <p></p>,

    "footerTitleEn": "Contact",
    "footerTitleFr": "Contact",
    "footerTitleGr": "Kontakt",

    "footerQuoteEn": <p>Coming together is a beginning, staying together is progress, and working together is success</p>,
    "footerQuoteFr": <p></p>,
    "footerQuoteGr": <p></p>,

    


//PAGENAVBAR
    "pageNavbarOneEn": "Profile",
    "pageNavbarOneFr": "Profil",
    "pageNavbarOneGr": "Profil",

    "pageNavbarTwoEn": "Experience",
    "pageNavbarTwoFr": "Expérience",
    "pageNavbarTwoGr": "Erfahrung",

    "pageNavbarThreeEn": "Abilities",
    "pageNavbarThreeFr": "Compétences",
    "pageNavbarThreeGr": "Können",

    "pageNavbarFourEn": "Projects",
    "pageNavbarFourFr": "Projets",
    "pageNavbarFourGr": "Projekte",

    "pageNavbarFiveEn": "Interest",
    "pageNavbarFiveFr": "Interêt",
    "pageNavbarFiveGr": "Interesse",

    "pageNavbarSixEn": "Contact",
    "pageNavbarSixFr": "Contact",
    "pageNavbarSixGr": "Kontakt",


//EXPERIENCE SECTION
    // EDUCATION
    "educationOneLocationEn": "Grenoble-Alpes University - France",
    "educationOneLocationFr": "Anglais",
    "educationOneLocationGr": "Englisch",

    "educationOnePurposeEn": "Master in mathematics and computer science",
    "educationOnePurposeFr": "Anglais",
    "educationOnePurposeGr": "Englisch",

    "educationOneDescriptionEn": "This coming school year I will be, mainly, learnig and putting in practice the following: computer systems and networks, software engineering, SQL databases, PHP, JAVA EE, DOT NET",
    "educationOneDescriptionFr": "Anglais",
    "educationOneDescriptionGr": "Englisch",

    "educationTwoLocationEn": <p>Grenoble-Alpes University - France <br /> & Online courses</p>,
    "educationTwoLocationFr": "Anglais",
    "educationTwoLocationGr": "Englisch",

    "educationTwoPurposeEn": "English, German & web development courses",
    "educationTwoPurposeFr": "Anglais",
    "educationTwoPurposeGr": "Englisch",

    "educationTwoDescriptionEn": "These years were invested in learning English (C1 level reached), German (level A2 reached) at the university and web development, that became myfirst passion, following online courses. Udemy, W3Schools and openClassrooms are the main educational platforms behind the skills listed in the abilities section below.",
    "educationTwoDescriptionFr": "Anglais",
    "educationTwoDescriptionGr": "Englisch",

    "educationThreeLocationEn": "Grenoble-Alpes University - France",
    "educationThreeLocationFr": "Anglais",
    "educationThreeLocationGr": "Englisch",

    "educationThreePurposeEn": "Master in energy economics",
    "educationThreePurposeFr": "Anglais",
    "educationThreePurposeGr": "Englisch",

    "educationThreeDescriptionEn": "My knowledge has been expaded to renewalbe energy and electricity markets, environmental economics and I got deeper into energy accounting, finance, trading and investments",
    "educationThreeDescriptionFr": "Anglais",
    "educationThreeDescriptionGr": "Englisch",

    "educationFourLocationEn": "M'Hamed-Bougara University - Algeria",
    "educationFourLocationFr": "Anglais",
    "educationFourLocationGr": "Englisch",

    "educationFourPurposeEn": "Master in energy economics",
    "educationFourPurposeFr": "Anglais",
    "educationFourPurposeGr": "Englisch",

    "educationFourDescriptionEn": "This program led me to master the fondamentals of energy economics: energy markets, fincance, trading, project management and feasibility study. Besides, the program included marketing, general and cost accounting, advanced statistics and more. As a last note, I got the first taste for programming as I learned mainly C++",
    "educationFourDescriptionFr": "Anglais",
    "educationFourDescriptionGr": "Englisch",

    "educationFiveLocationEn": "The New High school - Constantine, Algeria",
    "educationFiveLocationFr": "Anglais",
    "educationFiveLocationGr": "Englisch",

    "educationFivePurposeEn": "High school diploma",
    "educationFivePurposeFr": "Anglais",
    "educationFivePurposeGr": "Englisch",

    "educationFiveDescriptionEn": "Here I was first introduced to computer science basics and I developed an interest for economics, finance and the world of energy",
    "educationFiveDescriptionFr": "Anglais",
    "educationFiveDescriptionGr": "Englisch",

    //CAREER
    "careerOneLocationEn": "The French National Center for Scientific Research",
    "careerOneLocationFr": "Anglais",
    "careerOneLocationGr": "Englisch",

    "careerOneDateEn": "June 2015 - September 2015",
    "careerOneDateFr": "Anglais",
    "careerOneDateGr": "Englisch",

    "careerOnePurposeEn": "Research internship",
    "careerOnePurposeFr": "Anglais",
    "careerOnePurposeGr": "Englisch",

    "careerOneDescriptionEn": "The experience was a success in helping the center find the best way to regulate and finance the new smart meters for the smart electricity grids. I had to do a benchmark studying the markets and policy of advanced countries in the matter, such as Sweden and Australia, to help France move forward",
    "careerOneDescriptionFr": "Anglais",
    "careerOneDescriptionGr": "Englisch",

    "careerTwoLocationEn": "Sonatrach, a large Algerian oil consortium",
    "careerTwoLocationFr": "Anglais",
    "careerTwoLocationGr": "Englisch",

    "careerTwoDateEn": "March 2014 - June 2014",
    "careerTwoDateFr": "Anglais",
    "careerTwoDateGr": "Englisch",

    "careerTwoPurposeEn": "Internship",
    "careerTwoPurposeFr": "Anglais",
    "careerTwoPurposeGr": "Englisch",

    "careerTwoDescriptionEn": "A big first experince in the world of business in the largest company in Africa. My energy economics knowledge was put in pratice through a feasibility study (some technical and mainly economical) of a big real life investment project that aimed to increase the gas production of a group of wells",
    "careerTwoDescriptionFr": "Anglais",
    "careerTwoDescriptionGr": "Englisch",

    //ACTIVITIES
    "activityOneLocationEn": "Student Remix Association - Grenoble, France",
    "activityOneLocationFr": "Association Remix Etudiants - Grenoble, France",
    "activityOneLocationGr": "Englisch",

    "activityOneDateEn": "Half-time volonteer",
    "activityOneDateFr": "Association Remix Etudiants - Grenoble, France",
    "activityOneDateGr": "Englisch",

    "activityOnePurposeEn": "Logistics team leader and association's secretary volonteer",
    "activityOnePurposeFr": "Anglais",
    "activityOnePurposeGr": "Englisch",

    "activityOneDescriptionEn": "Along with a team we took care of the maintenance of the 200m² association premises while I was in charge of the administrative part to handle the members and paperwork ",
    "activityOneDescriptionFr": "Anglais",
    "activityOneDescriptionGr": "Englisch",

    "activityTwoLocationEn": "IKEA - Grenoble, France",
    "activityTwoLocationFr": "Anglais",
    "activityTwoLocationGr": "Englisch",

    "activityTwoDateEn": "4 months full-time job",
    "activityTwoDateFr": "Association Remix Etudiants - Grenoble, France",
    "activityTwoDateGr": "Englisch",

    "activityTwoPurposeEn": "Restaurant employee",
    "activityTwoPurposeFr": "Anglais",
    "activityTwoPurposeGr": "Englisch",

    "activityTwoDescriptionEn": "Within the worldwide known IKEA store I participated with plenty of coworkers to prepare and serve Swedish food to a great clientele",
    "activityTwoDescriptionFr": "Anglais",
    "activityTwoDescriptionGr": "Englisch",

    "activityThreeLocationEn": "University café and library - Grenoble, France",
    "activityThreeLocationFr": "Anglais",
    "activityThreeLocationGr": "Englisch",

    "activityThreeDateEn": "Half-time job",
    "activityThreeDateFr": "Association Remix Etudiants - Grenoble, France",
    "activityThreeDateGr": "Englisch",

    "activityThreePurposeEn": "Café emplyee and library managment assistant",
    "activityThreePurposeFr": "Anglais",
    "activityThreePurposeGr": "Englisch",

    "activityThreeDescriptionEn": "I was honored to serve other students both in a café as a cashier and in a library as managment assistant (handle the books, printers, computers...)",
    "activityThreeDescriptionFr": "Anglais",
    "activityThreeDescriptionGr": "Englisch",

    "activityFourLocationEn": "RGIS (international inventory company) - Grenoble, France",
    "activityFourLocationFr": "Anglais",
    "activityFourLocationGr": "Englisch",

    "activityFourDateEn": "Half-time job",
    "activityFourDateFr": "Association Remix Etudiants - Grenoble, France",
    "activityFourDateGr": "Englisch",

    "activityFourPurposeEn": "Invetory team leader",
    "activityFourPurposeFr": "Anglais",
    "activityFourPurposeGr": "Englisch",

    "activityFourDescriptionEn": "As a team (3 to 20 people) leader I was flatterd every evening employees were looking forward to be in my team again. That was a sign of the success of my misson and my leadership talent, and the main reason of my satisfaction",
    "activityFourDescriptionFr": "Anglais",
    "activityFourDescriptionGr": "Englisch",

// ABILITIES SECTION

    // SKILLS

    // TOOLS

    // LANGAUGES
    "langOneEn": "English",
    "langOneFr": "Anglais",
    "langOneGr": "Englisch",

    "langTwoEn": "French",
    "langTwoFr": "Français",
    "langTwoGr": "Französisch",

    "langThreeEn": "Arabic",
    "langThreeFr": "Arabe",
    "langThreeGr": "Arabisch",

    "langFourEn": "German-(4 stars by 2021)",
    "langFourFr": "Allemand-(4 étoiles d'ici 2021)",
    "langFourGr": "Deutsch-(4 Sterne bis 2021)",

    "langFiveEn": "Spanish-(Plans of the futur)",
    "langFiveFr": "Espagnol-(Dans les plans du futur)",
    "langFiveGr": "Spanisch-(Plänen der Zukunft)",

    "langSixEn": "Italian-(Plans of the future)",
    "langSixFr": "Italien-(Dans les plans du futur)",
    "langSixGr": "Italienisch-(Plänen der Zukunft)",

    
}

export default data