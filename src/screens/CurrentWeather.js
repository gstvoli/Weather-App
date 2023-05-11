import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  // console.log(weatherData)
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main
  const {
    wrapper,
    container,
    temperature,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{`${temp}º`}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}º`}</Text>
        <RowText
          messageOne={`High: ${temp_max}  `}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    color: '#000',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: '#000'
  },
  highLow: {
    color: '#000',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather
