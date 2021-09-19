import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DatePicker from 'react-native-datepicker';

export default function Home() {
    const [selectedday, setSelectedday] = useState('');
    const changedate = (day) => {
      setSelectedday(day.dateString);
    };
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
          onPress={() => navigation.navigate('Agenda')}
        />
      </View>
    );
  }
  
  


