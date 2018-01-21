import React from 'react'
import GatsbyLink from 'gatsby-link'
import {StylSheet, Text as RNText} from 'react-native'

//TODO: onMouserOver/OnmouseLeave local state
export const Link = ({style, ...rest}) => {
  const s = {
    container:{
      textDecoration: 'none',
      fontFamily:'sans-serif',
      fontWeight:'300',
      color:'slategrey'
    }
  }

  return <GatsbyLink  style={{...s.container,...style}}  {...rest}/>
}
