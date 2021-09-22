import React, { useRef, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Calendar } from 'react-native-calendars';

import navigationstrings from '../constants/constants';


export default function Home({ navigation, route }) {


  const extnavigation = useNavigation();



  const [selectedday, setSelectedday] = useState('');
  
  const changedate =  (day) => {
    setSelectedday(day.dateString);
  };
  const gotoScreen = () => {
    extnavigation.navigate(navigationstrings.AGENDA, { start: selectedday })
  }
  const event = useRef([]);
  //const[events,setEvents]=useState([]);
  const storedData = async () => {
    try {
      let getData = await AsyncStorage.getItem("calendar");
      if (getData) {
        console.log("data from get data ", JSON.parse(getData));
        //assign data to event ref variable
        event.current = [JSON.parse(getData)];

      
      }
      else
        console.log("no data found in getData variable")
    } catch (err) {
      console.log(" get data from asyncstorage ", err);
    }
  }
  
  //stored asyncDAta
  const asynStore = async  () =>{
    try{
      await AsyncStorage.setItem("calendar",JSON.stringify(event.current))
    }catch(err){
      console.log("stored data error",err)
    }
  }
  
  
  React.useEffect(() => {
 
    storedData();
    
    //if we ave params then do the process
    if(route.params){
      console.log(route.params.text, " data ");
      // setEvent([...event,route.params.text ])
      event.current.push(route.params.text);
     
      
      asynStore();
    } 
    
 
    
    console.log(event.current);

    //console.log(await AsyncStorage.setItem('calendar',route.params.text)
   /*  if (route.params?.text) {

      // setEvent(event=>[...event,route.params?.text]);
      setEvent(event => [...event, route.params?.text])
    } */


  }, [route.params?.text],


  );






  
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Text>{renderList}</Text> */}

      {event.current.map((e, index) =>
        <Text key={index} >{e}</Text>)}
      <Calendar
        onDayPress={(day) => {
          changedate(day);
        }}
        markedDates={{
          [selectedday]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'blue',
          },
        }}
      /><View>
      </View>

      <Button
        title="Go to Agenda"
        onPress={gotoScreen}
      />
    </View>
  );
}




