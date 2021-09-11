import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {HomeScreen} from '../screens/HomeScreen'
import { RNScreen } from '../screens/RNScreen'

const Stack = createStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="RN Screen" component={RNScreen} />
    </Stack.Navigator>
  )
}
