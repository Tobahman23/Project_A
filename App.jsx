/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


//imports
import React, {useState} from 'react';
import {PropsWithChildren, useEffect} from 'react';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pdf from 'react-native-pdf';
import PDFHtml from './components/htmlcheat';
import PDFCss from './components/csscheat';
import PDFJs from './components/jscheat';
import PDFReact from './components/reactcheat';
import { SelectList } from 'react-native-dropdown-select-list';
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
  Keyboard,
  Linking,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Task from './components/Task';
import NumericInput from 'react-native-numeric-input';
import { set } from 'react-native-reanimated';







//Creating stacknavigator
const Stack = createNativeStackNavigator();




//Homescreen for user navigation
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











//Weather application for showcasing the weather for your current location
const WeatherScreen = ({navigation}) => {

  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);

useEffect(() => {
  getLocation().then((location) => {
  getWeather({
  
    key: "0bde7f26fbe2034dd8c0c14c861f005c",
    lat: location.coords.latitude,
    lon: location.coords.longitude,
    unit: "metric"
  
  }).then(() => {
  
    let data = new showWeather();
    setResponse(data);
    setLoading(false);
    return response;
  });
  });
}, []);
if (isLoading === false)
{

return(
<View style={styles.scrollWrapper}>
<Text style={styles.cityName}>{response.name}</Text>
<View style={styles.weatherWrap}>
<Text style={styles.weatherText}>Temperature: {Math.round(response.temp)} ºC</Text>
<Text style={styles.weatherText}>Min: {Math.round(response.temp_min)} ºC</Text>
<Text style={styles.weatherText}>Max: {Math.round(response.temp_max)} ºC</Text>
<Text style={styles.weatherText}>Wind: {response.wind} m/s</Text>
<Text style={styles.weatherText}>Humidity: {response.humidity} %</Text>
</View>
<Image style={styles.weatherImage} source={{uri: `${response.icon}`}}/>
</View>
)
}
else {
  return(
    <Text style={styles.weatherText}>Loading. . .</Text>
  )
}
}












//Dice application (Switches between two screens/navigations)
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
  const [dce, setDice] = useState();
  const diceRoll = () => {
    var dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    if (dice == 1) 
    {
      setDice('./images/one.png');
      return dce;
    }
    else if (dice == 2)
    {
      setDice('./images/two.png');
      return dce;
    }
    else if (dice == 3)
   {
    setDice('./images/three.png');
    return dce;
    }
    else if (dice == 4)
    {
      setDice('./images/four.png');
      return dce;
    }
    else if (dice == 5)
    {
      setDice('./images/five.png');
      return dce;
    }
    else {
      setDice('./images/six.png');
      return dce;
    }
  }
  console.log(image);
  if (dce){
  image = dce;
  console.log(dce);
  }
  return(
      <View onPress={() => console.log("sup")}>
      {
        image
      }
     <Image source={`${image}`} style={styles.diceimage}/>
     <TouchableOpacity style={styles.currencyButton} onPress={() => diceRoll()}><Text style={styles.currencyText}>Roll</Text></TouchableOpacity>
     </View>
  )
}












//To-do list, create tasks or delete them
const TodoScreen = ({navigation}) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return(
    <View>
    <View style={styles.taskwrap}>
    <Text style={styles.tasktitle}>To do list</Text>
    <View style={styles.items}>
    {
      taskItems.map((item, index) => {
        return( 
        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
        <Task text={item} />
        </TouchableOpacity>
        )
      }) 
    }
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









//NewsScreen, shows the most relevant out of the latest news
const NewsScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const link = 'https://newsapi.org/v2/top-headlines?country=se&apiKey=7a2b63703238404b9bd96257276546e1';
  
  useEffect(() => {
  const getNews = () =>{
    return fetch(link).then(response => response.json())
    .then(json => {
      setData(json.articles);
      return data;
    })
  }
 getNews();
}, []);
  return(
    <ScrollView>
    {
      data.map((item, index) => {
        return (
        <View style={styles.articleWrapper}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleDesc}>{item.description}</Text>
        <Image style={styles.articleImage} source={{uri: `${item.urlToImage}`}}/>
        <Text style={styles.articleOther}>{item.source.name}</Text>
        <Text style={styles.articleOther}>{item.author}</Text>
        <Text style={styles.articleLink} onPress={() => Linking.openURL(`${item.url}`)}>{item.url}</Text>
        </View>
        )
      })
    }
    </ScrollView>
  )
}













const CurrencyScreen = ({navigation}) => {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  const [currency, setCurrency] = useState();
  const [valueTo, setValueTo] = useState();
  const [amount, setAmount] = useState();
  const [exchange, setExchange] = useState();
  const [cur, setCur] = useState();
  const [tempAmount, setTempAmount] = useState();
  const coolData = [

  ];
  handleCurrency = () =>{
    
      const getAmount = () => {
        return fetch(`https://api.exchangerate.host/convert?from=${currency}&to=${valueTo}`
    ).then(response => response.json())
        .then(json => {
        setExchange(json.result);
        return exchange;
        })
      }
      getAmount();
      console.log(exchange);
      console.log(exchange*amount);
      setCur(exchange*amount);
      setTempAmount(amount);
  }
  useEffect(() =>{
  const getExchange = () => {
    return fetch(`https://api.exchangerate.host/latest`
).then(response => response.json())
    .then(json => {
    console.log(json);
    setData(json.rates);
    return data;
    })
  }
  getExchange();
  }, []);
  const cool = Object.entries(data);
  cool.map((item, index) => {
    item.pop();
    coolData.push(item);
    })
  return(
    <ScrollView>
    <Text style={styles.curText}>What currency do you want to convert from?</Text>
    <SelectList 
    data={coolData}
    setSelected={setSelected}
    onSelect={() => setCurrency(selected)}
    />  
    <View style={styles.amountView}>
    <Text style={styles.curText}>Amount to convert:</Text>
    <NumericInput onChange={value => setAmount(value)}/>
    </View>
    <Text style={styles.curText}>What currency do you want to convert to?</Text>
    <SelectList 
    data={coolData}
    setSelected={setSelected}
    onSelect={() => setValueTo(selected)}
    />  
    <TouchableOpacity style={styles.currencyButton} onPress={() => handleCurrency()}><Text style={styles.currencyText}>Convert</Text></TouchableOpacity>
    <Text style={styles.result} >{tempAmount} {currency} = {cur} {valueTo}</Text>
    </ScrollView>
  )
}





//Cheatsheet navigation to different pdfs 
const CheatScreen = ({navigation}) => {
  return(
    <View style={styles.navWrap}>
    <TouchableOpacity
    style= {styles.cheatContainer}
    onPress= {() => navigation.navigate('Html')}><View style={styles.wrap}><Text style={styles.squareText}>Html5</Text></View>
    </TouchableOpacity>
    <TouchableOpacity
    style= {styles.cheatContainer}
    onPress= {() => navigation.navigate('Css')}><View style={styles.wrap}><Text style={styles.squareText}>Css</Text></View>
    </TouchableOpacity>
    <TouchableOpacity
    style= {styles.cheatContainer}
    onPress= {() => navigation.navigate('Javascript')}><View style={styles.wrap}><Text style={styles.squareText}>Javascript</Text></View>
    </TouchableOpacity>
    <TouchableOpacity
    style= {styles.cheatContainer}
    onPress= {() => navigation.navigate('React')}><View style={styles.wrap}><Text style={styles.squareText}>React</Text></View>
    </TouchableOpacity>
    </View>
  )
}

const HtmlCheatScreen = ({navigation}) =>{
  return(
    <PDFHtml/>
  )
}

const CssCheatScreen = ({navigation}) =>{
  return(
    <PDFCss/>
  )
}

const JavascriptCheatScreen = ({navigation}) =>{
  return(
    <PDFJs/>
  )
}

const ReactCheatScreen = ({navigation}) =>{
  return(
    <PDFReact/>
  )
}







//Main function creates the different navigations and direct the user to Home automatically
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
    <Stack.Screen name="Html" component={HtmlCheatScreen} options={{title: 'Html Cheat Sheet'}}/>
    <Stack.Screen name="Css" component={CssCheatScreen} options={{title: 'Css Cheat Sheet'}}/>
    <Stack.Screen name="Javascript" component={JavascriptCheatScreen} options={{title: 'Js Cheat Sheet'}}/>
    <Stack.Screen name="React" component={ReactCheatScreen} options={{title: 'React Cheat Sheet'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}












//Stylesheet with variables for different components
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
    weatherText:{
      fontSize: 20,
      fontWeight: '400',
      marginTop:10,
      fontFamily: 'AvenirNext-Italic',
    },
    weatherWrap:{
      flexDirection: 'column',
      paddingHorizontal: 50,
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 3,
      marginVertical: 20,
      paddingVertical: 20,
      marginHorizontal: 10,
      borderRadius:10,
    },
    cityName:{
      fontSize: 25,
      fontWeight: '600',
      fontFamily: 'AvenirNext-Italic',
      textAlign: 'center',
      textDecorationLine: 'underline',
      marginTop: 150,
    },
    articleWrapper:{
      paddingHorizontal: 20,
      paddingVertical:30,
      flexDirection: 'column',
      borderTopColor: 'gray',
      borderTopWidth: 2,
      marginBottom:20,
    },
    articleImage:{
      width: 350,
      height: 300,
    },
    articleTitle:{
      fontSize: 30,
      fontWeight: 'bold',
    },
    articleDesc:{
      fontSize:15,
      fontWeight: 400,
    },
    navWrap:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
    },
    cheatContainer: {
      marginLeft: 20,
      marginTop: 10,
      width: 100,
      height: 100,
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 0.2,
      borderRadius: 30,
    },
    articleLink: {
      marginTop:10,
      color: 'blue',
      textDecorationLine: 'underline',
    },
    selector: {
    },
    curText: {
      color: 'black',
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 20,
      textShadowColor: 'black',
      textShadowRadius: 1,
    },
    curInput:{
      width: '100%',
      fontSize: 18,
      color:'black',
      fontWeight: '500',
    },
    amountView:{
      alignItems: 'center',
      marginVertical: 40,
    },
    currencyButton:{
      marginVertical: 20,
      marginHorizontal: 20,
      width:'90%',
      height:'8%',
      backgroundColor:'black',
      borderRadius: 12,
      justifyContent:'center',
      alignItems:'center',
    },
    currencyText:{
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    result:{
      borderColor:'black',
      borderWidth:2,
      textAlign:'center',
      marginHorizontal:20,
      fontSize:25,
      fontFamily:'AvenirNext-Italic',
      borderRadius:10,
    },
    weatherImage:{
      width: 100,
      height: 100,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 50,
    },
    scrollWrapper:{
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default App;
