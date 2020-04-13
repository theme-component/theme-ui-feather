import React, { useState } from "react"
import { Input, Box, Text, Flex } from 'theme-ui'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IconGrid from "../components/icon-grid"

const IndexPage = () => {
  const [value, setValue] = useState("Test");

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return(
    <Layout>
      <SEO title="Home" />
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
        <Input 
          value={value} 
          onChange={handleChange} 
          placeholder="Search icons..." 
        />
      </Flex>
      <Box sx={{width: '100%', px: 4}} >
        <IconGrid />
      </Box>
    </Layout>
  )
}

export default IndexPage
