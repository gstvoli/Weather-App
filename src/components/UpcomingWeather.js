import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'

const data = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2023-02-18 13:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2023-02-18 14:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  }
]

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text>{max}</Text>
    </View>
  )
}
const UpComingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'orange'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex: 1
  }
})
export default UpComingWeather
