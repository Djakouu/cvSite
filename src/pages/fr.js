import React from "react"
import $ from 'jquery'

import Layout from "../components/Layout";
import Head from '../components/head'
import Header from '../components/header'
import Profile from '../components/profile'
import Experience from "../components/experience";
import Abilities from "../components/abiliies";
import Projects from "../components/projects";
import Interest from "../components/interest";
import Footer from "../components/footer";


const FrenchPage = ({location}) => {
    $(window).scroll(() => {
        sessionStorage.scrollTop = $(window).scrollTop();
    });
      
    $(document).ready(() => {
    if (sessionStorage.scrollTop !== "undefined") {
        $(window).scrollTop(sessionStorage.scrollTop);
    }
    });

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