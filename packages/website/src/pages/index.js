import React, { useState } from "react"
import { Input, Box, Text, Flex, Grid, AspectRatio } from 'theme-ui'
import * as featherIcons from 'theme-ui-feather';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Iconbox from "../components/iconbox"

const IndexPage = () => {
  // const [value, setValue] = useState("Test");

  const handleChange = (event) => {
    // setValue(event.target.value);
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
        <Input  placeholder="Search icons..." />
      </Flex>
      <Box sx={{width: '100%', px: 4}} >
        <Grid width={200} gap={2}>
          {Object.keys(featherIcons).map(key => (
            <Iconbox
              name={key}
              icon={
                React.createElement( featherIcons[key],{
                  sx:{color: "black"},
                  strokeWidth: 2,
                  size: 50
                }
              )}
            /> 
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export default IndexPage
