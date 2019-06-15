import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout";
import Head from '../components/head'

const GermanPage = () => {
    return (
        <Layout>
            <Head title="German"/>
            <h1>Gr</h1>
            <p><Link to=''>English</Link></p>
            <p><Link to='/fr'>French</Link></p>
        </Layout>
    )
}

export default GermanPage