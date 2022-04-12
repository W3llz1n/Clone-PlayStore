import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons'

import Home from '../Pages/Home/index'
import Jogos from '../Pages/Jogos/index'
import { TouchableOpacity } from 'react-native-web';

const Stack = createNativeStackNavigator();

function Routes() {
 return (
   <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen 
           name='Home' 
           component={Home} 
           options={{headerShown:false}}/>
           <Stack.Screen 
           name='Jogos' 
           component={Jogos} 
           options={{
            headerStyle:{
            backgroundColor: "#042434"
          },
          headerTintColor:"#fff",
          headerRight: () =>(
            <TouchableOpacity style={{marginRight: 15}}>
                <Ionicons
                name='ios-search-sharp'
                size={24} 
                color="white"
                />
            </TouchableOpacity>
          )
          }}/>
       </Stack.Navigator>
   </NavigationContainer>
  );
}

export default Routes;