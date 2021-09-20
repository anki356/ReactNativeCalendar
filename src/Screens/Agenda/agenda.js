import React from 'react'
import { useState } from "react";
import { View, Text } from 'react-native'

export default function agenda({navigation,route}) {
       
        console.log(route.params.start);
        const [date, setDate] = useState(new Date().dateString);
        
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Start {route.params.start}</Text>
            <Text>End</Text>
            <DatePicker
              mode="datetime"
              date={date}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              placeholder="select date"
              onDateChange={(date) => {
                setDate({ date });
              }}
            />
          </View>
        );
      }
      
  



