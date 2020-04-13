/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Text, Box, Link } from 'theme-ui'

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
        <Link target="_blank" href="https://feathericons.com/" ml={1} variant="nav">
          Feather
        </Link>
      </Text>    
    </Box>
    <Box>
      <GatsbyLink to="/" sx={{...linkCSS, mx: 2}}>
        Icons
      </GatsbyLink>
      <Link target="_blank" href="https://github.com/theme-component/theme-ui-feather" variant="nav" mx="2">
        Docs
      </Link>
      <Link target="_blank" href="https://github.com/theme-component/theme-ui-feather" variant="nav" mx="2">
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
