import React from "react"
import { Box, Text, Flex, AspectRatio } from 'theme-ui'
import { useClipboard } from '../hooks/useClipboard'

const IndexPage = ({ name, icon}) => {
  const { onCopy, hasCopied } = useClipboard(`${name}`);

  return(
    <Box
      tabIndex={0}
      role="button"
      onClick={onCopy}
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
          {icon}
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
          {hasCopied ? 'Copied' : name}
        </Text>
      </AspectRatio>
    </Box>
  )
}

export default IndexPage
