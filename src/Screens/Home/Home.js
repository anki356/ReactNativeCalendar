import React, { useState } from 'react';
import {  useNavigation} from "@react-navigation/native";
import { View, Text, Button, PanResponder } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calendar } from 'react-native-calendars';
//import DatePicker from 'react-native-datepicker';
import navigationstrings from '../constants/constants';
export default function Home({navigation,route}) {
  const extnavigation=useNavigation();
    const [selectedday, setSelectedday] = useState('');
    
    
    
  React.useEffect(() => {
    if (route.params?.text) {
      
     
    }
  }, [route.params?.text]);

          
      
 


  
    const changedate = (day) => {
      setSelectedday(day.dateString); 
    };
    const gotoScreen=()=>{
      extnavigation.navigate(navigationstrings.AGENDA,{start:selectedday})
    }
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
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
         <Text style={{ margin: 10 }}>Eventdetails:{route.params?.text}</Text></View>
       
        <Button
          title="Go to Agenda"
          onPress={gotoScreen}
        />
      </View>
    );
  }
  
  


