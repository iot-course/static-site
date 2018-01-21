import React from 'react'
import {Link} from '.'
import {View, Text} from 'react-native'

const Header = () => (
  <View
    style={{
      backgroundColor: 'mediumturquoise',
      height:70,
      alignItems:'center',
      justifyContent:'center'
    }}
  >
    <View
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
    <Link
      to="/"
      style={{
        color: 'white',
        fontSize:40
      }}
    >
      Scalable IoT
    </Link>

    </View>
  </View>
)

export default Header
