import * as React from 'react';

import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Todo from '../screen/Todo';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          
        <Stack.Screen 
         name="Home" component={Home} 
         options={{
        title:"ToDo Application",
        headerStyle:{
            backgroundColor:'white',
        },
        headerTintColor:"green",
        headerTitleStyle:{
            fontWeight:"bold"
            
        },
        headerTitle: props=><Image style={{width:50, height:50}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8VDOOCRjxQIlq-btrySpakiXS50YiwpH9Q&usqp=CAU"}}></Image>
       
         }}
         />
        <Stack.Screen name="Todo"
         options={{
            title:"ToDo Application",
            headerStyle:{
                backgroundColor:'blue',
            },
            headerTintColor:"white",
            headerTitleStyle:{
                fontWeight:"bold"
                
            },
            // headerTitle: props=><Image style={{width:50, height:50}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8VDOOCRjxQIlq-btrySpakiXS50YiwpH9Q&usqp=CAU"}}></Image>
           
             }}
        component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;