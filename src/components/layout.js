import React from 'react'
import PropTypes from "prop-types"
import { Container } from 'semantic-ui-react'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styled from 'styled-components'

const FooterStyles = styled.footer`
  margin: 2rem auto;
  text-align: center;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <FooterStyles>
          <h4>Data sources:</h4>
          <p><a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noreferrer"><strong>@mathdroid</strong>'s COVID-19-API</a></p>
          {new Date().getFullYear()} - Coded by <a href="https://github.com/johnsonta87" target="_blank" rel="noreferrer">@johnsonta87</a> using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby React</a>.
        </FooterStyles>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
