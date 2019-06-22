import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout";
import Head from '../components/head'
import Header from '../components/header'
import Profile from '../components/profile'
import Experience from "../components/experience";
import Abilities from "../components/abiliies";

const EnglishPage = () => {
    return (
        <Layout>
            <Head title="English" />
            <Header subtitle="Interactive resume"/>
            <Profile title="Profile" subtitle="I'm an, unusual, economist and javascript webdeveloper"/>
            <Experience title="Experience" subtitle="''quote''" />
            <Abilities title="Abilities" subtitle="''quote" />
        </Layout>
    )
}

export default EnglishPage