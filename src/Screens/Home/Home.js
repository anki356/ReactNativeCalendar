import React, { useState } from 'react';
import {  useNavigation} from "@react-navigation/native";
import { View, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
//import DatePicker from 'react-native-datepicker';
import navigationstrings from '../constants/constants';
export default function Home({navigation,route}) {
  React.useEffect(() => {
    if (route.params?.text) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.text]);

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
         <Text style={{ margin: 10 }}>Eventdetails: {route.params?.text}</Text>
        <Button
          title="Go to Agenda"
          onPress={gotoScreen}
        />
      </View>
    );
  }
  
  


