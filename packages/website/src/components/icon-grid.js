import React from "react"
import { Grid } from 'theme-ui'
import * as featherIcons from 'theme-ui-feather';
import Iconbox from "./icon-box"

const IndexPage = () => {
  return(
    <Grid width={200} gap={2}>
      {Object.keys(featherIcons).map((key, index) => (
        <Iconbox
          name={key}
          icon={
            React.createElement( featherIcons[key],{
              sx:{color: "black"},
              strokeWidth: 1,
              size: 50
            }
          )}
        /> 
      ))}
    </Grid>
  )
}

export default IndexPage
