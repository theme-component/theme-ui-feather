import React from "react"
import { Text, Flex } from 'theme-ui'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Docs" />
    <Flex 
      sx={{ 
        width: '100%', 
        flexDirection:'column', 
        alignItems: 'center', 
        maxWidth: 960,
        mx: 'auto',
        px: 4
      }}>
      <Text sx={{fontSize: 40, mt: 80}}>
        Theme UI Feather
      </Text>
      <Text sx={{fontSize: 20, mt: 15}}>
        Documentation
      </Text>
    </Flex>
  </Layout>
)

export default SecondPage
