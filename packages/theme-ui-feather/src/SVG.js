import React from 'react'
import { Box } from '@theme-ui/components'

const SVG = React.forwardRef(({ size = 24, ...props }, ref) => (
    <Box
      ref={ref}
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={size + ''}
      height={size + ''}
      viewBox="0 0 24 24"
      fill="currentcolor"
      {...props}
    />
  )
)

export default SVG