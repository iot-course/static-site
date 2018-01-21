import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { View, StyleSheet } from 'react-native'
import { Header } from '../components'

const TemplateWrapper = ({ children }) => {

  const s = StyleSheet.create({
    container: {
      alignSelf: 'center',
      width: '75%',
    },
  })

  return <View>
    <Helmet
      title="Scalable IoT Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <View style={s.container} >
      {children()}
    </View>
  </View>
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
