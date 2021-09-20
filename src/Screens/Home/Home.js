import React, { useState } from 'react';
import {  useNavigation} from "@react-navigation/native";
import { View, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
//import DatePicker from 'react-native-datepicker';
import navigationstrings from '../constants/constants';
export default function Home() {
  const extnavigation=useNavigation();
    const [selectedday, setSelectedday] = useState('');
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
        />
        <Button
          title="Go to Agenda"
          onPress={gotoScreen}
        />
      </View>
    );
  }
  
  


