import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
import styled from 'styled-components'

const HeaderStyles = styled.header`
  text-align: center;
  background-color: #CD5C5C;
  color: #fff;
  padding: 10px 0;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Header = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <HeaderStyles>
          <div>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
              >
                {data.site.siteMetadata.title}
              </Link>
            </h1>
            {data.site.siteMetadata.description}
          </div>
        </HeaderStyles>
      )}
    />
  )
}


export default Header
