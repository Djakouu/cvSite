import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout";
import Head from '../components/head'
import Header from '../components/header'

const EnglishPage = () => {
    return (
        <Layout>
            <Head title="English" />
            <Header subtitle="Interaktiver lebenslauf"/>
        </Layout>
    )
}

export default EnglishPage