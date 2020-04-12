/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Text, Box, Link } from 'theme-ui'
import { GitHub } from 'theme-ui-feather';

const Header = () => (
  <Flex
    as="header"
    sx={{
      px: 4,
      py: 3,
      justifyContent: "space-between",
      alignItems: 'center',
      borderBottom: '1px solid',
      borderColor: '#F5F5F5'
    }}
  >
    <Box>
      <Text>
        Based on 
        <Link href="https://feathericons.com/" ml={1} variant="nav">
          Feather
        </Link>
      </Text>    
    </Box>
    <Box>
      <GatsbyLink sx={{...linkCSS, mx: 2}}>
        Icons
      </GatsbyLink>
      <GatsbyLink sx={{...linkCSS, mx: 2}}>
        Docs
      </GatsbyLink>
      <Link href="https://feathericons.com/" variant="nav" mx="2">
        GitHub 
      </Link>
    </Box>
  </Flex>
)

const linkCSS = {
  color: 'inherit',
  textDecoration: 'none',
  '&:hover':{
    textDecoration: 'underline',
  }
}

export default Header
