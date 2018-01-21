import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Link } from '.'

const Header = () => {
  const s = StyleSheet.create({
    container: {
      backgroundColor: 'mediumturquoise',
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    },
  })

  return <View style={s.container} >
    <View style={s.content} >
      <Link to="/" style={{ color: 'white', fontSize: 40 }} >Scalable IoT</Link>
    </View>
  </View>
}

export default Header
