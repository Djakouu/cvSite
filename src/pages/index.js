import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout";
import Head from '../components/head'
import indexStyles from '../styles/pages/index.module.scss'

const EnglishPage = () => {
    return (
        <Layout>
            <Head title="English" />
            <header className={indexStyles.header}>
                <div className={indexStyles.headerBgImg}></div>
                <div className={indexStyles.headerLogoBox}>
                    <img src={'logo.png'} alt="logo" className={indexStyles.headerLogo} />
                </div>
                <div className={indexStyles.container}>
                    <h1 className={indexStyles.headerTitle}>Mohamed Kimouche</h1>
                    <h2 className={indexStyles.headerSubtitle}>Interactive resume</h2>
                </div>
            </header>
        </Layout>
    )
}

export default EnglishPage