import React from "react"
import ScriptTag from 'react-script-tag';

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

const GermanPage = ({location}) => {
    restoreScrollPosition()

    return (
        <div>
            <Layout>
                <Head title="Deutsch" />
                <Header subtitle="Interaktiver Lebenslauf"/>
                <Profile location={location} />
                <Experience location={location} />
                <Abilities location={location} />
                <Projects location={location} />
                <Interest location={location} />
                <Footer location={location} />
            </Layout>
            <ScriptTag src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.5/waypoints.min.js"></ScriptTag>
        </div>
    )
}

export default GermanPage