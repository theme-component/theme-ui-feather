import React, { useState } from "react"
import { Input, Box, Text, Flex, Grid, AspectRatio } from 'theme-ui'
import * as featherIcons from 'theme-ui-feather';
import Layout from "../components/layout"
import SEO from "../components/seo"

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
            <Box
              tabIndex={0}
              role="button"
              sx={{
                p: 4,
                cursor: 'pointer',
                bg: '#F5F5F5',
                color: 'black',
                '&:hover':{
                  bg: '#90FF34'
                },
                '&:focus':{
                  boxShadow: '0 0 0 3px rgba(144, 255, 52, 1)',
                }
              }}
            >
              <AspectRatio 
                ratio={1}
                sx={{ 
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                <Flex
                  sx={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {React.createElement( featherIcons[key],{
                    sx:{color: "black"},
                    strokeWidth: 1,
                    size: 50
                  })}
                </Flex>
                <Text
                  as="p"
                  sx={{
                    borderRadius: 1000,
                    fontSize: 14,
                    py: 1,
                    px: 3,
                  }}
                >
                  {key}
                </Text>
              </AspectRatio>
            </Box>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export default IndexPage
