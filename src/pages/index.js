import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout";
import Head from '../components/head'
import Header from '../components/header'
import Profile from '../components/profile'

const EnglishPage = () => {
    return (
        <Layout>
            <Head title="English" />
            <Header subtitle="Interactive resume"/>
            <Profile title="Profile" subtitle="I'm an, unusual, economist and javascript webdeveloper"/>
            
        </Layout>
    )
}

export default EnglishPage