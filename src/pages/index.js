import React from 'react'
import {Link} from '../components'
import {View, Text} from 'react-native'


export default () => <View>
    <Text>Welcome to your new static site.</Text>
    <Text>Now go build something great.</Text>
    <Link to="/page-2/">Go to page 2</Link>
  </View>
