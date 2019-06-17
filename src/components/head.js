import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon from '../img/favicon.png'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Helmet 
            title={`${data.site.siteMetadata.title} | ${title}`}
            link={[
                { rel: 'icon', type: 'image/png', href: `${favicon}`}
            ]}
        />
    )
}

export default Head