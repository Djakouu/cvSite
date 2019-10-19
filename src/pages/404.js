import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import pageNotFound from '../styles/pages/pageNotFound.module.scss'


const NotFound = () => {
    return (
        <div className={pageNotFound.div}>
            <Head title="404"/>
            <img src={`../../404.png`} alt="404 PAGE NOT FOUND" className={pageNotFound.img} />
        </div>
    )
}

export default NotFound