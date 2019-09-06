import React, { useEffect } from "react"
import $ from 'jquery'

import Layout from "../components/layout";
import Head from '../components/head'
import Header from '../components/header'
import Profile from '../components/profile'
import Experience from "../components/experience";
import Abilities from "../components/abiliies";
import Projects from "../components/projects";
import Interest from "../components/interest";
import Footer from "../components/footer";
import { compose } from "redux";


const FrenchPage = ({location}) => {
    useEffect(() => {
        if(window !== undefined) {
            $(window).scroll(() => {
                sessionStorage.scrollTop = $(window).scrollTop();
            });
              
            $(document).ready(() => {
            if (sessionStorage.scrollTop !== "undefined") {
                $(window).scrollTop(sessionStorage.scrollTop);
            }
            });
        }
    }, []);

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