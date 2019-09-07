import React from "react"

import Layout from "../components/layout";
import Head from '../components/head'
import Header from '../components/header'
import Profile from '../components/profile'
import Experience from "../components/experience";
import Abilities from "../components/abiliies";
import Projects from "../components/projects";
import Interest from "../components/interest";
import Footer from "../components/footer";
import restoreScrollPosition from '../functions/restoreScrollPosition'


const FrenchPage = ({location}) => {
    restoreScrollPosition()

    return (
        <Layout>
            <Head title="Français" />
            <Header subtitle="CV interactif"/>
            <Profile location={location} />
            <Experience 
                location={location}
            />
            <Abilities location={location} />
            <Projects location= {location} />
            <Interest location={location} />
            <Footer location={location} />
        </Layout>
    )
}

export default FrenchPage