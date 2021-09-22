import React  from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationstrings from '../Screens/constants/constants';
 
import Home  from '../Screens/Home/Home';
import Agenda  from '../Screens/Agenda/agenda';
import Cards from '../Screens/Cards/cards'
const Stack = createNativeStackNavigator();



export default function Homestack() {
    return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={navigationstrings.HOME} component={Home} />
        <Stack.Screen name={navigationstrings.AGENDA} component={Agenda} />
        <Stack.Screen name={navigationstrings.CARDS} component={Cards} options={{presentation:'transparentModal'}} />
       
      </Stack.Navigator>
    </NavigationContainer>
    )
}
