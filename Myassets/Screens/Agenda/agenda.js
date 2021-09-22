import React, { useState } from 'react';
import { View, Text,Button } from 'react-native'
import {useNavigation} from "@react-navigation/native";
//import DatePicker from  "react-native-datepicker";
var id=1;
import navigationstrings from '../constants/constants';
export default function agenda({navigation,route}) {
        const exnavigation=useNavigation();
      
        
        const goToHome=()=>{
        exnavigation.navigate(navigationstrings.HOME,{text:date})
          
    }
        const [date, setDate] = useState(route.params.start);
        const startdate=route.params.start;
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Start {startdate}</Text>
            <Text>End {date}</Text>
            {/* <DatePicker
              mode="date"
              date={date}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              placeholder="select date"
              onDateChange={(date) => {
                setDate( date );
              }}
            /> */}
            <Button title="Save" onPress={goToHome}></Button>
          </View>
        );
      }
      
  



