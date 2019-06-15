import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout";
import Head from '../components/head'

const EnglishPage = () => {
    return (
        <Layout>
            <Head title="English" />
            <h1>En</h1>
            <p><Link to='/fr'>French</Link></p>
            <p><Link to='/gr'>German</Link></p>
        </Layout>
    )
}

export default EnglishPage