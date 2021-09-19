import React from 'react'
import { View, Text } from 'react-native'

export default function agenda() {
    
        const [date, setDate] = useState(new Date().dateString);
        console.log(new Date());
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Agenda Screen</Text>
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
      
  



