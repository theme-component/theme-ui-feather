import React from "react"
import { Box, Flex, Link } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

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
    <Flex
      sx={{
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box as="main" sx={{ width: '100%', flex: 1, pb: 4 }}>
        {children}
      </Box>
      <Box as="footer" sx={{ px: 4, py: 4 }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link target="_blank" variant="nav" href="https://www.gatsbyjs.org">Gatsby</Link>
      </Box>
    </Flex>
  )
}

export default Layout
