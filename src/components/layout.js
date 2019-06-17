import React from 'react'

import '../styles/index.scss'
import layoutStyles from '../styles/components/layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            {props.children}
        </div>
    )
}

export default Layout