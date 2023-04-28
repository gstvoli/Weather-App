import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      console.log(status, 's')
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      console.log(location)
      setLocation(location)
    })()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'purple'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
