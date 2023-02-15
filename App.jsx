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
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Task from './components/Task'

const Stack = createNativeStackNavigator();







//Home screen/Navigation
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





//Weather app
const WeatherScreen = ({navigation}) => {

  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);


let temp;
let wind;

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
    setResponse(data);
    setLoading(false);
  });
  });
}, []);
  return (
  <View>
     <Text>{response.weather}</Text>
  </View>
)
}






//Dice
const DicetwoScreen = ({navigation}) => {
    var dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    if (dice == 1) 
    {
      return(
        <View style={styles.wrap}>
        <Image
        source={require('./images/one.png')}
        style={styles.diceimage}
        />
        </View>
      )
    }
    else if (dice == 2)
    {
      return(
        <View style={styles.wrap}>
        <Image
        source={require('./images/two.png')}
        style={styles.diceimage}
        />
        </View>
      )
    }
    else if (dice == 3)
   {
    return(
      <View style={styles.wrap}>
      <Image
      source={require('./images/three.png')}
      style={styles.diceimage}
      />
      </View>
    )
    }
    else if (dice == 4)
    {
      return(
        <View style={styles.wrap}>
        <Image
        source={require('./images/four.png')}
        style={styles.diceimage}
        />
        </View>
      )
    }
    else if (dice == 5)
    {
      return(
        <View style={styles.wrap}>
        <Image
        source={require('./images/five.png')}
        style={styles.diceimage}
        />
        </View>
      )
    }
    else {
      return(
        <View style={styles.wrap}>
        <Image
        source={require('./images/six.png')}
        style={styles.diceimage}
        />
        </View>
      )
    }
}
const DiceScreen = ({navigation}) => {
  var dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  return(
      <View>
     <TouchableOpacity style={styles.dicebtn} onPress= {() => navigation.navigate('Dicetwo')}><View style={styles.wrap}><Text style={styles.diceText}>Roll</Text></View></TouchableOpacity>
     </View>
  )
}






const TodoScreen = ({navigation}) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    console.log(task);
  }
  return(
    <View>
    <View style={styles.taskwrap}>
    <Text style={styles.tasktitle}>To do list</Text>
    <View style={styles.items}>
    <Task text={'task 1'}/>
    </View>
    </View>

    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
    >
    <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>
  
    <TouchableOpacity onPress={() => handleAddTask()}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
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
    <Stack.Screen name="Dicetwo" component={DicetwoScreen} options={{title: 'Dice'}}/>
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
    borderRadius: 30,
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
  dicebtn: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    marginLeft: 98,
    marginTop: 250,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
    },
    diceText: {
      color: 'white',
      fontSize: 50,
      textAlign: 'center',
      fontFamily: 'Georgia',
  
    },
    diceimage: {
      width:200,
      height:200,
      marginLeft:95,
    },
    taskwrap: {
    paddingTop: 40,
    paddingHorizontal: 20,
    },
    tasktitle: {
    fontSize: 24,
    fontWeight: 'bold',

    },
    items: {
      marginTop: 25,
    },
    writeTaskWrapper:{
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      top:650,
      width: '70%',
      marginLeft: 20,
    },
    input:{
      paddingVertical: 15,
      width: 250,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 20,
      paddingHorizontal: 10,
      width: '100%',
    },
    addWrapper:{
      width: 60,
      height: 60,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 60,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addText:{},
});

export default App;
