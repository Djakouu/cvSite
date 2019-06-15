import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout";
import Head from '../components/head'

const FrenchPage = () => {
    return (
        <Layout>
        <Head title="French"/>
            <h1>Fr</h1>
            <p><Link to=''>English</Link></p>
            <p><Link to='/gr'>German</Link></p>
        </Layout>
    )
}

export default FrenchPage