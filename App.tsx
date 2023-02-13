/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {PropsWithChildren, useEffect} from 'react';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
    <View style= {styles.flexing}>
    <TouchableOpacity
    style= {styles.squareContainer}
    onPress= {() => navigation.navigate('Weather')}><View style={styles.wrap}><Text style={styles.squareText}>Weather</Text></View>
    </TouchableOpacity>
    <TouchableOpacity
    style= {styles.squareContainer}
    onPress= {() => navigation.navigate('Dice')}><View style={styles.wrap}><Text style={styles.squareText}>Dice</Text></View>
    </TouchableOpacity>
    <TouchableOpacity
    style= {styles.squareContainer}
    onPress= {() => navigation.navigate('To-Do')}><View style={styles.wrap}><Text style={styles.squareText}>To-do</Text></View>
    </TouchableOpacity>
    </View>
    <View style= {styles.flexing}>
    <TouchableOpacity
    style= {styles.squareContainer}
    onPress= {() => navigation.navigate('News')}><View style={styles.wrap}><Text style={styles.squareText}>News</Text></View>
    </TouchableOpacity>
    <TouchableOpacity
    style= {styles.squareContainer}
    onPress= {() => navigation.navigate('Cconverter')}><View style={styles.wrap}><Text style={styles.squareText}>Currency Converter</Text></View>
    </TouchableOpacity>
    <TouchableOpacity
    style= {styles.squareContainer}
    onPress= {() => navigation.navigate('Cheats')}><View style={styles.wrap}><Text style={styles.squareText}>Cheat Sheet</Text></View>
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}



const WeatherScreen = ({navigation}) => {

  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);

let temp;
let wind;
let data;

useEffect(() => {
  getLocation().then((location) => {
    console.log(location);
  getWeather({
  
    key: "0bde7f26fbe2034dd8c0c14c861f005c",
    lat: location.coords.latitude,
    lon: location.coords.longitude,
    unit: "metric"
  
  }).then(() => {
  
    let data = new showWeather();
    console.log(data);
    temp = data.temp;
    wind = data.wind;
    console.log(temp);
    return data;
  });
  });
}, []);
  return (
  <View>
     <Text>{response}</Text>
  </View>
)
}


const DiceScreen = ({navigation}) => {
  return (
    <Text>Sup</Text>
  )
}
const TodoScreen = ({navigation}) => {
  return(
    <Text>Yup</Text>
  )
}
const NewsScreen = ({navigation}) => {
  return(
    <Text>Yeee</Text>
  )
}
const CurrencyScreen = ({navigation}) => {
  return(
    <Text>Yooo</Text>
  )
}
const CheatScreen = ({navigation}) => {
  return(
    <Text>Chirp</Text>
  )
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component = {HomeScreen} options={{title: 'Home'}}/>
    <Stack.Screen name="Weather" component = {WeatherScreen} options={{title: 'Weather'}}/>
    <Stack.Screen name="Dice" component={DiceScreen} options={{title: 'Dice'}}/>
    <Stack.Screen name="To-Do" component={TodoScreen} options={{title: 'To-do list'}}/>
    <Stack.Screen name="News" component={NewsScreen} options={{title: 'News'}}/>
    <Stack.Screen name="Cconverter" component={CurrencyScreen} options={{title:'Currency Converter'}}/>
    <Stack.Screen name="Cheats" component={CheatScreen} options={{title: 'Cheat Sheet'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  squareContainer: {
    marginLeft: 20,
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: 'purple',
  },
  squareText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Georgia',

  },
  wrap:{
    justifyContent: 'center',
    height: '100%',
  },
  flexing:{
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
